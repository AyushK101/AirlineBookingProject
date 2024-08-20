// purpose fo this file : to boot up the server

const express = require("express");
const  { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');



const {Airport, City} = require('./models/index');

const setupAndStartServer = async () => {
  //create the server
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use('/api', ApiRoutes);

  const airports = await Airport.findAll({
    include: {                                     // internally doing outer join
      model: City
    }
  });
  console.log(airports);

  // const result = await City.findAll({
  //   where: 
  // })

  const airports2 = await Airport.findAll({
    where: {
      cityId: 13
    }
  })
  console.log(airports2);
    

  app.listen(3000, () => {

    console.log(`server started listening on port : ${PORT}`);
  });
};

setupAndStartServer();
