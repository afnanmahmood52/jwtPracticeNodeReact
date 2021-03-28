const { DataTypes } = require('sequelize');
const db = require('../db/db.config')

const UserRoles = db.define('UserRoles', {
    // Model attributes are defined here
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
		role_name: {
    	type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, {
		timestamps: false,
    tableName: 'user_roles'
  },
	);

module.exports = UserRoles