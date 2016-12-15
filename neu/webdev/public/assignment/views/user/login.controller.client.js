(function() {
  angular
      .module("WebAppMaker")
      .controller("LoginController", LoginController);

  function LoginController($location, UserService, $rootScope) {
    var vm = this;
    vm.login = login;

    function login(username, password) {
      //var promise = UserService.findUserByCredentials(username, password);
        console.log("in login controller"+username+":::::"+password);
        var promise = UserService.login(username, password);
      promise
          .success(function(user){
              debugger;
              $rootScope.currentUser = user;
              $location.url("/user/"+user._id);
              //$location.url("/user");
          })
          .error(function (err) {
              debugger;
              vm.error = err;
          });
    }
  }
})();
