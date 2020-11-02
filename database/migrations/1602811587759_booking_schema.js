'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments()
      table.string('name').notNullable();
      table.datetime('date_start').notNullable();
      table.datetime('date_end').notNullable();
      table
        .integer('client_id')
        .notNullable();
      table
        .integer('petshop_id')  
      table
        .integer('service_id')  
      table
        .string('pet_name')
        .notNullable()
 
      table.timestamps()
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
