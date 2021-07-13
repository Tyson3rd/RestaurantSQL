const {sequelize, DataTypes, Model} = require('./db')

class menuItem extends Model {

}
menuItem.init({

    drinks : DataTypes.BOOLEAN,
    appetizers: DataTypes.STRING,
    main : DataTypes.STRING,
}, {
	sequelize,
	// timestamps: false,
});


module.exports = { menuItem };

