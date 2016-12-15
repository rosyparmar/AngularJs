
module.exports = function() {
    var mongoose = require("mongoose");
    var connectionString = 'mongodb://localhost/web-dev-fall-project-2016';

    mongoose.createConnection(connectionString);

    var models = {
        flixUserModel: require("./user/flixuser.model.server.js")(),
        flixMovieModel: require("./movie/flix.model.server.js")(),
        reviewModel: require("./review/review.model.server.js")()
    };

    return models;
};