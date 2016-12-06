"use strict";

let Events = {
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