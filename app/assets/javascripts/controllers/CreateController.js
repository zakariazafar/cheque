cheque.controller("CreateController", [
  '$scope','$routeParams', '$location','$resource','Cheque','flash', function($scope,$routeParams, $location,$resource,Cheque,flash) {
  
   $scope.cancel = function(){
   return $location.path("/");
   }

  

   $scope.save = function() {
      var onError;      

      onError = function(_httpResponse) {
        return flash.error = "Something went wrong";
      };
      
        Cheque.create($scope.cheque, (function(newCheque) {
          return $location.path("/cheques/"+newCheque.id);
        }), onError);
      
    };
   

   
  }
]);
