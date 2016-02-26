cheque
        .controller("MainController", MainController);

    MainController.$inject = ["$scope"];

    function MainController($scope) {
        $scope.message = "Hello, Michael";
    };