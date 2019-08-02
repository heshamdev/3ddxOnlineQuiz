const cogs = {
  development: {
    baseURL: 'http://localhost:3000',
  },
  production: {
    baseURL: 'http://api.hesham3ddx.co',
  }
}

module.exports = cogs[process.env.NODE_ENV || 'development']
module.exports = cogs[process.env.NODE_ENV || 'production']
