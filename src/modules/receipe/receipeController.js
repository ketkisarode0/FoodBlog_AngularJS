export default angular.module('receipe.controller', [])
    
angular.module('receipe.controller', [])
 .controller('indexController', 
                function($scope, $http){
                 $scope.message = 'hello index';

                //  $http.get("http://localhost:3022/")
                 $http.get("/api/receipe")
                 .then(function(response){
                     console.log(response.data.json);
                 });
                });