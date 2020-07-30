const { Router } = require('express')

const routes = Router()

routes.get('/', (_, response) => {
  return response.status(200).json({ message: 'Hello World' })
})

module.exports = routes
