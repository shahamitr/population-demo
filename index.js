var express = require('express');
var db 		= require('./db');
var schema 	= require('./schema');

var app = new express();

var port = process.env.port || 8080;

app.listen(port, function(){
	db.connect();
	console.log("Server started on port "+port);
});

app.get("/user",function(req, res){
	
	schema.user.find({},function(err, user){

		if(err) throw err;

		res.json(user);
	});
	
});

app.get("/designation",function(req, res){
	
	schema.designation.find({},function(err, designation){

		if(err) throw err;

		res.json(designation);
	});
	
});

app.get("/user/population",function(req, res){
	
	schema.user.find({}).populate("designation address detail familydetail").exec(function(err, user){

		if(err) throw err;

		res.json(user);
	});
	
});

app.get("/user/:username",function(req, res){
	
	var username = req.params.username;

	schema.user.find().populate('designation address detail familydetail').where({username:username}).exec(function(err, user){

		if(err) throw err;

		res.json(user);
	});
	
});