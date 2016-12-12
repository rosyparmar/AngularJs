(function()
{
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, $location, UserService)
    {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.update = update;
        vm.init = init;
        
        function init()
        {
            vm.user = UserService.findUserById(vm.userId);
            $location.url("/user/" + user._id);
        }

        init();

        function update()
        {
            vm.user = UserService.updateUser(vm.userId, vm.user);
            $location.url("/user/" + user._id);
        }
    }
}) ();



