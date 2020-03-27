'use strict'
const Koa = require('koa')
const app = new Koa()

function importDefaultFromModule(m) {
  return m.default || m
}

const middlewares = importDefaultFromModule(require('./function/middlewares'))

for (const middleware of middlewares) {
  app.use(middleware)
}

app.listen(3000)
