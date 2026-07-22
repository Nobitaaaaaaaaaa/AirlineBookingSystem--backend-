const {StatusCodes} = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const op = require('sequelize').Op;


const cityRepository = new CityRepository();

async function createCity(data){
    try{
            const city = await cityRepository.create(data);
            

            if(query.price){
                query.price = Number(query.price);
                customFilter.price = {
                    [op.between]:[minPrice, (maxPrice) == undefined ? 20000:maxPrice]
                };
            }
        }
        catch(error){
            if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                throw new AppError('Cannot create a new City object', StatusCodes.BAD_REQUEST, explanation);
            }
            throw error;
        }
}


module.exports = {
    createCity
}

