var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function (request, result) {
	"use strict";
	burger.all(function (data) {
		var hbsObj = {
			burgers: data
		};
		result.render("index", hbsObj);
	});
});

router.post("/", function (request, result) {
	"use strict";
	burger.create([
			"burger_name", "devoured"
		], [request.body.burger_name, request.body.devoured],
		function () {
			result.redirect("/");
		}
	);
});

router.put("/:id", function (request, result) {
	"use strict";
	var conditional = "id" + request.params.id;
	burger.update({
			devoured: request.body.devoured
		},
		conditional,
		function () {
			result.redirect("/");
		}
	);
});

router.delete("/:id", function(request, result){
	"use strict";
	var conditional = "id " + request.params.id;
	burger.delete(conditional, function(){
		result.redirect("/");
	});
});

module.exports = router;