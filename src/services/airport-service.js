const {StatusCodes} = require('http-status-codes');
const {AirportRepository} = require('../repositories');

const airportRepository = new AirportRepository();

async function createAirport(data){
    try{
        const airport = await airportRepository.create(data);
        return airport;
    }
    catch(error){
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError('Cannot create a new Airport object', StatusCodes.BAD_REQUEST, explanation);
        }
        throw error;
    }
}

async function getAirports(){
    try{
        const airports = await airportRepository.getAll();
        return airports;
    }
    catch(error){
        throw new AppError('Cannot retrieve data for all Airport objects', StatusCodes.BAD_REQUEST, explanation);
    }
}

async function getAirport(id){
    try{
        const airport = await airportRepository.get(id);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not available', StatusCodes.NOT_FOUND, ['The airport you requested is not available']);
        } 
        throw new AppError('Cannot retrieve data for Airport object', StatusCodes.BAD_REQUEST, explanation);
    }


} 


async function destroyAirport(id){
    try{
        const airport = await airportRepository.destroy(id);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not available', StatusCodes.NOT_FOUND, ['The airport you requested is not available']);
        }
        throw new AppError('Cannot delete data for Airport object', StatusCodes.BAD_REQUEST, explanation);
    }

}
    
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}
