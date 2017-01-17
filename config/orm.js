var connection = require ("../config/connection.js");

function printQuestionMarks(num){
	"use strict";
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push("?");
	}
	return arr.toString();
};

function objToSql(ob){
	"use strict";
	var arr = [];
	for (var key in ob){
		if (Object.hasOwnProperty.call(ob, key)){
			arr.push(key + "=" + ob[key]);
		}
	}
	return arr.toString();
}


var orm = {
	all: function (tableInput, callback){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(error, result){
			if (error){
				throw error;
			}
			callback(result);
		});
	},
	create: function (table, columns, values, callback){
		"use strict";
		var queryString = "INSERT INTO " + table;
		queryString += " (" + columns.toString() + ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(values.length);
		queryString += ") ";
		
		console.log(queryString);
		connection.query(queryString, values, function(error, result){
			if (error){
				throw error;
			}
			callback(result);
		});
	},
	update: function (table, columnValues, conditional, callback){
		"use strict";
	},
	delete: function (table, conditional, callback){
		"use strict";
	}
};


module.exports = orm;