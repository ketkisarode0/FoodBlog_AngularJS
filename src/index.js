import receipe from './modules/receipe/index';
import book from './modules/book/index';
import './css/bookpage.css';
import './css/mainpage.css';
// export {book}
// export {receipe}
 angular.module('myApp', 
    [
        'ngRoute',
        'receipe',
        'book'
    ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl : '/src/modules/receipe/views/receipe.html',
        controller: 'indexController'
    })
    .otherwise({
         redirectTo: '/Home'
     });
     
   
}]) .component('app', {
    templateUrl: './src/components/Views/home.html'
});













