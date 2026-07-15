const {StatusCodes} = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError('Cannot create a new Airplane object', StatusCodes.BAD_REQUEST, explanation);
        }
        throw error;
    }
}

module.exports = {
    createAirplane
}