var controllers;

controllers = angular.module('controllers',[]);

controllers.controller("ChequeController", [
  '$scope','$routeParams','$location', function($scope,$routeParams,$location) {
    
		$scope.cheques =  [
  {
    id: 1,
    name: "Test Name 1",
    date: "2016-02-10",
    value: 123456
  },
  {
    id: 2,
    name: "Test Name 2",
    date: "2016-02-11",
    value: 560
  },
  {
    id: 3,
    name: "Test Name 3",
    date: "2016-02-12",
    value: 1245
  },
  {
    id: 4,
    name: "Test Name4",
     date: "2016-02-13",
    value: 678
  },
];;

  }
]);