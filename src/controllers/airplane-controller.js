const { StatusCodes } = require('http-status-codes');
const {AirplaneService} = require('../services');

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
        return res
        .status(StatusCodes.CREATED)
        .json({
            success : true,
            message : 'Successfully created a new airplane',
            data : airplane,
            err : {}
        })

    }catch(error){
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success : false,
            message : 'Error occurred while creating the airplane',
            data : {},
            err : {
                message: error.message,
                name: error.name,
                explanation: error.errors ? error.errors.map(err => err.message) : error.message
            }
        });
    }
}

module.exports = {
    createAirplane
}