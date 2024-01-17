'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'cityId',   // the foreign key is defined on both sides of the association to establish the relationship correctly. 
        onDelete: 'CASCADE'     // if delete the city form DB , then all the cities should also be deleted from that database.
      });
    }
  }
  Airport.init({
    name:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING,
    cityId:{                   //  never allow to create a city without cityId
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Airport', 
  });
  return Airport;
};
// this is from neovim , just checking 
