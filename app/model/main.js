var multi = angular.module('multiCtrl', ['ngRoute']);

multi.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/listUser', {
                    templateUrl: 'view/listUser.html',
                    controller: 'listCtrl'
                })
                .when('/editUser/:userId', {
                    templateUrl: 'view/editUser.html',
                    controller: 'editCtrl'
                })
                .when('/newUser', {
                    templateUrl: 'view/newUser.html',
                    controller: 'newCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
}]);
