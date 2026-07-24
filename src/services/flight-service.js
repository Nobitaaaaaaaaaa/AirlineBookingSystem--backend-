const {StatusCodes} = require('http-status-codes');
const {AirportRepository} = require('../repositories');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try{
        const flight = await flightRepository.create(data);
        return flight;
    }
    catch(error){
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError('Cannot create a new Flight object', StatusCodes.BAD_REQUEST, explanation);
        }
        throw error;
    }
}

async function getFlights(){
    try{
        const flights = await flightRepository.getAll();
        return flights;
    }
    catch(error){
        throw new AppError('Cannot retrieve data for all Flight objects', StatusCodes.BAD_REQUEST, explanation);
    }
}

async function getFlight(id){
    try{
        const flight = await flightRepository.get(id);
        return flight;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The flight you requested is not available', StatusCodes.NOT_FOUND, ['The flight you requested is not available']);
        } 
        throw new AppError('Cannot retrieve data for Flight object', StatusCodes.BAD_REQUEST, explanation);
    }


} 


async function destroyFlight(id){
    try{
        const flight = await flightRepository.destroy(id);
        return flight;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The flight you requested is not available', StatusCodes.NOT_FOUND, ['The flight you requested is not available']);
        }
        throw new AppError('Cannot delete data for Flight object', StatusCodes.BAD_REQUEST, explanation);
    }

    async function getAllFlights(query){
        //trips=MUM-DEL
        const endingTripTime = "23:59:00";

        let customerFilter = {};
        let sortFilter = {};
        if(query.trips){
            [defaultDepartureAirportId, defaultArrivalAirportId] = query.trips.split('-');
            customerFilter.defaultDepartureAirportId = defaultDepartureAirportId;
            customerFilter.defaultArrivalAirportId = defaultArrivalAirportId;

        }

        if(query.price){
            [minPrice, maxPrice] = query.price.split('-');
            console.log(minPrice, maxPrice);
            customerFilter.price = {
                [Op.between]:[minPrice, (maxPrice) == undefined ? 20000:maxPrice]
            };

        }

        if(query.travellers){
            customerFilter.totalSeats = {
                [Op.gte]: query.travellers
            };
        }
        
        if(query.tripDate){
            customerFilter.departureTime = {
                [Op.between]: [query.tripDate, query.tripDate+ ` ${endingTripTime}`]
            };
        }

        if(query.sort  ){
            const params = query.sort.split(',');
            const sortFilters = params.map((param) => param.split(':'));
            sortFilter = sortFilters;


            
        }
        try{
            const flights = await flightRepository.getAllFlights(customerFilter, sortFilter);
            return flights;

        }catch(error){
            throw new AppError('Cannot retrieve data for all Flight objects', StatusCodes.BAD_REQUEST, explanation);
        }
    }

}
    
module.exports = {
    createFlight,
    getFlights,
    getFlight,
    destroyFlight
}
