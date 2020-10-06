const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'development') {
  dotenv.config({path: '../../.env'})
}

module.exports = {
  development: {
    dialect: process.env.DB || 'pg',
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASSWORD || 'postgress',
    database: process.env.DB_NAME || 'myapp',
    host: process.env.DB_HOST || 'localhost',
  },
  production: {
    dialect: process.env.DB || 'pg',
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASSWORD || 'postgress',
    database: process.env.DB_NAME || 'myapp',
    host: process.env.DB_HOST || 'localhost',
  }
}