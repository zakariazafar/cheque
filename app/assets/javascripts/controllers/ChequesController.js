var controllers;

controllers = angular.module('controllers',[]);

controllers.controller("ChequesController", [
  '$scope','$routeParams','$location','$resource','Cheque','flash', function($scope,$routeParams,$location,$resource,Cheque,flash) {
    

    if ($routeParams.chequeId) {
      
      Cheque.get({
       chequeId: $routeParams.chequeId
      }, (function(cheque) {
       
        return $scope.cheque = cheque;
      }), (function(httpResponse) {
        $scope.cheque = null;
        return flash.error = "There is no Cheque with ID " + $routeParams.chequeId;
      }));
    } else {
      $scope.cheque = {};
      cheques =  Cheque.query({
        keywords: 'all'
      },function(results){
       return results;
      });

    $scope.cheques = cheques;
    }


   $scope.search = function(keyword){
    if (keyword != 'all') {
    $scope.cheques = cheques.filter(function(cheque) {
          return cheque.name.toLowerCase() == keyword.toLowerCase();
       });
   }
   else
    $scope.cheques = cheques;
   
   }

   $scope.newCheque = function(){
    $location.path("/cheques/new");
   }

   $scope.cancel = function(){
   return $location.path("/");
   }

   $scope.printCheque = function(id){
    return $location.path("/cheques/"+id);
   }

   $scope.save = function() {
      var onError;
      onError = function(_httpResponse) {
        return flash.error = "Something went wrong";
      };
      
        return Cheque.create($scope.cheque, (function(newCheque) {
          return $location.path("/");
        }), onError);
      
    };
   

    $scope.back = function(){
     return $location.path("/");
     }



  }
]);