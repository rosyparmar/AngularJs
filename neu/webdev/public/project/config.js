(function() {
    angular
        .module("Flix")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when ("/", {
                redirectTo: "/home"
            })
            .when("/home",{
                templateUrl: "client/views/home/home.view.client.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "client/views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            
            .when("/register", {
                templateUrl: "client/views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user", {
                templateUrl: "client/views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: {
                    loggedIn: checkLoggedIn
                }
            })
            .when("/user/:uid", {
                templateUrl: "client/views/user/other-profile.view.client.html",
                controller: "OtherProfileController",
                controllerAs: "model"
                // resolve: {
                //     loggedIn: checkLoggedIn
                // }
            })
            .when("/search/:searchText", {
                    templateUrl: "client/views/movie/search-result.view.client.html",
                    controller: "SearchResultController",
                    controllerAs: "model"
            })
            .when("/movie/:movieId", {
                templateUrl: "client/views/movie/movie-details.view.client.html",
                controller: "MovieDetailsController",
                controllerAs: "model"
            })
            .when("/cast/:castId", {
                templateUrl: "client/views/movie/cast-profile.view.client.html",
                controller: "CastProfileController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/home"
            });

        function checkLoggedIn(FlixUserService, $location, $q, $rootScope) {
            var deferred = $q.defer();
            FlixUserService
                .loggedIn()
                .then(
                    function(response) {
                        var user = response.data;
                        if(user == '0') {
                            $rootScope.currentUser = null;
                            deferred.reject();
                            $location.url("/login");
                        }
                        else {
                            $rootScope.currentUser = user;
                            deferred.resolve();
                        }
                    },
                    function(error) {
                        $location.url("/login");
                    }
                );

            return deferred.promise;
        }


        function adminUser($location, $q, $rootScope){
            var deferred = $q.defer();
            if($rootScope.currentUser != null){
                if(!$rootScope.isAdmin){
                    deferred.reject();
                    $location.url("/user");
                }
                else{
                    deferred.resolve();
                }
            }

            return deferred.promise;
        }
    }
})();