var controllers, cheque;

cheque = angular.module('cheque', ['templates', 'ngRoute', 'controllers','ngResource', 'angular-flash.service', 'angular-flash.flash-alert-directive','ngAnimate']);

cheque.config([
  '$routeProvider', 'flashProvider', function($routeProvider, flashProvider) {
    flashProvider.errorClassnames.push("alert-danger");
    flashProvider.warnClassnames.push("alert-warning");
    flashProvider.infoClassnames.push("alert-info");
    flashProvider.successClassnames.push("alert-success");
  
    
    return $routeProvider.when('/', {
      templateUrl: "cheque/index.html",
      controller: 'ChequesController'
    }).when('/cheques/new', {
      templateUrl: "cheque/new.html",
      controller: 'ChequesController'
    }).when('/cheques/:chequeId', {
      templateUrl: "cheque/show.html",
      controller: 'ChequesController'
    });
  }

]);

cheque.factory('Cheque', ['$resource', function($resource) {
  return $resource('/cheques/:chequeId', 
  {
    chequeId: "@id",
    format: 'json'
  }
  , {
    'update': { method:'PUT' },
    'save': { method:'PUT' },
    'create': { method:'POST' },
    'show': { method:'GET' }
  });
}]);


