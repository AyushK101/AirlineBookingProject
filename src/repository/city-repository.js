const { City } = require('../models/index');

/ model is being consumed by repository layer /;
/ the repository functions are consumed in service layer /

//! responsible for communicating with any data source 
// like create , delete , update , i.e , crud etc...
// creating separately from controllers or services or models 

class CityRepository {

    async createCity({ name }) { // { name : "john", last_name: "doe", age:23}

        try {
            const city = await City.create({ name });
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
            //! below approach also works but will not return the updated object,
            //! if you are using pgsql then returning: true can be used 
            // const city = await City.update(data , {
            //     where: {
            //         id : cityId
            //     },
            //     returning: true
            //     plain: true
            // })
            // for getting the updated data we use the below approach 
            const city = await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log(`something went wrong in the repository layer: `);
            throw {error};
        }
    }

    async getCity(cityId) {
        try{
            const city = await City.findOne({
                where : {
                    id : cityId
                }
            }); // find on the primary key
            return city;
        } catch(error) {
            console.log(`something went wrong in the repository layer: `);
            throw { error};
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities; 
        } catch(error) {
            console.log(`something went wrong on the repository layer`);
            throw { error };
        } 

    }
}

module.exports= CityRepository;

