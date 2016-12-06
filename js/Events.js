"use strict";
// let modalTemplate = require('../templates/card.hbs');

let Events = {
	btnClickHandler(event){

	},
	listAllView(event){
		$('#listAllView').removeClass('hidden');
		$('#addView').addClass('hidden');
	},
	addView(event){
		$('#listAllView').addClass('hidden');
		$('#addView').removeClass('hidden');
	}
};

module.exports = Events;