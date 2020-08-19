'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      news.belongsTo(models.category);
    }
  };
  news.init({
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    tag_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'news',
    underscored: true,
  });
  return news;
};
