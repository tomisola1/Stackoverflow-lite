'use strict';
module.exports= (sequelize, DataTypes) => {
  const User = sequelize.define("User",{
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6,
      },
    },
  })
  User.associate = function(models) {
    User.hasMany(models.Question, {as: 'questions'})
  };
  return User
};