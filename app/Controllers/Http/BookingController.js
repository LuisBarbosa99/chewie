'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Booking = use('App/Models/Booking');
const Client = use('App/Models/Client');
const Petshop = use('App/Models/Petshop');

/**
 * Resourceful controller for interacting with bookings
 */
class BookingController {
  /**
   * Show a list of all bookings.
   * GET bookings
   *
   */
  async index () {
    const bookings = await Booking.query().with('client').fetch();

    return bookings;
  }

  /**
   * Create/save a new booking.
   * POST bookings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Auth} ctx.auth
   */
  async store ({ request, auth, response }) {
    const {name, date_start, date_end, petshop_username, service_id, pet_id} = request.body;

    const client = await Client.findByOrFail('user_id', auth.user.id);
    if(!client) return response.status(406).json({error:"Client was not registered"});
   
    const petshop = await Petshop.findByOrFail('username', petshop_username);
    const service = await petshop.services().where('id',service_id).fetch();
    const pet = await client.pets().where('id', pet_id).fetch();

    const booking = await Booking.create({
      name,
      date_start,
      date_end,
      client_id: client.id,
      petshop_id: petshop.id,
      service_id,
      pet_id
    });

    return response.json({
      booking,
      pet,
      petshop,
      service 
    });
  }

  /**
   * Display a single booking.
   * GET bookings/:id
   *
   * @param {object} ctx
   */
  async show ({ params }) {
    const booking = await Booking.findOrFail(params.id);

    return booking;
  }

  /**
   * Update booking details.
   * PUT or PATCH bookings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
      const data = request.only(['name', 'date', 'pet_id', 'service_id']);
      const booking = await Booking.find(params.id);

      booking.merge(data);
      await booking.save();

      return booking;
  }

  /**
   * Delete a booking with id.
   * DELETE bookings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const booking = await Booking.findOrFail(params.id);

    const client = await booking.client().fetch();

    if(client.user_id !== auth.user.id) 
      return response.status(401).json({message: "Booking delection not authorized"});

    booking.delete();
  }
}

module.exports = BookingController
