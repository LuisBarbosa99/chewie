'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.string('name').notNullable();
      table.decimal('value');
      table.string('duration');
      table.string('employee');
      table.string('description');
      table
        .integer('petshop_id')
        .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('services')
  }
}

module.exports = ServiceSchema
