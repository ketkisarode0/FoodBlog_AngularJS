
import angular from 'angular';
import template from './receipes.html';

const receipeModule = angular.module('receipe', []);

receipeModule.controller('receipeController', function($scope, $http){
    $scope.message = 'hello index';
    //  $http.get("http://localhost:3022/")
    $http.get("/api/receipe")
    .then(function(response){
     console.log(response.data.json);
    })
    })
    .component('receipe', {
        template
    })
    .name;

export default receipeModule;