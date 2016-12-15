(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService, $rootScope) {
        var vm = this;
        vm.register = register;

        function register(user) {

            if (user.password == user.verifypassword) {
                console.log(user.username);
                console.log("in register controller");
                var checkExistingUser = UserService.findUserByUsername(user.username);

                checkExistingUser
                    .success(function (newUser) {
                        console.log("in register controller:checkExistingUser username exists  ");
                        if (newUser != '0') {
                            vm.error = "Username exists already";
                        }
                        else {
                            debugger;
                            var promise = UserService.register(user);
                            console.log("in register controller:create user");
                            promise
                                .success(function (user) {
                                    debugger;
                                    console.log("in register controller: user is created: " + user);
                                    $rootScope.currentUser = user;
                                    $location.url("/user/" + user._id);
                                })
                                .error(function (err) {
                                    vm.error = "Failed to create users";
                                });
                        }
                    })
                    .error(function (err) {

                    });
            }
            else {
                vm.error = "Password's don't match";
            }
        }

    }
})();
