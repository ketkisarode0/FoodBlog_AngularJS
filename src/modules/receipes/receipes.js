import angular from "angular";
import template from "./receipes.html";
import "./receipes.css";
const receipeModule = angular.module("receipe", []);

receipeModule
  .controller("receipeController", function($scope, $http) {
    $scope.message = "hello index";
  })
  .component("receipe", {
    template
  }).name;

export default receipeModule;
