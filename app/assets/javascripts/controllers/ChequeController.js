var controllers;

controllers = angular.module('controllers',[]);

controllers.controller("ChequesController", [
  '$scope','$routeParams','$location','$resource', function($scope,$routeParams,$location,$resource) {
    
		cheques =  [
  {
    id: 1,
    name: "Test Name1",
    date: "2016-02-10",
    amount: 123456
  },
  {
    id: 2,
    name: "Test Name2",
    date: "2016-02-11",
    amount: 560
  },
  {
    id: 3,
    name: "Test Name3",
    date: "2016-02-12",
    amount: 1245
  },
  {
    id: 4,
    name: "Test Name4",
     date: "2016-02-13",
    amount: 678
  },
  {
    id: 4,
    name: "Test Name2",
     date: "2016-02-15",
    amount: 900
  }
];

   $scope.cheques = cheques;

   $scope.search = function(keyword){
    if (keyword != 'all') {
    $scope.cheques = cheques.filter(function(cheque) {
          return cheque.name.toLowerCase() == keyword.toLowerCase();
       });
   }
   else
    $scope.cheques = cheques;
   
   }

   

  


  }
]);