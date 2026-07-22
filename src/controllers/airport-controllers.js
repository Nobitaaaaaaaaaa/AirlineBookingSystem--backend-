const { StatusCodes } = require('http-status-codes');
const {AirportService} = require('../services');
const {ErrorResponse, SuccessResponse} = require('../utils/common');

/*
POST:/flight
req-body {flightNumber: 'AA123', airplaneId: '1', departureAirportId: '1', arrivalAirportId: '2', price: 500, totalSeats: 100, departureTime: '2023-10-10T10:00:00Z', arrivalTime: '2023-10-10T12:00:00Z', boardingGate: 'A1'}
*/



async function createAirport(req,res){
    try{
        const airport = await AirportService.createAirport({
            name : req.body.name,
            location : req.body.location
        });
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.CREATED)
        .json({SuccessResponse})

    }catch(error){
        ErrorResponse.message =error;
        return res
        .status(StatusCodes.statusCode)
        .json({ErrorResponse});
    }
}

/*GET:/airport
req-body {}
*/
async function getAirports(req,res){
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
        .status(StatusCodes.OK)
        .json({SuccessResponse});
    }catch(error){
        ErrorResponse.message = error;
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ErrorResponse});
    }
}

/*
POST:/airport/:id
req-body {}
*/

async function getAirport(req,res){
    try{
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.OK)
        .json({SuccessResponse});
    }catch(error){
        ErrorResponse.message = error;
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ErrorResponse});
    }
}


/*DELETE:/airport
req-body {}
*/
async function destroyAirport(req,res){
    try{
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
        .status(StatusCodes.OK)
        .json({SuccessResponse});
    }catch(error){
        ErrorResponse.message = error;
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ErrorResponse});
    }
}




module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}