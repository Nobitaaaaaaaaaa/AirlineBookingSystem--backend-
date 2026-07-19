const { StatusCodes } = require('http-status-codes');
const {AirplaneService} = require('../services');
const {ErrorResponse, SuccessResponse} = require('../utils/common');

/*
POST:/airplane
req-body {modelNumber: 'airbus320 ' , capacity: 200}
*/


async function createAirplane(req,res){
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.data = airplane;
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
async function getAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
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
POST:/airplane/:id
req-body {}
*/

async function getAirplane(req,res){
    try{
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
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
    createAirplane,
    getAirplanes,
    getAirplane
}
