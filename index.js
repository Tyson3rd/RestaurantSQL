  
const {sequelize, DataTypes, Model} = require('./db');

const {Restaurant} = require('./restaurant');
const {Menu} = require('./menu');
const {menuItem} = require('./menuItem');


// module.exports = { Restaurant, Menu, menuItem };


//Create our Association!
menuItem.belongsTo(Restaurant) //adds a foreign key on the musician table, for the band they belong to
Menu.hasMany(menuItem) //gives us Sequelize magic methods

module.exports = { Restaurant, Menu, menuItem }; // make sure we export our models with the associations added!


// const {sequelize, DataTypes, Model} = require('./db');

// class Restaurant extends Model {
// 	//add custom methods for advanced querying
// }

// Restaurant.init({
// 	name: DataTypes.STRING,
// 	food: DataTypes.STRING,
// 	size: DataTypes.BOOLEAN,
	
// }, {
// 	sequelize,
// 	// timestamps: false,
// });


// module.exports = { Restaurant };