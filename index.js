function Log4JsLogger(log4js){
    log4js.configure('./config/log4js.json');
    var logger = log4js.getLogger();

    this.trace = function(message){
        logger.trace(message);
    }

    this.debug = function(message){
        logger.debug(message);
    }

    this.info = function(message){
        logger.info(message);
    }

    this.warn = function(message){
        logger.warn(message);
    }

    this.error = function(message){
        logger.error(message);
    }

    this.fatal = function(message){
        logger.fatal(message);
    }
}

var log4js = require('log4js');
module.exports = new Log4JsLogger(log4js);