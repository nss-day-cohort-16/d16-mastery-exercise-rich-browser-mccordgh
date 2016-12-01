"use strict";

let db = require('./dbInteractions.js'),
		View = require('./View.js'),
		toys = [];

let Model = {
	initialize(){
		View.setupViews();
		this.getToys();
	},
	getToys(){
		db.getAllToys()
		.then((data) => {
			toys = data;
			View.displayToys(data);
			View.setEventListeners();
		}).catch((error) => {
			console.log("error", error);
		});
	}
};

module.exports = Model;