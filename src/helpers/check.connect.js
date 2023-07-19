const mongoose = require('mongoose');
const os = require('os')
const process = require('process')

const _SECONDS = 5000

// count connect
const countConnect = () => {
    return mongoose.connections.length
};

// check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnection = numCores * 5;

        console.log(`Active connection: ${numConnection}`)
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024}`)

        if (numConnection > maxConnection) {
            console.log(`Connection overload detected`)
        }
    }, _SECONDS) // monitor every 5 second
}

module.exports = {
    countConnect,
    checkOverload
};
