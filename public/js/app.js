var movies = angular.module('movies', ['ngRoute']);
movies.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/inicio', {
            templateUrl: '/plantillas/inicio.html'
        }).
        when('/generos', {
            templateUrl: '/plantillas/genero/index.html',
        }).
        when('/paises', {
            templateUrl: '/plantillas/pais/index.html',
        }).
        when('/categorias', {
            templateUrl: '/plantillas/categoria/index.html',
        }).
        when('/actores', {
            templateUrl: '/plantillas/actor/index.html',
        }).
        when('/nacionalidades', {
            templateUrl: '/plantillas/nacionalidad/index.html',
        }).
        when('/directores', {
            templateUrl: '/plantillas/director/index.html',
        }).
        when('/usuarios', {
            templateUrl: '/plantillas/usuario/login.html',
        }).
        when('/peliculas', {
            templateUrl: '/plantillas/pelicula/index.html'
        }).
        otherwise('/inicio');
    }
]);

$(function() {
    $(".profile-info").empty();
    $(".profile-info").append('Bienvenido ' + (!!localStorage.getItem('usuario') ? localStorage.getItem('usuario') : '') + '<i class="zmdi zmdi-arrow-drop-down"></i>');
});

function logoout() {
    localStorage.clear();
    $(".profile-info").empty();
    $(".profile-info").append('Buenos d&iacute;as<i class="zmdi zmdi-arrow-drop-down"></i>');
}