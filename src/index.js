// purpose fo this file : to boot up the server

const express = require("express");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require('./routes/index');
const CityRepository = require('./repository/city-repository');


const setupAndStartServer = async () => {
  //create the server
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  app.use('/api', ApiRoutes);


  app.listen(PORT, () => {
    console.log(`server started listening on port : ${PORT}`);
   

  });
};

setupAndStartServer();
