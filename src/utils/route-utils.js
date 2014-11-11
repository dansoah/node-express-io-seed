module.exports = {
    doGet: function (controller, req, res) {
        if (controller = module.exports.getController(controller))
            controller.doGet(req, res);
        else
            do404(req, res);
    },
    doPost: function (controller, req, res) {
        if (controller = module.exports.getController(controller))
            controller.doPost(req, res);
        else
            do404(req, res);
    },
    doPut: function (controller, req, res) {
        if (controller = module.exports.getController(controller))
            controller.doPut(req, res);
        else
            do404(req, res);
    },
    doDelete: function (controller, req, res) {
        if (controller = module.exports.getController(controller))
            controller.doDelete(req, res);
        else
            do404(req, res);
    },
    getController: function (controller) {
        var module = require('../utils/module.js');
        return module.getController(controller);
    },
    do404: function (req, res) {
        res.send('404');
    }
}