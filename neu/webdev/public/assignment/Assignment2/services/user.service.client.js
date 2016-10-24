(function()
{
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
            {username: 'rosy', password: 'rosy', _id: "456", first: 'Jose', last: 'Annunzi'}
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
            var newUserId = getRandomId(0, 10000).toString();

            if(!findUserById(newUserId))
            {
                user._id = newUserId;
                users.push(user);
                return user;
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
            for(var u in users)
            {
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

        function deleteUser(userId)
        {
            var userIndex = findUserIndexById(userId);
            if(-1 === userIndex)
            {
                return false;
            }
            else
            {
                users.splice(userIndex, 1);
                return true;
            }
        }

        function findUserIndexById(userId)
        {
            for(var i = 0; i < users.length; ++i)
            {
                if( users[i]._id === userId)
                    return i;
            }

            return -1;

        }

        function getRandomId(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

    }
})();