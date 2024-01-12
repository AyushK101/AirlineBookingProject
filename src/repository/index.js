// just a abstraction layer between repository and service to write only one import statement in service 
// to import multiple repositories. like `const { xRepository , yRepository ,... } = require('./index);`

module.exports = {
    cityRepository: require('./city-repository')
    // other repositories 
}


