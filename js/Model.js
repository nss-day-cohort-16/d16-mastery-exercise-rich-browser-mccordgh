"use strict";

let db = require('./dbInteractions.js'),
		View = require('./View.js'),
		toys = [];

let Model = {
	initialize(){
		View.setupViews();
		this.loadToys();
	},
	loadToys(){
		db.getAllToys()
		.then((data) => {
			toys = data;
			View.setToyArray(data);
			View.displayToys(data);
			View.setEventListeners();
		}).catch((error) => {
			console.log("error", error);
		});
	},
	getToys(){
		return toys;
	}
};

module.exports = Model;