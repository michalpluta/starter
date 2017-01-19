import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngStorage from 'ng-storage';
import ngResource from 'angular-resource';

import './login'
import './home'

const requires = [
  'ui.router',
  'ngStorage',
  'ngResource',
  'app.login',
  'app.home'
];

let mainModule =  angular.module('mainModule', requires);

mainModule.config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');

  //$locationProvider.html5Mode(true);

}]);
