const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong while creating city";
        
        ErrorResponse.error = new AppError(['City Name not found in the request'], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next(); 
}


module.exports = {
    validateCreateRequest
}