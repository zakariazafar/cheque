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
  };    






    return {
      replace: true,
      restrict: 'E',
      controller: controller,
      scope: {        
        date: '=ngModel'
      },
      templateUrl: 'directives/date-picker.html'
    };
  });