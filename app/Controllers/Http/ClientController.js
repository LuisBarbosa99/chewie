'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Client = use('App/Models/Client');
/**
 * Resourceful controller for interacting with clients
 */
class ClientController {
  /**
   * Show a list of all clients.
   * GET clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const clients = await Client.query().with('user').fetch();

    return clients;
  }

  /**
   * Create/save a new client.
   * POST clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth, response }) {
    const {name, phone} = request.body;
    if(auth.user.type !== 'client') 
      return response.status(403).json({message: `Wrong user type: instead of 'client', recieved '${auth.user.type}'`});

    const client = await Client.create({ user_id: auth.user.id , name, phone});

    return client;

  }

  /**
   * Display a single client.
   * GET clients/:id
   *
   * @param {object} ctx
   */
  async show ({ params, response }) {
    const client = await Client.find(params.id)

    const pets = await client.pets().fetch()
    const bookings = await client.bookings().fetch()
    const appointments = await client.appointments().fetch()

    return response.json({client, pets, bookings, appointments});
  }

  /**
   * Update client details.
   * PUT or PATCH clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    
      const data = request.only(['name', 'phone']);
      const client = await Client.find(params.id);

      client.merge(data);
      await client.save();

      return client;
  }

  /**
   * Delete a client with id.
   * DELETE clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const client = await Client.findOrFail(params.id);

    if (client.user_id !== auth.user.id) return response.status(401);

    client.delete();
  }
}

module.exports = ClientController
