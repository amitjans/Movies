movies.controller('paises', ['$scope', '$http', function ($scope, $http) {
    $scope.listado = [];
    $scope.accion = 'Agregar';
    $scope.icon = true;
    $scope.updateid;

    $scope.list = function () {
      $http.get('/api/paises').then(function successCallback(response) {
          $scope.listado = response.data;
      }, function errorCallback(response) {
      });
    }

    $scope.create = function () {
      $http.post('/api/paises', '{ "descripcion": "' + $scope.descripcion + '" }').then(function successCallback(response) {
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
      $http.put('/api/paises/' + $scope.updateid, '{ "descripcion": "' + $scope.descripcion + '" }').then(function successCallback(response) {
        $scope.updateid = '';
        $scope.accion = 'Agregar';
        $scope.icon = true;
        $scope.descripcion = '';
        $scope.list();
      }, function errorCallback(response) {
      });
    }

    $scope.delete = function (id) {
      $http.delete('/api/paises/' + id).then(function successCallback(response) {
        notify(response.data.mensaje);
        $scope.list();
        up();
      }, function errorCallback(response) {
        notify(response.data.mensaje);
      });;
    }

    $scope.list();
  }]);