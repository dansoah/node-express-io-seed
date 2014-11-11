var config = require('../config/config.js');

module.exports = {
    getDefaultVars: function(){
        return {
            url:config.app.url
        }
    },
    
    expressRender: function(res,view,view_data){
        
        if(typeof view_data === 'undefined'){
            view_data = null;
        }
        
        res.render(view,{
            utils: module.exports.getDefaultVars,
            data: view_data
        });
        
    }
}