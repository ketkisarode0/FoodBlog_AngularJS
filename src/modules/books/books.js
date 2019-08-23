import '../../factories/book/index'
import template from './books.html'
import angular from 'angular';
import routeProvider from 'angular-route';

const booksModule = angular.module('book', ['book.services'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Books', {
        templateUrl : 'src/modules/books/books.html',
        controller: 'tableCtrl'
    })                      
}])
// booksModule.service('bookService', function(){})

.controller('tableCtrl', ['$scope', '$http', 'bookService', function($scope, $http, bookService){
            

            bookService.validate().then(
                function success(response){
                    console.log(response.data.message)
                    $scope.Books = response.data.message
                }
            )
            $scope.hideField = true;
            $scope.newBook = {
                "name":"",
                "author": "" 
            }
           
            $scope.checkFieldVal = function(){
           
                if(!$scope.newBook.name || !$scope.newBook.author){
                    $scope.hideField = true;
                }else{
                    $scope.hideField = false;
                }
            }
            $scope.checkFieldVal();

                $scope.checkInputVal= function(){
                    $scope.checkFieldVal();
                }

            $scope.addBook = function()
            {
                console.log($scope.newBook);
                bookService.addBook($scope.newBook).then(
                function success(response){
                console.log(response.data.message);
                $scope.Books.unshift(response.data.book);
                console.log( $scope.Books)  
            });

                

            $scope.newBook.name="";
            $scope.newBook.author="";    
            $scope.checkFieldVal();
            


               
            $scope.addField = function(){
                $scope.hideField = false;
                $scope.newBook = {
                    "name":"",
                    "author": ""
                }
              }
            
            }
            
        
            $scope.deleteBook = function(id, index) { 
                    
                console.log(id);
                bookService.deleteBook(id).then(
                    function success(response){
                    })
                $scope.Books.splice(index, 1)
                console.log("Book Id", index);
                console.log(id)
                  
            };
    }])
    .component('book', {
        template
    })
export default booksModule;