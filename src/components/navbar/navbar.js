import angular from "angular";
// import routeProvider from 'angular-route';
import "./navbar.css";

import template from "./navbar.html";

const navbarModule = angular.module("navbar", []).component("navbar", {
  template
}).name;

export default navbarModule;
