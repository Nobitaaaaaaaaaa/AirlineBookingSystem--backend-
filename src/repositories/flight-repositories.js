const CrudRepository = require('./crud-repository');
const {Flight , Airplane} = require('../models');
const {Sequelize} = require('sequelize');
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter , sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
               { model: Airplane,
                required: true,
                as:"airplaneDetails"
                },
                {
                    model: Airport,
                    required: true,
                   as:"departureAirport",
                    on:{
                        coi1:Sequelize.col(("Flight.departureAirportId"),"=" , Sequelize.col("Airport.code") )
                    },
                    include:{
                        model: City,
                        required: true,

                    }
                   
                },
                {
                    model: Airport,
                    required: true,
                   as:"arrivalAirport",
                   on:{
                        coi1:Sequelize.col(("Flight.arrivalAirportId"),"=" , Sequelize.col("Airport.code") )
                   } ,
                   include:{
                        model: City,
                        required: true,
                        
                    }
                }

            ]
        });
        return response;
    }

    
}

module.exports = FlightRepository;