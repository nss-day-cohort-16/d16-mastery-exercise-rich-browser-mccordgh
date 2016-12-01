"use strict";

// let Cards = require('./Cards');
let HandleBars = require('hbsfy/runtime'),
    cardTemplate = require('../templates/card.hbs'),
    modalTemplate = require('../templates/singleView.hbs'),
    addTemplate = require('../templates/addView.hbs'),
    navTemplate = require('../templates/navbar.hbs'),
    Events = require('./Events.js');

let View = {
	setupViews(){
		$('<div />', {
			id: 'navDiv',
			html: navTemplate()
		}).appendTo($('#mainDiv'));

		$('<div />', {
			id: 'mainView',
			class: 'row'
		}).appendTo($('#mainDiv'));

		$('<div />', {
			id: 'listAllView'
		}).appendTo($('#mainView'));
		
		$('<div />', {
			id: 'myModal',
			class: 'modal hidden',
			html: modalTemplate()
		}).appendTo($('#mainView'));

		$('<div />', {
			id: 'addView',
			class: 'hidden',
			html: addTemplate()
		}).appendTo($('#mainView'));
		
	},
	setEventListeners(){
		$('.delButton').click((event) => {
			console.log('toycard delete button clicked');
			Events.btnClickHandler(event);
		});

		$('#txtSearch').keyup((event) =>{
			if (event.keyCode === 13) {
				console.log("txtSearch enter key pressed");
				Events.searchHandler(event);
			}
		});

		$('#searchButton').click((event) => {
			console.log("search button clicked");
			Events.searchHandler(event);
		});

		$('#listAllButton').click((event) => {
			console.log("list all button clicked");
			Events.listAllView(event);
		});

		$('#addButton').click((event) => {
			console.log("add button clicked");
			Events.addView(event);
		});

		$('.cardImage').click((event) => {
			console.log('toycard image clicked');
			Events.singleView(event);
		});

	},
	displayToys(toyArray){
		let toysHTML = cardTemplate({toys: toyArray});
		$('#listAllView').html(toysHTML);
	}
};

module.exports = View;