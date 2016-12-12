(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService,$rootScope) {
        var vm = this;
        vm.register = register;

        function register(user) {

            if (user.password == user.verifypassword) {
                var checkExistingUser = UserService.findUserByUsername(user.username);

                checkExistingUser
                    .success(function (user) {
                        vm.error = "Username exists already";
                    })
                    .error(function (err) {
                        var promise = UserService.createUser(user);
                        promise
                            .success(function (user) {
                                $rootScope.currentUser = user;
                                $location.url("/user/" + user._id);
                            })
                            .error(function (err) {
                                vm.error = "Failed to create users";
                            });
                    });
            }
            else {
                vm.error = "Password's don't match";
            }
        }

    }
})();
