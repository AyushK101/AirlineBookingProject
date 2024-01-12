const { City } = require('../models/index');

//! responsible for communicating with any data source 
// like create , delete , update , i.e , crud etc...
// creating separately from controllers or services or models 

class CityRepository {
    
    async createCity({ name , last_name , age}) { // { name : "john", last_name: "doe", age:23}

        try {
            const city = await City.create({
                name,
                last_name,
                age
            })
            return city;
        } catch(error) {
            console.log(`something went wrong in the repository layer: `);
            throw {error};
        }


    }

    async deleteCity(cityId) {
       try {
        await City.destroy({
            where : {
                id : cityId
            }
        })
        return true;
       } catch(error) {
        console.log(`something went wrong in the repository layer: `);
        throw {error};
        }
    } 


    async updateCity(cityId , data) { // data is an object 
        try {
            const city = await City.update(data , {
                where : {
                    id : cityId
                }
            })
            return city;
        } catch (error) {
            console.log(`something went wrong in the repository layer: `);
            throw {error};
        }
    }

    async getCity(cityId) {
        const city = await City.findByPk(cityId); // find on the primary key
        return city;
    }
}

module.exports= CityRepository;

