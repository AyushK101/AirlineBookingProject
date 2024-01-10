/ doing role based : 
    - src
        index.js //server    
        models/  
        controllers/   
        middlewares/  
        services/  
        utils/  
        config/  
        repository/
    - tests/ [later]
    - static
    - temp

---
 
# welcome to Flight services

# project setup 
- clone project on local
- Execute `npm install` on same path on root directory
- create `.env` file in root & add following env. variables
    - PORT=3000
- inside src/config folder create a new file `config.json` and then add the following piece of json.
```json
{
  "development": {
    "username": "<YOUR_DB_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- once you have added your db config as listed above , go to src folder from your terminal and execute `npx sequelize db:create`
 



---

// mysql2 : for connecting sequlize ORM to mysql server.
// sequelize-cli 
// sequelize
// 

// npx sequelize init

// mysql command : sudo mysql -u root -p

// seeders : seed dummy data

// creating db through : npx sequelize db:create from config/config.json

---
 
# welcome to Flight services

# project setup 
- clone project on local
- Execute `npm install` on same path on root directory
- create `.env` file in root & add following env. variables
    - PORT=3000
- inside src/config folder create a new file `config.json` and then add the following piece of json.
```json
{
  "development": {
    "username": "<YOUR_DB_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```




---

// mysql2 : for connecting sequlize ORM to mysql server.
// sequelize-cli 
// sequelize
// 

// npx sequelize init

// mysql command : sudo mysql -u root -p

// seeders : seed dummy data

// creating db through : npx sequelize db:create from config/config.json

