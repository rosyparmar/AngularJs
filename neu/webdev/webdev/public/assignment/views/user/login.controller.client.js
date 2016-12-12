(function() {
  angular
      .module("WebAppMaker")
      .controller("LoginController", LoginController);

  function LoginController($location, $rootScope, UserService) {
      var vm = this;
      vm.error = null;
      vm.login = login;

    function login(username, password) {
      //var promise = UserService.findUserByCredentials(username, password);
        var promise = UserService.login(username,password);
      promise
          .success(function (user) {
              $rootScope.currentUser = user;
              $location.url("/user/"+user._id);
              //$location.url("/user");
          })
          .error(function (err) {
              vm.error = err;
          });
    }
  }
})();
