var orm = require("../config/orm.js");

var burger = {
	all: function (callback){
		"use strict";
		orm.all("burger", function(result){
			callback(result);
		});
	},
	create: function(columns, values, callback){
		"use strict";
		orm.create("burger", columns, values, function(result){
			callback(result);
		});
	},
	update: function(columnValues, conditional, callback){
		 "use strict";
		orm.update("burger", columnValues, conditional, function(result){
			callback(result);
		});
	},
	delete: function(conditional, callback){
	"use strict";	
		orm.delete("burger", conditional, function(result){
			callback(result);
		});
	}
};

module.exports = burger;