var newsFeed = angular.module('newsFeed', ['ngRoute', 'ui.bootstrap']);

newsFeed.component('feedComponent',   {
  controller: 'feedController',
  templateUrl: 'newsFeed.html',
  bindings:  {
    article: '<'
  }
});

newsFeed.component('kpFeed',   {
  controller: 'kyivPostControl',
  templateUrl: 'kyivPost.html',
  bindings:  {
    kArticle: '<'
  }
});

newsFeed.controller('feedController', ['$scope', '$http', function($scope, $http) {

  $http.get("https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/topstories/v2/home.json?api-key=bd184f9234d54f2da697e6741d32a4fd")
  .then(success, error);

  function success(response) {
    $scope.newsArticles = response.data.results;
  };

  function error(error) {
    console.log(data);
  };

  // this.$onInit = function $onInit() {
  //   console.log("Initialized");
  // };

$scope.pagination = {
  currentPage: 1,
  itemsPerPage: 5,
  maxSize: 5
};

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.pagination.currentPage);
  };

}]);

newsFeed.controller('kyivPostControl', ['$scope', '$http', function($scope, $http) {

  $http.get("http://localhost:3000/")
  .then(success, error);

  function success(kResponse) {
    $scope.kyivPostArticles = kResponse.data;
  };

  function error(error) {
    console.log(data);
  };

  // this.$onInit = function $onInit() {
  //   console.log("Initialized KP");
  // };

$scope.kPagination = {
  kcurrentPage: 1,
  itemsPerPage: 5,
  maxSize: 5
};

  $scope.kPageChanged = function() {
    console.log('Page changed to: ' + $scope.kPagination.kCurrentPage);
  };

}]);

newsFeed.controller('feedToggle', ['$scope', function($scope) {

this.$onInit = function $onInit() {
  $scope.toggleSwitch = "kyivPostToggle";
};

$scope.newsToggle = function(page) {
  $scope.toggleSwitch = page;
};

}]);
