var app = angular.module('MEANReddit', []);

//creating a factory for posts

// Creating a new object that has an array property called "posts"
//We then return "o" so that object becomes exposed to any other
//Angular module that cares to inject it. We could've exported array
//directly but by exporting an object containing the posts array
//we can add new objects and methbods to our services in the future.
app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 3},
    {title: 'post 3', upvotes: 22},
    {title: 'post 4', upvotes: 8},
    {title: 'post 5', upvotes: 12}
  ];
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === ''){
      return;
    };
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 1
    });
    $scope.title = '';
    $scope.link = '';
  };
  $scope.incrementUpvotes = function(post){
    post.upvotes +=1;
  };

}]);
