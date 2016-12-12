(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, $location, UserService, $rootScope) {
        var vm = this;
        var userId = $routeParams["uid"];
        vm.update = update;
        vm.unregisterUser = unregisterUser;
        vm.init = init;
        vm.logout = logout;
        
        function init() {
            var promise = UserService.findCurrentUser();
            promise
                .success(function (user) {
                    if (user === '0') {
                        vm.error = "No such user";
                    }
                    else {
                        vm.user = user;
                        vm.userId = $routeParams.uid;
                    }
                })
                .error(function (err) {
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
                    $rootScope.currentUser = null;
                    vm.error = err;
                });
        }

        function logout(){
            UserService
                .logout()
                .success(function(){
                    $rootScope.currentUser = null;
                    $location.url("/login");
                })
        }
    }
}) ();



