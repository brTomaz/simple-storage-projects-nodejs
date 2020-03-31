const connection = require('../database/connection')

module.exports = async function CheckProjectInDB (req, res, next) {
  const { id } = req.params
  const project = await connection('projects').where('id', id).select('title').first()

  if (!project) {
    return res.status(400).json({ error: 'Project does not exist in the database.' })
  }

  return next()
}
