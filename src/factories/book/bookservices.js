export default angular.module('book.service', [])
angular.module('book.service',[])
.factory('bookService', [
  '$http',
    
       function($http) {

         var service = {};
        //  var urlBase = "http://localhost:3022/book";
        var urlBase = "/api/books";


       
         service.validate = Validate
         service.addBook = AddBook
         service.deleteBook = DeleteBook
         return service;    

        function Validate() {
            var url = $http.get(urlBase);
            return $http.get(urlBase);  
        }; 

        function AddBook(book){                                   
            var url = $http.post(urlBase, JSON.stringify(book))
            return url; 
        }; 
        
        function DeleteBook(id){
          var urlstr = urlBase+'/'+ id;
          var url = $http.delete(urlstr)
            return url;
        }
}]);    
