/**
 * Created by rosyp on 10/19/2016.
 */
(function()
{
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);
    // , UserService
    function LoginController($location)
    {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            var user = null;
            console.log([username, password]);
            var users =
                [
                    {username: 'alice', password: 'ewq', _id: "123", first: 'Alice', last: 'Wonderland'},
                    {username: 'bob', password: 'ewq', _id: "234", first: 'Bob', last: 'Dylan'},
                    {username: 'charlie', password: 'ewq', _id: "345", first: 'Charlie', last: 'Brown'},
                    {username: 'jannunzi', password: 'jannunzi', _id: "456", first: 'Jose', last: 'Annunzi'}
                ];
            var user = null;
            var flag = false;
            for(var u in users) {
                user = users[u];
                if (user.username === username
                    && user.password === password) {
                    $location.url("/user/123");
                    console.log(["found user"]);
                    flag = true;
                }

            }
            if(!flag)  {
                    vm.error = "No such user";
                }

            // UserService.findUserByCredentials(username, password);
            // if (user === null) {
            //     vm.error = "No such user";
            // } else {
            //     $location.url("/user/" + user._id);
            // }
            // UserService.findUserById(userId)
            // UserService.findUserByUsername(username)
            // UserService.createUser(user)
            // UserService.updateUser(userId, user)
            // UserService.deleteUser(userId)
        }
    }
})();
