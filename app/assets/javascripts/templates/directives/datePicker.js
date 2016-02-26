var cheque;


cheque
  .directive('datePicker', function() {


    var controller = function ($scope) {
          
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
     };  
    return {
      replace: false,
      restrict: 'E',
      controller: controller,
      scope: {        
        date: '=ngModel'
      },
      templateUrl: 'directives/date-picker.html'
    };
  });