movies.controller('peliculas', ['$scope', '$http', function ($scope, $http) {
  $scope.listado = [];
  $scope.listnac = [];
  $scope.accion = 'Agregar';
  $scope.icon = true;
  $scope.updateid;
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

  $scope.list = function () {
    $http.get('/api/peliculas').then(function successCallback(response) {
        $scope.listado = response.data;
        console.log(response.data);
    }, function errorCallback(response) {
    });
  }

  $scope.listcategoria = function () {
    $http.get('/api/categorias').then(function successCallback(response) {
        $scope.listcat = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.listdirector = function () {
    $http.get('/api/directores').then(function successCallback(response) {
        $scope.listdir = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.listactores = function () {
    $http.get('/api/actores').then(function successCallback(response) {
        $scope.listact = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.listgeneros = function () {
    $http.get('/api/generos').then(function successCallback(response) {
        $scope.listgen = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.listpaises = function () {
    $http.get('/api/paises').then(function successCallback(response) {
        $scope.listpais = response.data;
    }, function errorCallback(response) {
    });
  }

  $scope.create = function () {
    var json = '{ "titulo": "' + $scope.titulo + '", "ano": ' + $scope.ano + ', "duracion": ' + $scope.duracion + ', "categoria": "' + $scope.categoria + '", "genero": [';
    $scope.genero.forEach(element => {
      json += '"'+ element +'",';
    });
    json = json.substr(0, json.length - 1) + '], "director": "' + $scope.director + '", "actor": [';
    $scope.actor.forEach(element => {
      json += '"'+ element +'",';
    });
    json = json.substr(0, json.length - 1)+ '], "pais": "' + $scope.pais + '" }';

    $http.post('/api/peliculas', json).then(function successCallback(response) {
      $scope.pais = '';
      $scope.genero = '';
      $scope.actor = '';
      $scope.director = '';
      $scope.titulo = '';
      $scope.ano = '';
      $scope.duracion = '';
      $scope.categoria = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.update = function (l) {
    $scope.updateid = l._id;
    $scope.titulo = l.titulo;
    $scope.ano = l.ano;
    $scope.duracion = l.duracion;
    $scope.categoria = l.categoria;
    $scope.pais = l.pais._id;
    $scope.director = l.director._id;
    $scope.actor = l.actor;
    $scope.genero = l.genero;
    $scope.accion = 'Editar';
    up();
  }

  $scope.updatesend = function () {
    var json = '{ "titulo": "' + $scope.titulo + '", "ano": ' + $scope.ano + ', "duracion": ' + $scope.duracion + ', "categoria": "' + $scope.categoria + '", "genero": [';
    $scope.genero.forEach(element => {
      json += '"'+ element +'",';
    });
    json = json.substr(0, json.length - 1) + '], "director": "' + $scope.director + '", "actor": [';
    $scope.actor.forEach(element => {
      json += '"'+ element +'",';
    });
    json = json.substr(0, json.length - 1)+ '], "pais": "' + $scope.pais + '" }';
    $http.put('/api/peliculas/' + $scope.updateid, json).then(function successCallback(response) {
      $scope.updateid = '';
      $scope.accion = 'Agregar';
      $scope.icon = true;
      $scope.descripcion = '';
      $scope.list();
    }, function errorCallback(response) {
    });
  }

  $scope.delete = function (id) {
    $http.delete('/api/peliculas/' + id).then(function successCallback(response) {
      notify(response.data.mensaje);
      $scope.list();
      up();
    }, function errorCallback(response) {
      notify(response.data.mensaje);
    });;
  }

  $scope.list();
  $scope.listcategoria();
  $scope.listdirector();
  $scope.listactores();
  $scope.listgeneros();
  $scope.listpaises();
}]);