movies.controller('actores', ['$scope', '$http', function ($scope, $http) {
  $scope.listado = [];
  $scope.listnac = [];
  $scope.accion = 'Agregar';
  $scope.icon = true;
  $scope.updateid;

  $scope.list = function () {
    $http.get('/api/actores').then(function successCallback(response) {
        $scope.listado = response.data;
        console.log(response.data);
    }, function errorCallback(response) {
    });
  }

  $scope.listnacionalidad = function () {
    $http.get('/api/nacionalidades').then(function successCallback(response) {
        $scope.listnac = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.create = function () {
    $http.post('/api/actores', '{ "nombre": "' + $scope.nombre + '", "nacionalidad": "' + $scope.nacionalidad + '" }').then(function successCallback(response) {
      $scope.nombre = '';
      $scope.nacionalidad = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.update = function (l) {
    $scope.nombre = l.nombre;
    $scope.nacionalidad = l.nacionalidad._id;
    $scope.updateid = l._id;
    $scope.icon = false;
    $scope.accion = 'Editar';
    up();
  }

  $scope.updatesend = function () {
    $http.put('/api/actores/' + $scope.updateid, '{ "nombre": "' + $scope.nombre + '", "nacionalidad": "' + $scope.nacionalidad + '" }').then(function successCallback(response) {
      $scope.updateid = '';
      $scope.accion = 'Agregar';
      $scope.icon = true;
      $scope.descripcion = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.delete = function (id) {
    $http.delete('/api/actores/' + id).then(function successCallback(response) {
      notify(response.data.mensaje);
      $scope.list();
      up();
    }, function errorCallback(response) {
      notify(response.data.mensaje);
    });;
  }

  $scope.list();
  $scope.listnacionalidad();
}]);