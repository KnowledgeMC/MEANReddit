var app = angular.module('MEANReddit', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello World!';
}]);
