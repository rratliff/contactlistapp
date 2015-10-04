var myApp = angular.module('myApp', []);
angular.module('myApp').controller('AppCtrl', function($scope, $http) {
    $http.get('/contactlist').success(function(res) {
        $scope.contactlist = res;
    });
});
