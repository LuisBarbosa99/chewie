'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name', 64).notNullable();
      table.string('phone', 18);
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('booking_id')
        .references('id')
        .inTable('bookings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('appointment_id')
        .references('id')
        .inTable('appointments')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('pet_id')
        .references('id')
        .inTable('pets')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
