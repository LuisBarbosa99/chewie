'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetshopSchema extends Schema {
  up () {
    this.create('petshops', (table) => {
      table.increments()
      table.string('name').notNullable();
      table.string('address').notNullable();
      table.string('phone').notNullable();
      table.string('username')
        .notNullable()
        .unique();
      table
        .float('rating')
        .notNullable()
        .defaultTo(0.00);
      table
        .integer('user_id')
        .unsigned()
        .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('petshops')
  }
}

module.exports = PetshopSchema
