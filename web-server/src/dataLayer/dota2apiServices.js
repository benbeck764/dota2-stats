var database = require('./databaseServices');
var config = require('../../config');

var matchHistoryModelName = 'match_histories';
var matchDetailsModelName = 'match_details';

//set up the model for the match_history & match_detail collection
database.createModel(matchHistoryModelName, config.matchHistorySchema);
database.createModel(matchDetailsModelName, config.matchDetailsSchema);

exports.addMatches = function(matches, callback){
	database.getModel(matchHistoryModelName, function(err, model) {
		var i = 0;
		for(i; i < matches.length; i++) {
			var id = matches[i].match_id;
			if(id) {
				model.update({match_id: matches[i].match_id}, matches[i], {upsert: true}, function(err){
					callback(err);
				});
			}
		}
	});
};

exports.getMatches = function(success, error) {
	database.getModel(matchHistoryModelName, function(err, model) {
		model.find({}).batchSize(100000000).lean().exec(function(err, matches) {
			if(err) {
				error(err);
			} else {
				success(matches);
			}
		});
	});
};
var x = 0;
exports.addMatchDetails = function(matchDetails, callback){
	database.getModel(matchDetailsModelName, function(err, model) {
		var id = matchDetails.match_id;
		if(id) {
			x++;
			console.log(x);
			model.update({match_id: matchDetails.match_id}, matchDetails, {upsert: true}, function(err){
				callback(err);
			});
		}
	});
};