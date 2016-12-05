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
			class: 'hidden',
			html: addTemplate()
		}).appendTo($('#mainView'));
		
	},
	setEventListeners(){
		$('.delButton').click((event) => {
			console.log('toycard delete button clicked');
			Events.btnClickHandler(event);
		});

		$('#txtFilter').keyup(() =>{
				this.displayToys(Events.filterHandler(toyList, $('#txtFilter').val()));
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
			this.displaySingleToy(toyList[event.target.id]);
		});

		$('.modal').click((event) => {
			console.log("modal clicked");
			$('#modalView').css('display', 'none');
		});
	
	},
	displayToys(toyArray){
		console.log("toyArray", toyArray);
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