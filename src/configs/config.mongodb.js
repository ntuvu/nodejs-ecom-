const dev = {
    server: {
        port: process.env.DEV_APP_PORT || 3052
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'shopDEV'
    }
}

const pro = {
    server: {
        port: process.env.DEV_APP_PORT || 3333
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'shopPRO'
    }
}

const config = {dev, pro}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]