multi.controller('listCtrl', function($scope, userData) {
    userData.list($scope);
    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.pageStart = 0;

    $scope.deleteUser = function(id) {
        userData.deleteUser(id);
        userData.list($scope);
    };

    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.changePageSize = function(size) {
        $scope.pageSize =  parseInt(size, 10);
        $scope.currentPage = 0;
        $scope.pageStart = 0;
    };

    $scope.numberOfPages = function(){
        return Math.ceil($scope.userslength/$scope.pageSize);
    };

    $scope.nextPage = function(){
        $scope.currentPage = $scope.currentPage + 1;
        $scope.pageStart = $scope.pageStart + $scope.pageSize;
    };
    $scope.previousPage = function(){
        $scope.currentPage = $scope.currentPage - 1;
        $scope.pageStart = $scope.pageStart - $scope.pageSize;
    };

    $scope.go = function (path) {
        userData.go(path);
    };
});


multi.controller('editCtrl', function($scope, $routeParams, userData) {
    $scope.incomplete = true;
    $scope.userId = $routeParams.userId;
    userData.getUser($scope, $scope.userId);

    $scope.$watch('newUser.fName', function() {$scope.test();});
    $scope.$watch('newUser.lName', function() {$scope.test();});
    $scope.$watch('newUser.age', function() {$scope.test();});
    $scope.$watch('newUser.sex', function() {$scope.test();});
    $scope.test = function() {
        if (!$scope.newUser.fName.length || !$scope.newUser.lName.length || !$scope.newUser.age.length || !$scope.newUser.sex.length) {
            $scope.incomplete = true;
        }
        else {
            $scope.incomplete = false;
        }
    };

    $scope.saveUser = function(path) {
        userData.saveUser($scope, $scope.userId);
        userData.go(path);
    };

    $scope.reset = function () {
        angular.copy($scope.initialValue, $scope.newUser);
    }
});


multi.controller('newCtrl', function($scope, userData) {
    $scope.incomplete = true;
    $scope.newUser = {};

    $scope.$watch('newUser.fName', function() {$scope.test();});
    $scope.$watch('newUser.lName', function() {$scope.test();});
    $scope.$watch('newUser.age', function() {$scope.test();});
    $scope.$watch('newUser.sex', function() {$scope.test();});
    $scope.test = function() {
        if (!$scope.newUser.fName.length || !$scope.newUser.lName.length || !$scope.newUser.age.length || !$scope.newUser.sex.length) {
            $scope.incomplete = true;
        }
        else {
            $scope.incomplete = false;
        }
    };

    $scope.createUser = function (path) {
        userData.createUser($scope);
        userData.go(path);
        $scope.newUser = {};
    };
});
