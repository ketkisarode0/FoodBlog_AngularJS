import './bookController'
export default angular.module('book', ['book.controller'])
angular.module('book', ['book.controller'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Book', {
        templateUrl : 'src/modules/book/views/book.html',
        controller: 'tableCtrl'
    })
}]);