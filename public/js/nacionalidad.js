movies.controller('nacionalidades', ['$scope', '$http', function ($scope, $http) {
    $scope.listgeneros = [];
    $scope.accion = 'Agregar';
    $scope.icon = true;
    $scope.updateid;

    $scope.list = function () {
      $http.get('/api/nacionalidades').then(function successCallback(response) {
          $scope.listgeneros = response.data;
      }, function errorCallback(response) {
      });
    }

    $scope.create = function () {
      $http.post('/api/nacionalidades', '{ "descripcion": "' + $scope.descripcion + '" }').then(function successCallback(response) {
        $scope.descripcion = '';
        $scope.list();
      }, function errorCallback(response) {
      });
    }

    $scope.update = function (l) {
      $scope.descripcion = l.descripcion;
      $scope.updateid = l._id;
      $scope.icon = false;
      $scope.accion = 'Editar';
      up();
    }

    $scope.updatesend = function () {
      $http.put('/api/nacionalidades/' + $scope.updateid, '{ "descripcion": "' + $scope.descripcion + '" }').then(function successCallback(response) {
        $scope.updateid = '';
        $scope.accion = 'Agregar';
        $scope.icon = true;
        $scope.descripcion = '';
        $scope.list();
      }, function errorCallback(response) {
      });
    }

    $scope.delete = function (id) {
      $http.delete('/api/nacionalidades/' + id).then(function successCallback(response) {
        notify(response.data.mensaje);
        $scope.list();
        up();
      }, function errorCallback(response) {
        notify(response.data.mensaje);
      });;
    }

    $scope.list();
  }]);