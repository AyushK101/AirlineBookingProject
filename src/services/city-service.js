const { cityRepository } = require('../repository/index'); 


class CityService {
    constructor() {
        this.cityRepository = new cityRepository(); // will create a property inside instance with value itself a instance of cityRepository 
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch(error) {
            console.log(`Something went wrong at service layer `);
            throw {error};
        }


    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch(error) {
            console.log(`something went wrong at service layer`);
            throw { error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.updateCity(cityId , data);
            return city;
        } catch(error) {
            console.log(`something went wrong at service layer`);   
            throw { error };
        }
    } 

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId)
            return city;
        } catch(error) {
            console.log(`something went wrong at service layer`);
            throw { error };
        }
    }

    
     


}



module.exports = CityService;
 