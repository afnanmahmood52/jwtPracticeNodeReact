const { DataTypes } = require('sequelize');
const db = require('../db/db.config')

const User = db.define('User', {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
		email: {
    	type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
    	type: DataTypes.STRING(70),
      allowNull: false,
    },
		role_id: {
    	type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
		timestamps: false,
    tableName: 'user'
  },
	);

module.exports = User