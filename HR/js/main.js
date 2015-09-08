var multi = angular.module('multiCtrl', ['ngRoute']);

multi.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/listUser', {
                    templateUrl: 'pages/listUser.html',
                    controller: 'listCtrl'
                })
                .when('/editUser/:userId', {
                    templateUrl: 'pages/editUser.html',
                    controller: 'editCtrl'
                })
                .when('/newUser', {
                    templateUrl: 'pages/newUser.html',
                    controller: 'newCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
}]);
