/* 
	Lists all current events 
*/

var mongoose = require('mongoose');
var models = require('../models/models');

var routes = {};

var Event = models.events;

routes.getEvents = function(req,res){
	Event.find({}, function (err, events){
		if(err){
			console.error("Couldn't find Events", err);
			res.status(500).send("Couldn't find the Events");
		}
		res.send(events);
	});
}

routes.dispEvent = function(req,res){
	var eventId = req.params.event;
	//find the event by id
	Event.findOne({_id:eventId}).exec(function(err,eventInfo){
		if(err){
			console.error("Can't find this event");
			res.status(500).send("Couldn't find this event");
		}
		//Send event info to be rendered
		res.send(eventInfo);
	});
}

module.exports = routes;