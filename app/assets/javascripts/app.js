var controllers, cheque;

cheque = angular.module('cheque', ['templates', 'ngRoute', 'controllers','ngResource']);

cheque.config([
  '$routeProvider', function($routeProvider) {
  
    
    return $routeProvider.when('/', {
      templateUrl: "cheque/index.html",
      controller: 'ChequeController'
    });
  }
  
  
  
  
  
  
]);

