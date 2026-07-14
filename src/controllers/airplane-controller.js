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

module.exports = {
    createAirplane
}
