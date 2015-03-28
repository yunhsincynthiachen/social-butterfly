/* 
	Allows user to add a new page to the wiki
*/

var mongoose = require('mongoose');
var models = require('../models/models');

var routes = {};

var Event = models.events;

/*form data comes in the req.body and this function 
saves the new wiki data to the database*/
routes.addEvent = function(req,res){

	var name = req.body.name;
	var dateAdded=req.body.date;
	var description = req.body.description;
	var code = req.body.code;
	var img = req.body.img;
	console.log(name);

	// Create new event based on the user's post request
	var newEvent = new Event({
		name: name,
		date: dateAdded,
		description: description,
		code: code,
		img: img,
		people: ["Person 1", "Person 2"]
	});

	// Save new event to database
	newEvent.save(function(err){
		if(err){
			console.error('Cant add topic');
			res.status(500).send("Couldn't add topic");
		}
		res.send(newEvent);
	});
}



module.exports = routes;