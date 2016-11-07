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
            unregisterUser: unregisterUser
        };
        return api;

        function unregisterUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);
        }

        function createUser(username, password) {
            var newId = (new Date().getTime()).toString();
            var user = {
                _id: newId,
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
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
            var userIndex = findUserIndexById(userId);
            if(-1 === userIndex) {
                return false;
            }
            else {
                users.splice(userIndex, 1);
                return true;
            }
        }

        function findUserIndexById(userId) {
            for(var i = 0; i < users.length; ++i) {
                if( users[i]._id === userId)
                    return i;
            }

            return -1;

        }

        function getRandomId(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

    }
})();