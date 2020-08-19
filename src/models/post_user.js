'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  post_user.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post_user',
    underscored: true,
  });
  return post_user;
};