/**
 * Created by kaufi on 07.02.2016.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://root:dt_root1@ds055895.mongolab.com:55895/darts-training');

var User = mongoose.model('User', {username: String, password: String});
var Gametype = mongoose.model('GameType', {type: String, values: Array, name: String});

//init
/*var user = new User({
    username: 'test',

    password: 'test'
});

user.save(function(err) {});

var gametype = new Gametype({
    name: 'around the board',
    type: 'board',
    values: ['20', '19', '18']
});
gametype.save();*/


var dbService = {};

dbService.getGameTypes = function(callback) {
    Gametype.find({}, function(err, gametypes) {
        console.log(gametypes);
        callback(gametypes);
    });
};

dbService.findUser = function(username, callback) {
    User.findOne({username: username}, function(err, user) {
        callback(user);
    });
};


module.exports = dbService;