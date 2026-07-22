const { StatusCodes } = require('http-status-codes');
const {Flight} = require('../services');
const {ErrorResponse, SuccessResponse} = require('../utils/common');

/*
POST:/flight
req-body {airplaneId: '1',arrivalAirportId: '1', departureTime: '2023-10-10T10:00:00Z', arrivalTime: '2023-10-10T12:00:00Z'}
*/



async function createFlight(req,res){
    try{
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            price : req.body.price,
            totalSeats : req.body.totalSeats,
            departureTime : req.body.departureTime,
            arrivalTime : req.body.arrivalTime,
            boardingGate : req.body.boardingGate,
        });
        SuccessResponse.data = flight;
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

/*GET:/flight
req-body {}
*/
async function getFlight(req,res){
    try{
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
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
POST:/flight/:id
req-body {}
*/

async function getFlight(req,res){
    try{
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
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


/*DELETE:/flight
req-body {}
*/
async function destroyFlight(req,res){
    try{
        const flight = await FlightService.destroyFlight(req.params.id);
        SuccessResponse.data = flight;
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

async function getAllFlights(req,res){
    try{
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res
        .status(StatusCodes.OK)
        .json({SuccessResponse});
    }catch(error){
        ErrorResponse.message = error;
        return res  
        .status(StatusCodes.INTERNAL_SERVER_ERROR)  

    }
}





module.exports = {
    createFlight,
    getFlights,
    getFlight,
    destroyFlight
}