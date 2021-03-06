'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Answer,{as:'answers'})
    }
  }
  Question.init({
    title: {
     type:DataTypes.STRING,
     allowNull: false,
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
     },
    tags: {
      type:DataTypes.ARRAY(DataTypes.STRING),
     },
     UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key:"id"
      },
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};