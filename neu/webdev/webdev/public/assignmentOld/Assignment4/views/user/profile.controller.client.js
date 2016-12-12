(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, $location, UserService) {
        var vm = this;
        var userId = $routeParams["uid"];
        vm.update = update;
        vm.unregisterUser = unregisterUser;
        vm.init = init;
        
        function init() {
            UserService
               .findUserById(userId)
               .success(function (user) {
                    if (user != '0'){
                        vm.user = user;
                    }
                })
                .error(function (err){
                    vm.error = err;
                });
        }

        init();

        function update(id) {
            UserService.updateUser(userId, vm.user)
                .success(function (response) {
                    vm.success = "Successfully updated user";
                })
                    .error(function (error) {
                    vm.error = "Failed to update user";
                });
        }

        function unregisterUser() {
            UserService
                .unregisterUser(vm.user._id)
                .success(function(){
                    $location.url("/login");
                })
                .error(function(){

                });
        }
    }
}) ();



