# log4jslogger
A simple wrapper for log4js logger that configures itself from a file in a fixed location.

In the interest of not repeating myself over and over with the same code to provide my Node modules with basic logging capabilities I have created this module and shared it for anyone who cares to make use of it.

## Installing
log4jslogger is available via npm

```
npm install log4jslogger --save
```

Once you have it you need to create a **config** folder in the root of your application.

In this folder create a new **log4js.json** file

In this file put your log4js configuration something like this, which configures output to the console and a daily rolling date file appender.

```json
{
    "appenders": [
        { 
            "type":  "console"
        },
        {
            "type": "dateFile",
            "filename": "/logs/module.log",
            "pattern": "-dd-MM-yyyy",
            "maxLogSize": 20480
        }
    ]
}
```

Look [here](https://github.com/nomiddlename/log4js-node "log4js on GitHub") for more options

## Usage
Using log4jslogger is pretty simple

```javascript
var logger = require('log4jslogger');
logger.trace('Message');
logger.debug('Message');
logger.info('Message');
logger.warn('Message');
logger.error('Message');
logger.fatal('Message');
```

That's it couldn't be simpler and less repetition

