/* 
	Lists all current people associated with an event 
*/

var mongoose = require('mongoose');
var models = require('../models/models');

var routes = {};

var Person = models.people;

routes.getPeople = function(req,res){
	Person.find({}, function (err, people){
		if(err){
			console.error("Couldn't find People", err);
			res.status(500).send("Couldn't find the People");
		}
		res.send(people);
	});
}

routes.dispEvent = function(req,res){
	var personId = req.params.event;
	//find the person by id
	Person.findOne({_id:personId}).exec(function(err,personInfo){
		if(err){
			console.error("Can't find this person");
			res.status(500).send("Couldn't find this person");
		}
		//Send event info to be rendered
		res.send(personInfo);
	});
}

module.exports = routes;