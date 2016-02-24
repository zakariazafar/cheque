var controllers;

controllers = angular.module('controllers',[]);

controllers.controller("ChequeController", [
  '$scope','$routeParams','$location', function($scope,$routeParams,$location) {
    
		cheques =  [
  {
    id: 1,
    name: "Test Name1",
    date: "2016-02-10",
    value: 123456
  },
  {
    id: 2,
    name: "Test Name2",
    date: "2016-02-11",
    value: 560
  },
  {
    id: 3,
    name: "Test Name3",
    date: "2016-02-12",
    value: 1245
  },
  {
    id: 4,
    name: "Test Name4",
     date: "2016-02-13",
    value: 678
  },
  {
    id: 4,
    name: "Test Name2",
     date: "2016-02-15",
    value: 900
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