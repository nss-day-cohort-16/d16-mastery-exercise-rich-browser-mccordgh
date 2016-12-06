"use strict";

// let Cards = require('./Cards');
let HandleBars = require('hbsfy/runtime'),
    cardTemplate = require('../templates/card.hbs'),
    modalTemplate = require('../templates/singleView.hbs'),
    addTemplate = require('../templates/addView.hbs'),
    navTemplate = require('../templates/navbar.hbs'),
    Events = require('./Events.js'),
    toyList = [];

let View = {
	setupViews(){
		$('<div />', {
			id: 'navDiv',
			html: navTemplate()
		}).appendTo($('#navDiv'));

		$('<div />', {
			id: 'mainView',
			class: 'row'
		}).appendTo($('#mainDiv'));

		$('<div />', {
			id: 'listAllView'
		}).appendTo($('#mainView'));
		
		$('<div />', {
			id: 'addView',
			class: 'addView hidden',
			html: addTemplate()
		}).appendTo($('#mainView'));
		
	},
		displayToys(toyArray){
		let toysHTML = cardTemplate({toys: toyArray});
		$('#listAllView').html(toysHTML);
	},
	setToyArray(toyArray){
		toyList = toyArray;
	},
	displaySingleToy(toyStr){
		let toysHTML = modalTemplate({toys: [toyStr]});
		$('#singleView').html(toysHTML);
		$('#modalView').css('display', 'block');
	}
};

module.exports = View;