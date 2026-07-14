const {StatusCodes} = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name == 'TypeError'){
            throw newAppError('Cannot create a new Airplane object', StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

module.exports = {
    createAirplane
}