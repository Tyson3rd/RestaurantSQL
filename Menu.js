const {sequelize, DataTypes, Model} = require('./db')

class Menu extends Model {

}
Menu.init({

    breakfast : DataTypes.STRING,
    cost: DataTypes.NUMBER,
}, {
	sequelize,
	// timestamps: false,
});


module.exports = { Menu };






// const {sequelize, DataTypes, Model} = require('./db')

// class Menu extends Model {

// }

// Menu.init({
//     name: DataTypes.STRING
// }, {
// 	sequelize,
// 	// timestamps: false,
// });


// module.exports = { Menu };