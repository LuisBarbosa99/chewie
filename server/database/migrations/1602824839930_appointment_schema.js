'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()
      table.string('name').notNullable();
      table.datetime('date_start').notNullable();
      table.datetime('date_end').notNullable();
      table
        .integer('client_id')
        .notNullable();
      table
        .integer('vet_id')
        .notNullable();
      table
        .integer('vet_service_id')
        .notNullable();
      table
        .string('pet_name')
        .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema
