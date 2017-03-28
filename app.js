var app = angular.module('MEANReddit', ['ui.router']);

//Creating config block and configure a home state. Use otherwise() to
//redirect to unspecified routes.
//Here we set up our home route. You'll notice that the state is given
// a name ('home'), URL ('/home'), and template URL ('/home.html').
//We've also told Angular that our new state should be controlled by
//MainCtrl. Finally, using the otherwise() method we've specified what
//should happen if the app receives a URL that is not defined. All
//that's left to do is define the home.html template. Instead of
//creating a new file, we are going to move most of our HTML into an inline template.

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('home');
}]);


//Creating a factory for posts:
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
'posts', //Inject posts service into the controller
function($scope, posts){ //Inject posts service into the controller
  // $scope.posts = [
  //   {title: 'post 1', upvotes: 5},
  //   {title: 'post 2', upvotes: 3},
  //   {title: 'post 3', upvotes: 22},
  //   {title: 'post 4', upvotes: 8},
  //   {title: 'post 5', upvotes: 12}
  // ];
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

  //experiment
  $scope.posts = posts.posts; //Binding $scope.posts variable in controller to posts array in our service
}]);
