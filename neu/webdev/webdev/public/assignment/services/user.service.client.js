(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials,
            findUserById:findUserById,
            findUserByUsername:findUserByUsername,
            updateUser:updateUser,
            deleteUser:deleteUser,
            unregisterUser: unregisterUser,
            findCurrentUser: findCurrentUser,
            login:login,
            checkLogin:checkLogin,
            logout:logout,
            register: register

        };
        return api;

        function unregisterUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);
        }

        function findCurrentUser(){
            var url = "/api/user/";
            return $http.get(url);
        }

        function logout(){
            return $http.post("/api/logout");
        }

        function checkLogin(){
            return $http.post("/api/checkLogin");
        }

        function login(username,password){
            var user = {
                username: username,
                password: password
            };

            return $http.post("/api/login", user);
        }

        function register(user){
            var newUser = {
                username: user.username,
                password: user.password,
                firstName: "",
                lastName: ""
            };
            return $http.post("/api/register", newUser);
        }
        
        function createUser(user) {
            var newUser = { 
                username: user.username,
                password: user.password,
                firstname: " ",
                lastname: " "
            };
            return $http.post("/api/user", newUser);
        }

        function findUserById(userId) {
            var url = '/api/user/' + userId;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username='+username + '&password=' + password;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            var url = '/api/user?username='+username;
            return $http.get(url);
        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }

    }
})();