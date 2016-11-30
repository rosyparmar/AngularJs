module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser : createUser,
        updateUser : updateUser,
        deleteUser : deleteUser,
        findUserById : findUserById,
        findUserByUsername : findUserByUsername,
        findUserByCredentials : findUserByCredentials,
        setModel: setModel,
        findAllWebsitesForUser: findAllWebsitesForUser
    };
    return api;

    function setModel(_model){
        model = _model;
    }
    
    function createUser(user) {
        return UserModel.create(user);
    }

    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
    }

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function findUserByUsername(username) {
        return UserModel.find({
            username: username
        });
    }

    function findUserByCredentials(username, password) {
        return UserModel.find({
            username: username,
            password: password
        });
    }

    function updateUser(userId, user) {
        return UserModel
            .update(
                {
                    _id: userId
                },
                {
                    $set: user
                }
            );
    }

    function findAllWebsitesForUser(userId) {
        return UserModel
            .findById(userId)
            .populate("websites", "name")
            .exec();
    }
}