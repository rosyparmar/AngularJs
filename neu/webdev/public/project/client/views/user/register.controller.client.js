(function () {
    angular
        .module("Flix")
        .controller("RegisterController", RegisterController);

    function RegisterController($routeParams, FlixUserService, $location, $rootScope) {
        var vm = this;
        vm.createUser = createUser;

        function createUser(username, password, verifypassword) {
            if (username == null || username == "") {
            }
            else if (password == null || password == "") {
            }
            else if (verifypassword == null || verifypassword == "") {
            }
            if (password != verifypassword) {
                vm.error = "Passwords do not match";
            }
            else {
                var user = {
                    "username": username,
                    "password": password
                };
                console.log("register");
                FlixUserService
                    .register(user)
                    .then(
                        function (response) {
                            //var newUser = response.data;
                            $rootScope.currentUser = user;
                            $location.url("/user");
                        },
                        function (error) {
                            console.log("error while register ");
                                console.log(error);
                            vm.error = "Sorry! User could not be registered";
                        });
            }
        }
    }
})();