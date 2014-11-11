module.exports = {
    
    /*
     * Returns a controller from controllers folder
     */
    getController: function (controller) {
        var config = require('../config/config');
        var path = require('path');
        var fs = require('fs');
        var controller = path.join(config.files.root, config.files.controllers, controller + '.js');
        
        if (fs.existsSync(controller)) {
            controller = require(controller);
            controller = new controller();
            return controller;
        }

        return false;
    }

}
