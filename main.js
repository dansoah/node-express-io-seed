'use strict';

//Node modules
var path = require('path');
var io = require('socket.io');
var express = require('express');
var session = require('express-session');
var _ = require('underscore');
var bodyParser = require('body-parser');

//Control vars
var self_dir = __dirname;
var config_dir = path.join(self_dir, 'src', 'config');

//System Modules
var config = require(path.join(config_dir, 'config'));
var routes = require(path.join(config_dir, 'routes'));
var requests = require(path.join(config_dir, 'requests'));

//Generating app
var app = express();
app.set('views',config.files.views);
app.engine('html', require('ejs').renderFile);

//Server's rendering paths
app.use('/image', express.static(path.join(self_dir,config.files.image)));
app.use('/script', express.static(path.join(config.files.javascript)));
app.use('/stylesheet', express.static(path.join(config.files.stylesheet)));
app.use('/font', express.static(path.join(config.files.font)));


//Setting up http and socket servers
var server = app.listen(config.app.port);
var socket_listener = io.listen(server);

//Middlewares
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: '4tg35y' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//HTTP Routing engine
var route = 0;
var method = '';
for (route in routes) {

    route = routes[route];

    for (method in config.app.methods) {

        method = config.app.methods[method].toLowerCase();
        if (_.has(route.methods, method)) {

            if (typeof route.methods[method] === 'function') {

                switch (method) {

                    case 'get':
                        app.get(route.name, route.methods[method]);
                        break;
                    case 'post':
                        app.post(route.name, route.methods[method]);
                        break;
                    case 'put':
                        app.put(route.name, route.methods[method]);
                        break;
                    case 'delete':
                        app.delete(route.name, route.methods[method]);
                        break;

                }

            }

        }//if(_.has())

    }//for(method in config.app.methods)

}//for(route in routes)

//Socket listening engine
var request = 0;
for (request in requests) {
    request = requests[request];
    
    socket_listener.on(request.event, request.function);
}
