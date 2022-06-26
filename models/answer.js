'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answer.init({
    text: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    accepted: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    upvote: {
      type:DataTypes.INTEGER,
      defaultValue: 0,
    },
    downvote: {
      type:DataTypes.INTEGER,
      defaultValue: 0,
    },
    QuestionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Questions",
        key:"id"
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key:"id"
      },
    }
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};