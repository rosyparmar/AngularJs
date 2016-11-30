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
            if(vm.user.username != "") {
            UserService.updateUser(userId, vm.user)
                .then(function (response) {
                    vm.error = "";
                    vm.success = "Successfully updated user";
                }, function (error) {
                        vm.success = "";
                    vm.error = "Failed to update user";
                });
        }
            else {
                vm.error = "Username cannot be empty";
            }
        }   

        function unregisterUser() {
            UserService.deleteUser(vm.user._id)
                .success(function(){
                    $location.url("/login");
                })
                .error(function(){

                });
        }
    }
}) ();



