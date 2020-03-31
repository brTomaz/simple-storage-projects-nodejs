const connection = require('../database/connection')

module.exports = {
  async create (req, res) {
    const { id, title } = req.body

    try {
      await connection('projects').insert({
        id,
        title
      })
      return res.status(201).send()
    } catch (error) {
      return res.status(400).json({
        message: 'The project could not be registered with this ID.',
        errors: `${error}`
      })
    }
  },

  async index (req, res) {
    const projects = await connection('projects').select('*')

    return res.json(projects)
  },

  async put (req, res) {
    const { id } = req.params
    const { title: newTitle } = req.body

    await connection('projects')
      .where({ id })
      .update({
        title: newTitle
      })

    return res.status(200).send()
  },

  async delete (req, res) {
    const { id } = req.params

    await connection('projects').where('id', id).delete()

    return res.status(204).send()
  },

  async task (req, res) {
    const { id } = req.params
    const { title: task } = req.body
    try {
      await connection('projects').where('id', id).update({
        tasks: connection.raw('array_append(tasks, ?)', [task])
      })

      return res.status(201).send()
    } catch (error) {
      return res.status(400).json({
        message: 'The task could not be registered.',
        errors: `${error}`
      })
    }
  }
}
