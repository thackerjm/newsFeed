var newsFeed = angular.module('newsFeed', ['ngResource', 'ui.bootstrap']);

newsFeed.controller('feedController', ['$scope', '$http', function($scope, $http) {

  $http.get("https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/topstories/v2/home.json?api-key=bd184f9234d54f2da697e6741d32a4fd")
  .success(function(response) {
    $scope.newsArticles = response.results;
  })
  .error(function(data) {

    console.log(data);
  });

$scope.pagination = {
  currentPage: 1,
  itemsPerPage: 5,
  maxSize: 6
};

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.pagination.currentPage);
  };

}]);

newsFeed.controller('kyivPostControl', ['$scope', '$http', function($scope, $http) {

  $http.get("http://localhost:3000/")
  .success(function(kResponse) {
    $scope.kyivPostArticles = kResponse;
  })
  .error(function(data) {

    console.log(data);
  });

$scope.kPagination = {
  currentPage: 1,
  itemsPerPage: 5,
  maxSize: 6
};

  $scope.kPageChanged = function() {
    console.log('Page changed to: ' + $scope.kPagination.kCurrentPage);
  };

}]);
