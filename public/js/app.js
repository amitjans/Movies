var movies = angular.module('movies', ['ngRoute']);
movies.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/inicio', {
            templateUrl: '/plantillas/inicio.html'
        }).
        when('/actores', {
            templateUrl: '/plantillas/actor/index.html'
        }).
        when('/actores/listado', {
            redirectTo: '/actores'
        }).
        when('/generos', {
            templateUrl: '/plantillas/genero/index.html',
            controller: 'generos'
        }).
        when('/paises', {
            templateUrl: '/plantillas/pais/index.html',
            controller: 'paises'
        }).
        when('/categorias', {
            templateUrl: '/plantillas/categoria/index.html',
            controller: 'categorias'
        }).
        when('/actores', {
            templateUrl: '/plantillas/actor/index.html',
            controller: 'actores'
        }).
        when('/nacionalidades', {
            templateUrl: '/plantillas/nacionalidad/index.html',
            controller: 'nacionalidades'
        }).
        when('/directores', {
            templateUrl: '/plantillas/director/index.html',
            controller: 'directores'
        }).
        otherwise('/inicio');
    }
]);