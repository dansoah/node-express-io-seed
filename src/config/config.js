var path = require('path');

module.exports = {
    app:{
        port:8010,
        url:'http://localhost:8080',
        methods:['get','post','put','delete'],        
    },
    database:{
        user:'root',
        password:'root',
        port:3386,
        schema:'xxx'
    },
    files:{
        root:'',
        views:path.join('public','views'),
        javascript:path.join('public','gui','javascript'),
        image:path.join('public','gui','images'),
        stylesheet:path.join('public','gui','css'),
        font:path.join('public','gui','fonts'),
        controllers:path.join('src','controllers')
    }
};
