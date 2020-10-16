'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Appointment = use('App/Models/Appointment');

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
  async store ({ request, auth }) {
    const {name, date, vet_id, vet_service_id, pet_id} = request.body;

    const appointment = await Appointment.create({
      name,
      date,
      user_id: auth.user.id,
      vet_id,
      vet_service_id,
      pet_id
    });

    return appointment;
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
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
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

    if(appointment.user_id !== auth.user.id) return response.status(401);

    appointment.delete();
  }
}

module.exports = AppointmentController
