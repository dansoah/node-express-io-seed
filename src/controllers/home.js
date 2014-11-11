var controllerUtils = require('../utils/controller-utils');
module.exports = function(){
    
    this.doGet = function(req,res){
        controllerUtils.expressRender(res,'index.html');
    }
    
    this.doPost = function(req,res){
        
    }
    
    this.doPut = function(req,res){
        
    }
    
    this.doDelete = function(req,res){
        
    }
    
}