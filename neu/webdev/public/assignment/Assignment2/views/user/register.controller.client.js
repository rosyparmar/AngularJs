/**
 * Created by rosyp on 10/19/2016.
 */
/**
 * Created by rosyp on 10/19/2016.
 */
(function()
{
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService)
    {
        var vm = this;
        vm.register = register;

        function register(addUser,verifyPassword)
        {
            if(addUser.password != verifyPassword)
            {
                vm.error = "Password's don't match";
            }

            else
            {
                var checkExistingUser = UserService.findUserByUsername(addUser.username);
                if (checkExistingUser != null)
                {
                    vm.error = "Username exists already";
                }
                else
                {
                    var createNewUser = UserService.createUser(addUser);
                    $location.url("/user/:" + createNewUser._id);
                }
            }
        }
    }
})();
