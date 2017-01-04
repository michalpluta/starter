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



import HomeController from './home.controller';
homeModule.controller('HomeController', HomeController);


export default homeModule;
