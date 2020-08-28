'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      sector: DataTypes.STRING,
    },
    {},
  );
  users.associate = function (models) {};
  users.hasMany(models.orders);
  return users;
};