import angular from 'angular';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Header from './header/header';
import rightcolumn from './rightcolumn/rightcolumn';

const commonModule = angular.module('app.common', [
  Navbar,
  Footer,
  Header,
  rightcolumn
])
  
.name;

export default commonModule;