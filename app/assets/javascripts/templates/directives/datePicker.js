var cheque;


cheque
  .directive('datePicker', function() {


function datePickerController($scope) {
   $scope.dateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

       $scope.popup = {
          opened: false
        };
        
        $scope.openCalendar = function() {        
          $scope.popup.opened = true;
        };      

         $scope.format = 'yyyy-MM-dd';
}
datePickerController.$inject = ['$scope'];



    
    return {
      replace: false,
      restrict: 'E',
      controller: datePickerController,
      scope: {        
        date: '=ngModel'
      },
      templateUrl: 'directives/date-picker.html'
    };
  });