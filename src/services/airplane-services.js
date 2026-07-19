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

async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error){
        throw new AppError('Cannot retrieve data for all Airplane objects', StatusCodes.BAD_REQUEST, explanation);
    }
}

async function getAirplane(id){
    try{
        const airplane = await airplaneRepository.get(id);
        return airplane;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not available', StatusCodes.NOT_FOUND, ['The airplane you requested is not available']);
        } 
        throw new AppError('Cannot retrieve data for Airplane object', StatusCodes.BAD_REQUEST, explanation);
    }


} 


async function detroyAirplane(id){
    try{
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not available', StatusCodes.NOT_FOUND, ['The airplane you requested is not available']);
        }
        throw new AppError('Cannot delete data for Airplane object', StatusCodes.BAD_REQUEST, explanation);
    }

}
    
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}
