/* 
	Allows user to add a new page to the wiki
*/

var mongoose = require('mongoose');
var models = require('../models/models');

var routes = {};

var Event = models.events;
var People = models.people;

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
		people: []
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

routes.addMe = function(req,res){
	var eventId = req.params.event;
	var name = req.body.name;
	var description = req.body.description;
	var tags = req.body.tags;
	var img = req.body.img;
	console.log(name);

	// Create new profile based on the user's post request
	var newPerson = new People({
		name: name,
		description: description,
		tags: tags,
		img: img,
	});

	Event.findOne({_id:eventId}).exec(function(err,event){
		if(err){
			console.error("Can't find this event");
			res.status(500).send("Couldn't find this event");
		}

		event.save(function(err){
			if(err){
				console.error("cant save");
			}
			console.log("savin the event")
			newPerson.save(function(err){
				if(err){
					console.error('Cant add person');
					res.status(500).send("Couldn't add person");
				}
				console.log("saving person to event");
				res.send(event);
			});
		});

		
		
	});


	// Save new profile to database
	
}



module.exports = routes;