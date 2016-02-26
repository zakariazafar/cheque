cheque
.controller("PrintController", [
  '$scope','$routeParams', '$location','$resource','Cheque','flash', function($scope,$routeParams, $location,$resource,Cheque,flash) {
    
     
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
      
    }


    $scope.back = function(){
     return $location.path("/");
     }



  }
]);