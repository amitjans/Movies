movies.controller('generos', ['$scope', '$http', function ($scope, $http) {
    $scope.listgeneros = [];

    $scope.listgenero = function () {
      $http.get('/api/generos').then(function successCallback(response) {
        $scope.listgeneros = response.data;
      }, function errorCallback(response) {
      });
    }

    $scope.addgenero = function () {
      console.log("click");
      $http.post('/api/generos', '{ descripcion: ' + $scope.genero + ' }'
      ).then(function successCallback(response) {
          console.log(response.data);
      }, function errorCallback(response) {
      });
    }
    
    $scope.listgenero();
  }]);