var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "password",
	database: "burger_db"
});

connection.connect(function(error){
	"use strict";
	if (error){
		console.log("Error has occured.");
		console.log(error.stack);
		return false;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;