var app = angular.module('MEANReddit', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 3},
    {title: 'post 3', upvotes: 32},
    {title: 'post 4', upvotes: 23},
    {title: 'post 5', upvotes: 12}
  ];
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === ''){
      return;
    };
    $scope.posts.push({title: $scope.title, upvotes: 1});
    $scope.title ='';
  };
  $scope.incrementUpvotes = function(post){
    post.upvotes +=1;
  };

}]);
