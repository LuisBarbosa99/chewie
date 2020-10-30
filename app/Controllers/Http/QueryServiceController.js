'use strict'

const Petshop = use('App/Models/Petshop');
const Booking = use('App/Models/Booking');

class QueryServiceController {  
    async index({params}){
        const petshop = await Petshop.findByOrFail('username', params.petshop_username);

        const services = await petshop.services().fetch();

        return services;
    }
    
    async show({params}){
        const bookings = await Booking.query().where('service_id',params.id).fetch()

        return bookings;
    }
}

module.exports = QueryServiceController
