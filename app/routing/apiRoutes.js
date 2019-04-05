var path = require('path');

var peopleData = require('../data/friends.js');

// route to people array
module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(peopleData);
	});
	// post route with the algorithim for matching friends
	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		console.log(userInput);

		var match = '';
		var totalDiff = 2000;
		// for loop/algorithim for matching
		for (i = 0; i < peopleData.length; i++) {
			var diff = 0;

			for (j = 0; j < peopleData[i].score.length; j++) {
				diff += Math.abs(parseInt(userInput.score[j]) - parseInt(peopleData[i].score[j]));
			}

			if (diff < totalDiff) {
				totalDiff = diff;
				match = peopleData[i];
			}
		}
		peopleData.push(userInput);
		res.json(match);
	});
};
