cheque.controller("ListController", [
  '$scope','$routeParams', '$location','$resource','Cheque','flash', function($scope,$routeParams, $location,$resource,Cheque,flash) {
    
    
    cheques = Cheque.query({
      keywords: 'all'
    },function(results){
      $scope.cheques = results;
      return results;
    });
    

   $scope.search = function(keyword){
    if (keyword != 'all') {
  
      $scope.cheques =  cheques.filter(function(cheque) {
          return cheque.name.toLowerCase() == keyword.toLowerCase();
         });

    }
    else
      $scope.cheques = cheques;
   
   }


   $scope.newCheque = function(){
    $location.path("/cheques/new");
   }

   
   $scope.printCheque = function(id){
    return $location.path("/cheques/"+id);
   }

  }
]);
