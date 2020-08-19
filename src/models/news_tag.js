'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class news_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  news_tag.init({
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'news_tag',
    underscored: true,
  });
  return news_tag;
};