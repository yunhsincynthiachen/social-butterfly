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
	date: String,
	description: String,
	code: String,
	picture: String,
	//people: [{ type: Schema.ObjectId, ref: 'People' }]
	people: [String]
});

var PeopleSchema = new Schema({
    //username : { type: Schema.ObjectId, ref: 'Events' },
    name: String,
	description: String,
	tags: [String],
	picture : String
});


module.exports.events = mongoose.model("Events", EventsSchema);
module.exports.twote = mongoose.model("People", PeopleSchema);

 