// because don't want to keep the controller with the controller 
const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/v1', v1ApiRoutes); // v1ApiRoutes is the router itself 


module.exports= router;
