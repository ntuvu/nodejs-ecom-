const app = require('./src/app')
const PORT = 3333
const server = app.listen(PORT, () => {
  console.log(`App start with port ${PORT}`)
})

process.on('SIGINT', () => {
  server.close(() => console.log(`Exit server`))
  // app.notify
})