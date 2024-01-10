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
- `npx sequelize init`
- once you have added your db config as listed above , go to src folder from your terminal and execute `npx sequelize db:create` & then execute `npx sequelize db:migrate`
- 









---
 
# DB design
  - airplane table 
  - flight table
  - airport table
  - city table

  - a flight belongs to an airport but one airport can have multiple flights
  - a city has many airport but one airport belongs to one city only
  - one airports can have many flights , but a flight belongs to one airport
  


