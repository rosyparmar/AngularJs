
module.exports = function() {
    var mongoose = require("mongoose");
    var connectionString = 'mongodb://rosy1:rosy@ds133398.mlab.com:33398/wamfall';

    mongoose.connect(connectionString);

    var models = {
        flixUserModel: require("./user/flixuser.model.server.js")(),
        flixMovieModel: require("./movie/flix.model.server.js")(),
        reviewModel: require("./review/review.model.server.js")()
    };

    return models;
};