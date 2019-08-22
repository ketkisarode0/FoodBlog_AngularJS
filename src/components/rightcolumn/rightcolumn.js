import angular from 'angular';
import template from "./rightcolumn.html";


const rightcolumnModule = angular.module('rightcolumn', [])

.component('rightcolumn', {
    template
})
  
.name;

export default rightcolumnModule;