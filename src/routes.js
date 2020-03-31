const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const ProjectsController = require('./controllers/projects.controller')

const countRequests = require('./middlewares/countRequests')
const checkProjectInDB = require('./middlewares/checkProjectInDB')

const routes = express.Router()

routes.use(countRequests)

routes.post('/projects', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
    title: Joi.string().required()
  })
}), ProjectsController.create)

routes.get('/projects', ProjectsController.index)

routes.put('/projects/:id', checkProjectInDB, celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
}), ProjectsController.put)

routes.delete('/projects/:id', checkProjectInDB, celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
}), ProjectsController.delete)

routes.post('/projects/:id/tasks', checkProjectInDB, celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required()
  }, ProjectsController.task)
}), ProjectsController.task)

module.exports = routes
