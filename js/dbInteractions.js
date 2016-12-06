"use strict";

let firebase = require("./fb-config");

let db = {
	getAllToys() {
		return new Promise(function(resolve,reject) {
			$.ajax({
				url: `https://toy-consignment-shop-rbaquiz.firebaseio.com/toys.json`
			}).done((toyData)=>{
				let keys = Object.keys(toyData);
				keys.forEach((item) => {
					toyData[item].id = item;
				});
				resolve(toyData);
			});
		});
	},
	addToyToFB(toyObj){
		return new Promise((resolve,reject) => {
			$.ajax({
				url: 'https://toy-consignment-shop-rbaquiz.firebaseio.com/toys.json',
				type: "POST",
				data: JSON.stringify(toyObj),
				dataType: 'json'
			});
		});
	},
	deleteToyFromFB(toyID){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: `https://toy-consignment-shop-rbaquiz.firebaseio.com/toys/${toyID}.json`,
				method: "DELETE"
			}).done(()=>{
				resolve();
			});
		});		
	}

};

module.exports = db;