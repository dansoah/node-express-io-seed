var routeUtils = require('../utils/route-utils.js');

module.exports = [
    {
        name: '/',
        methods: {
            get: function (req, res) {                
                routeUtils.doGet('home',req,res);
            }
        }
    }
]//module.exports = [...]

