import angular from "angular";
import "angular-route";
import "./footer.css";
import template from "./footer.html";

const footerModule = angular.module("footer", [])
    .component("footer", {
        template
        }).name;

export default footerModule;
