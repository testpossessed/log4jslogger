describe('Log4JsLogger', function(){
    var module, log4jsMock, loggerMock;
    var modulePath = '../index.js';
    var mockery = require('mockery');
    var substitute = require('jssubstitute');
    var message = 'Log Message';

    beforeEach(function(){
        substitute.throwErrors();

        log4jsMock = substitute.for({
            getLogger: function(){
            },
            configure: function(){
            }
        });
        
        loggerMock = substitute.for({
            trace: function(){
            },
            debug: function(){
            },
            info: function(){
            },
            warn: function(){
            },
            error: function(){
            },
            fatal: function(){
            }
        });

        log4jsMock.returns('getLogger', loggerMock);

        mockery.enable({ useCleanCache: true, warnOnUnregistered: false });
        mockery.registerAllowable(modulePath);
        mockery.registerMock('log4js', log4jsMock);
        module = require(modulePath);
    });

    afterEach(function(){
        mockery.deregisterAll();
        mockery.disable();
    });

    it('Should be defined', function(){
        expect(module).toBeDefined();
    });

    it('Should define a method to log trace messages', function(){
        expect(module.trace).toBeDefined();
        expect(typeof module.trace).toBe('function');
    });

    it('Should define a method to log debug messages', function(){
        expect(module.debug).toBeDefined();
        expect(typeof module.debug).toBe('function');
    });

    it('Should define a method to log info messages', function(){
        expect(module.info).toBeDefined();
        expect(typeof module.info).toBe('function');
    });

    it('Should define a method to log warning messages', function(){
        expect(module.warn).toBeDefined();
        expect(typeof module.warn).toBe('function');
    });

    it('Should define a method to log error messages', function(){
        expect(module.error).toBeDefined();
        expect(typeof module.error).toBe('function');
    });
    it('Should define a method to log fatal messages', function(){
        expect(module.fatal).toBeDefined();
        expect(typeof module.fatal).toBe('function');
    });

    it('Should configure log4js on creation', function(){
        expect(log4jsMock.receivedWith('configure', './config/log4js.json'));
    });

    it('Should get logger on creation', function(){
        expect(log4jsMock.receivedWith('getLogger'));
    });

    it('Should delegate to underlying logger on trace', function(){
        module.trace(message);
        expect(loggerMock.receivedWith('trace', message));
    });

    it('Should delegate to underlying logger on debug', function(){
        module.debug(message);
        expect(loggerMock.receivedWith('debug', message));
    });

    it('Should delegate to underlying logger on info', function(){
        module.info(message);
        expect(loggerMock.receivedWith('info', message));
    });

    it('Should delegate to underlying logger on warn', function(){
        module.warn(message);
        expect(loggerMock.receivedWith('warn', message));
    });

    it('Should delegate to underlying logger on error', function(){
        module.error(message);
        expect(loggerMock.receivedWith('error', message));
    });

    it('Should delegate to underlying logger on fatal', function(){
        module.fatal(message);
        expect(loggerMock.receivedWith('fatal', message));
    });
});