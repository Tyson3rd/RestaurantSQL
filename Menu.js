const {sequelize, DataTypes, Model} = require('./db')

class Menu extends Model { //creating a table called "Menu"

}
Menu.init({

    breakfast : DataTypes.STRING,
    cost: DataTypes.NUMBER,
}, {
	sequelize, //sequelize is my database
	timestamps: false, //shows you the history of the items you put in your database
});


module.exports = { Menu }; // in order to use the table we have to export

