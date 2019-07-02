require('dotenv').config();
const webServer = require('./services/web-server.js');
const database = require('./services/database.js');
const dbConfig = require('./config/database.js');
const defaultThreadPoolSize = 4;

process.env.UV_THREADPOOL_SIZE = dbConfig.rtPool.poolmax + defaultThreadPoolSize;

async function startup() {
    console.log('Starting Application...');
    try {
        console.log('Initializing Database module...');

        await database.initialize();
    } catch(err) {
        console.error(err);

        process.exit(1); //Non-zero failure code
    }

    try {
        console.log('Initializing Web Server module...');

        await webServer.initialize();
    } catch(err) {
        console.error(err);

        process.exit(1); //Non-zero failure code
    }
}

startup();

async function shutdown(e) {
    let err = e;

    console.log('Shutting Down');

    try {
        console.log('Closing web server module');

        await webServer.close();
    } catch(e) {
        console.log('Encountered Error', e);

        err = err || e;
    }

    try {
        console.log('Closing Database Module...');

        await database.close();
    } catch(err) {
        console.log('Encountered Error', e);
        
        err = err || e;
    }

    console.log('Exiting Process');

    if (err) {
        process.exit(1); //Non-zero failure code
    } else {
        process.exit(0);
    }
}

process.on('SIGTERM', () => {
    console.log('Received SIGTERM');

    shutdown();
});

process.on('SIGINT', () => {
    console.log('Received SIGINT');

    shutdown();
});

process.on('uncaughtException', err => {
    console.log('Uncaught exception');
    console.error(err);

    shutdown(err);
});