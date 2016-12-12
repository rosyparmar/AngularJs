module.exports = function () {
    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
            _user: {type: mongoose.Schema.ObjectId, ref: "UserModel"},
            name: {type: String, required: true},
            description: String,
            pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
            dateCreated: {type: Date, default: Date.now()}
        }, {collection: "website"});
    return WebsiteSchema;
};
