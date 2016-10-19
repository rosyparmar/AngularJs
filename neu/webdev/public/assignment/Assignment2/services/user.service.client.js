(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService()
    {
        var users =
         [
            {username: 'alice', password: 'ewq', _id: "123", first: 'Alice', last: 'Wonderland'},
            {username: 'bob', password: 'ewq', _id: "234", first: 'Bob', last: 'Dylan'},
            {username: 'charlie', password: 'ewq', _id: "345", first: 'Charlie', last: 'Brown'},
            {username: 'jannunzi', password: 'jannunzi', _id: "456", first: 'Jose', last: 'Annunzi'}
         ];

        var api =
        {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials,
            findUserById:findUserById,
            findUserByUsername:findUserByUsername,
            updateUser:updateUser,
            deleteUser:deleteUser
        };
        return api;

        function createUser(user)
        {
            for(var u in users)
            {
                userIndex = users[u];
                if(user._id === userId)
                {
                    return user;
                }
                else
                {
                    users[userIndex] = user;
                    return user;
                }
            }
        }

        function findUserById(userId)
        {
            for(var u in users)
            {
                user = users[u];
                if(user._id === userId)
                {
                    return user;
                }
            }
            return null;
        }

        function findUserByCredentials(username, password)
        {
            for(var u in users)
            {
                user = users[u];
                if( user.username === username
                    && user.password === password)
                {
                    return user;
                }
            }
            return null;
        }

        function findUserByUsername(username)
        {
            for(var u in users)
            {
                user = users[u];
                if(user.username === username)
                {
                    return user;
                }
            }
            return null;
        }

        function updateUser(userId, user)
        {
            for(var u in users) {
                userIndex = users[u];
                if(user._id === userId)
                {
                    users[userIndex] = user;
                    return users[userIndex];
                }
                else
                {
                    return null;
                }
            }
        }

        function deleteUser(userId) {
            for(var u in users) {
                userIndex = users[u];
                if(user._id === userId)
                {
                    users.splice(userIndex,1);
                    return users[userIndex];
                }
            }
            return false;
        }

    }
})();