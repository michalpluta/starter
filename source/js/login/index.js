import angular from 'angular';
import uiRouter from 'angular-ui-router';


let loginModule = angular.module('app.login', ['ui.router']);

import LoginController from './login.controller';
loginModule.controller('LoginController', [LoginController]);

loginModule.config(['$stateProvider', '$locationProvider', ($stateProvider) => {
  "use strict";

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });

}]);

export default loginModule;
