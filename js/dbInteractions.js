"use strict";

let firebase = require("./fb-config");

let db = {
	getAllToys() {
		return new Promise(function(resolve,reject) {
			$.ajax({
				url: `https://toy-consignment-shop-rbaquiz.firebaseio.com/toys.json`
				// url: `https://moviehistory-f323f.firebaseio.com/movies.json?orderBy="uid"&equalTo="${currentUser}"`
			}).done((firebaseMovies)=>{
				resolve(firebaseMovies);
			});
		});
	}

};

module.exports = db;