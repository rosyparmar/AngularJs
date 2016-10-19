/**
 * Created by rosyp on 10/18/2016.
 */
/**
 * Created by rosyp on 10/16/2016.
 */
(function() {
    angular
        .module("WebAppMaker")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/website", {
                templateUrl: "views/website/website-list.view.client.html"
            })
            .when("/page-list", {
                templateUrl: "views/page/page-list.view.client.html"
            })
            .when("/website-new", {
                templateUrl: "views/website/website-new.view.client.html"
            })
            .when("/website-edit", {
                templateUrl: "views/website/website-edit.view.client.html"
            })
            .otherwise ({
                redirectTo : "views/user/login.view.client.html"
            });
    }
})();
