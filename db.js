var mongoose	= require("mongoose");

module.exports.connect = function(){
	mongoose.connect("mongodb://localhost:27017/population");
	var db = mongoose.connection;
	db.once('open', function() {
		console.log("Connection to DB is done. ");
	});
};