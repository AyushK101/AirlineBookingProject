// purpose fo this file : to boot up the server

const Express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  //create the server
  const app = Express();
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: true }));


  app.listen(PORT, () => {
    console.log(`server started listening on port : ${PORT}`);
  });
};

setupAndStartServer();
