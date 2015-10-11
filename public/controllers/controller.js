var myApp = angular.module('myApp', []);
angular.module('myApp').controller('AppCtrl', function($scope, $http) {
    var refresh = function() {
        $http.get('/contactlist').success(function(res) {
            $scope.contactlist = res;
            $scope.contact = "";
        });
    }

    refresh();

    $scope.addContact = function() {
        $http.post('/contactlist', $scope.contact).success(function(response) {
            refresh();
        });
    };
});
