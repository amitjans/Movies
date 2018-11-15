movies.controller('actores', ['$scope', '$http', function ($scope, $http) {
    $scope.listactores = [];

    $scope.listactor = function () {
      $http.get('/api/actores').then(function successCallback(response) {
        $scope.listactores = response.data;
      }, function errorCallback(response) {
      });
    }
    $scope.listactor();
  }]);