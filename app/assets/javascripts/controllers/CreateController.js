cheque.controller("CreateController", [
  '$scope','$routeParams', '$location','$resource','ChequeService','flash', function($scope,$routeParams, $location,$resource,ChequeService,flash) {
  
   $scope.cancel = function(){
   return $location.path("/");
   }

   $scope.cheque = {};
  
   $scope.save = function() {
      var onError;      

      onError = function(_httpResponse) {
        return flash.error = "Something went wrong";
      };
      
      ChequeService.create($scope.cheque, (function(newCheque) {
        return $location.path("/cheques/"+newCheque.id);
      }), onError);
      
    };
  
  }
]);
