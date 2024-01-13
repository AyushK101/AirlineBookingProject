//todo_ controller is the final function in express route handlers.


const city = require('../models/city');
const  { CityService } = require('../services/index'); 

const cityService = new CityService();

// POST 
// data => req.body
const create = async (req,res) =>{
    try {
        const city = await cityService.createCity(req.body); 
        return res.status(201).json({
            data: city,
            success: true,
            message: 'successfully created a city',
            err: {}
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create a city',
            err: error,

        })
    }
}

// DELETE : /city/:id
// data => req.params.id
const destroy = async (req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id); 
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully deleted a city',
            err: {}
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete the city',
            err: error,

        })
    }
}

// patch : /city/:id -> req.params.id

const update = async (req,res) =>{
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).send({
            data: response,
            success: true,
            message: 'successfully updated the city',
            err : {}
        })


    } catch(error) {
        console.log(error);
        return res.status(500).send({
            data: {},
            success: false,
            message: 'not able to update the city',
            err: error,

        })
    }
}

// GET  : /city/:id -> req.body { both data & id}

const get = async (req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id); 
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fetch the city',
            err: error,
        })
    }
}

const getAll = async (req, res) =>{
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({                               //?fetching in the form of an array.
            data: cities,
            success: true,
            message: 'successfully fetched the cities',
            error: {}
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fetch the cities',
            err: error
        })
    }
}  


// being consumed in routes
module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}

