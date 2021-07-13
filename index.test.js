const {sequelize, DataTypes, Model} = require('./db')

const {Restaurant, menuItem, Menu } = require("./index")

//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe('Restaurant Database', () => { // describe test with a string for the 1st perimeter &  for the 2nd 

	beforeAll(async () => { //allows the database to be clear (clean out) before we test
		await sequelize.sync({force: true}) //.sync methoh is applied. "{}" is an object
	})

	test('can create a restaurant', async() => {
		const testRestaurant = await Restaurant.create({name : 'Quiznos'})
		expect(testRestaurant.name).toBe('Quiznos')
	})

	test('can create a restaurant', async() => {
		const testRestaurant = await Restaurant.create({food : 'Subs'})
		expect(testRestaurant.food).toBe('Subs')
	})
	
	test('can take a large group', async() => {
		const testRestaurant = await Restaurant.create({size : true})
		expect(testRestaurant.size).toEqual(true)
	})
	
	test('can take a large group', async() => {
		const testRestaurant = await Restaurant.create({size : true})
		expect(testRestaurant.size).toEqual(true)
	})
	test('can order items', async() => {
		const testMenuItems = await menuItem.create({main : 'Chicken'})
		expect(testMenuItems.main).toBe('Chicken')
	})
	test('can order items', async() => {
		const testMenuItems = await menuItem.create({drinks : true})
		expect(testMenuItems.drinks).toEqual(true)
	})

	})

	test('can create a restaurant', async() => {
		const testRestaurant = await Restaurant.create({name : 'BurgerKing'})
		expect(testRestaurant.name).toBe('BurgerKing')
	})

	test('can order any food', async () => {
		const testRestaurant = await Restaurant.create({food : "Whooper"});
		expect(testRestaurant.food).toBe('Whooper')
	})

	test('can order pancakes', async () => {
		const testMenu = await Menu.create({breakfast : "pancakes"});
		expect(testMenu.breakfast).toBe('pancakes')
	})

	test('can I get the right price', async () => {
		const testMenu = await Menu.create({price : 9});
		expect(testMenu.price).toBe()
	})
