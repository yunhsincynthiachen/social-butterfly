/* 
	The db schema for a topic in our wiki
	img is a string of a url so the picture
	is not a file upload because we don't want to store
	all that in our db
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
	name: String,
	date: Date,
	description: String,
	code: String,
	img: String,
	//people: [{ type: Schema.ObjectId, ref: 'People' }]
	people: [String]
});

var PeopleSchema = new Schema({
    //username : { type: Schema.ObjectId, ref: 'Events' },
    name: String,
	description: String,
	tags: [String],
	img : String
});


module.exports.events = mongoose.model("Events", EventsSchema);
module.exports.people = mongoose.model("People", PeopleSchema);

 