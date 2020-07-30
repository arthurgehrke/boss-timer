const { Router } = require('express')

const bossTimmingMock = require('./mock/bossTimingMock')

const routes = Router()

routes.get('/', (_, response) => {
  return response.status(200).json({ message: 'Hello World' })
})

routes.get('/bossTiming', (_, response) => {
  return response.status(200).json(bossTimmingMock)
})

module.exports = routes
