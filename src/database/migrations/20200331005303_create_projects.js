exports.up = function (knex) {
  return knex.schema.createTable('projects', function (table) {
    table.string('id').primary()
    table.string('title').notNullable()
    table.specificType('tasks', 'text[]')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
