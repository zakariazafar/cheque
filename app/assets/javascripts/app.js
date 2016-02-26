var controllers, cheque;

cheque = angular.module('cheque', ['templates', 'ngRoute','ngResource', 'angular-flash.service', 'angular-flash.flash-alert-directive','ngAnimate', 'ui.bootstrap', 'smart-table']);

cheque.config([
  '$routeProvider', 'flashProvider', function($routeProvider, flashProvider) {
    flashProvider.errorClassnames.push("alert-danger");
    flashProvider.warnClassnames.push("alert-warning");
    flashProvider.infoClassnames.push("alert-info");
    flashProvider.successClassnames.push("alert-success");
  
    
    return $routeProvider.when('/', {
      templateUrl: "cheque/index.html",
      controller: 'ListController'
    }).when('/cheques/new', {
      templateUrl: "cheque/new.html",
      controller: 'CreateController'
    }).when('/cheques/:chequeId', {
      templateUrl: "cheque/show.html",
      controller: 'PrintController'
    });
  }

]);




