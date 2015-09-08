multi.service('userData', function($location, $http) {

    this.list = function($scope) {
        $http.get('http://localhost:3000/getUserList').success(function(data) {
            $scope.users = data;
            $scope.userslength = $scope.users.length;
        });
    };

    this.deleteUser = function(id) {
        $http.delete('http://localhost:3000/deleteUser/' + id);
    };

    this.getUser = function($scope, id) {
        $http.get('http://localhost:3000/getUser/' + id).success(function(data) {
            $scope.newUser = data;
            $scope.initialValue = angular.copy($scope.newUser);
        });
    };

    this.saveUser = function($scope, id) {
        $http.post('http://localhost:3000/saveUser/' + id,
            {fName:$scope.newUser.fName, lName:$scope.newUser.lName, sex:$scope.newUser.sex, age:$scope.newUser.age})
    };

    this.createUser = function($scope) {
        $http.post('http://localhost:3000/createUser',
            {fName:$scope.newUser.fName, lName:$scope.newUser.lName, sex:$scope.newUser.sex, age:$scope.newUser.age})
    };

    this.go = function (path) {
        $location.path(path);
    };
});
