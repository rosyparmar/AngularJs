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
            login:login,
            logout:logout,
            register: register,
            checkLogin:checkLogin
        };
        return api;

        function unregisterUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);
        }

        function login(user,password) {
            var nuser = {
                username: user,
                password: password
            };
            console.log(nuser);
            console.log("in user client service");
            return $http.post("/api/login", nuser);
        }

        function logout(){
            return $http.post("/api/logout");
        }

        function checkLogin(){
            return $http.post("/api/checkLogin");
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
            console.log(username);
            console.log("in service client");
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

        function register(user){
            var newUser = {
                username: user.username,
                password: user.password,
                first: "",
                last: ""
            };
            console.log("Register: "+newUser);
            return $http.post("/api/register", newUser);
        }

    }
})();