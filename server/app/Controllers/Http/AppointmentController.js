'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Appointment = use('App/Models/Appointment');
const Client = use('App/Models/Client');
const Vet = use('App/Models/Vet');

/**
 * Resourceful controller for interacting with appointments
 */
class AppointmentController {
  /**
   * Show a list of all appointments.
   * GET appointments
   *
   */
  async index () {
    const appointments = await Appointment.query().with('client').fetch();

    return appointments;
  }

  /**
   * Create/save a new appointment.
   * POST appointments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Auth} ctx.auth
   */
  async store ({ request, auth, response }) {
    const {name, date_start, date_end, vet_username, vet_service_id, pet_name} = request.body;

    const client = await Client.findByOrFail('user_id', auth.user.id);
    if(!client) return response.status(406).json({error:"Client was not registered"});

    const vet = await Vet.findByOrFail('username', vet_username);
    const vetService = await vet.vetServices().where('id',vet_service_id).fetch();
    const pet = await client.pets().where('name', pet_name).fetch();

    const appointment = await Appointment.create({
      name,
      date_start,
      date_end,
      client_id: client.id,
      vet_id: vet.id,
      vet_service_id,
      pet_name
    });

    return response.json({
      appointment,
      pet,
      vet,
      vetService
    });
  }

  /**
   * Display a single appointment.
   * GET appointments/:id
   *
   * @param {object} ctx
   */
  async show ({ params }) {
    const appointment = await Appointment.findOrFail(params.id);

    return appointment;
  }

  /**
   * Update appointment details.
   * PUT or PATCH appointments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const data = request.only(['name','date','pet_name', 'vet_service_id']);
    const appointment = Appointment.find(params.id);

    appointment.merge(data);
    await appointment.save();

    return appointment;    
  }

  /**
   * Delete a appointment with id.
   * DELETE appointments/:id
   *
   * @param {object} ctx
   * @param {Auth} ctx.auth
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const appointment = await Appointment.findOrFail(params.id);

    const client = await appointment.client().fetch();

    if(client.user_id !== auth.user.id) 
      return response.status(401).json({message: "Appointment delection not authorized"});

    appointment.delete();
  }
}

module.exports = AppointmentController
