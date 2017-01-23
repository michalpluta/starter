import angular from 'angular';

let homeModule = angular.module('app.home', []);
homeModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider) => {
  "use strict";

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });

}]);

import HomeService from '../services/home.service'
homeModule.service('HomeService',  ['$http', HomeService]);

import HomeController from './home.controller';
homeModule.controller('HomeController', ['$scope', 'HomeService', HomeController]);


export default homeModule;
