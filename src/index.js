import receipe from './modules/receipes/receipes';
import book from './modules/books/books';
import './css/bookpage.css';
import './css/receipes.css';
import angular from 'angular';
import routeProvider from 'angular-route';
import Common from './components/app';
import template from './components/app.html';
 angular.module('myApp', 
    [
        'ngRoute',
        'app.common',
        'receipe',
        'book'
    ]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/Home', {
        templateUrl : '/src/modules/receipes/receipes.html',
        controller: 'receipeController'
    })
    .otherwise({
         redirectTo: '/Home'
     });
     $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]) .component('app', {
    template
});














