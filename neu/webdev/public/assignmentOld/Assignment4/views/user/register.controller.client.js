(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;

        function register(addUser,verifyPassword) {

            if(addUser.password === verifyPassword){
            var checkExistingUser = UserService.findUserByUsername(addUser.username);
            checkExistingUser
                .success(function (user) {
                    if(user === '0'){
                        console.log("User Not Found");
                        var promise = UserService.createUser(addUser.username, addUser.password);
                        promise
                            .success(function (newUser) {
                                $location.url("/user/" + newUser._id);
                            })
                            .error (function (err) {
                                vm.error = "Failed to create users"
                            })
                    }
                    else{
                        vm.error = "Username exists already";
                    }
                })
                .error(function (err) {
                    vm.error = err;
                })
        }
            else {
                vm.error = "Password's don't match";
            }
        }

    }
})();
