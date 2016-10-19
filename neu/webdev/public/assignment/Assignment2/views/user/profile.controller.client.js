/**
 * Created by rosyp on 10/19/2016.
 */
/**
 * Created by rosyp on 10/19/2016.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    // , UserService
    function ProfileController($routeParams) {
        var vm = this;
        var userId = parseInt($routeParams,uid);
        console.log(userId);
        var users =
            [
                {username: 'alice', password: 'ewq', _id: "123", first: 'Alice', last: 'Wonderland'},
                {username: 'bob', password: 'ewq', _id: "234", first: 'Bob', last: 'Dylan'},
                {username: 'charlie', password: 'ewq', _id: "345", first: 'Charlie', last: 'Brown'},
                {username: 'jannunzi', password: 'jannunzi', _id: "456", first: 'Jose', last: 'Annunzi'}
            ];

        for (var u in users) {
            user = users[u];
            if (user._id === userId) {
                console.log(["found the user", user])
            }

        }
    }
}) ();

