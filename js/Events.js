"use strict";
// let modalTemplate = require('../templates/card.hbs');

let Events = {
	btnClickHandler(event){

	},
	filterHandler(toys, toyFilter){
		let tmpArray = $.grep(toys, function(i) {
			return i.name.toLowerCase().indexOf(toyFilter.toLowerCase()) > -1;
		});
		return tmpArray;
	},
	listAllView(event){

	},
	addView(event){
		
	},
	// imageClick(event, toyArray, ID){
	// 	console.log("imgclick - ID", ID);
	// 	console.log("toyArray", toyArray);
	// 	return toyArray[ID]", toyArray[ID]);
 //  	// $('#singleView').html(modalTemplate({toys: toyArray[ID]}));
 //   // 	$('#singleView').css('display', 'block');
	// }
};

module.exports = Events;