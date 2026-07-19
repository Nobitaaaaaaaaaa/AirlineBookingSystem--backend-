const { StatusCodes } = require('http-status-codes');
const {CityService} = require('../services');
const {ErrorResponse, SuccessResponse} = require('../utils/common');

/*POST:/city
req-body {name: 'New York'}
*/
async function createCity(req,res){
    try{
        const city = await CityService.createCity({
            name : req.body.name
        });
        SuccessResponse.data = city;
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
    createCity
}