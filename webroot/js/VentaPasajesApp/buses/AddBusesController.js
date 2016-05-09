var VentaPasajesApp = angular.module("VentaPasajesApp");

VentaPasajesApp.controller("AddBusesController", function($scope, BusesService) {
    $scope.newBus = new BusesService();
    
    $scope.addBus = function() {
        $("#btnRegistrar").addClass("disabled");
        BusesService.save($scope.newBus, function(data) {
            $("#mdlBuses").modal('toggle');
            $scope.newBus = new BusesService();
            $scope.$parent.actualizarMessage(data.message);
            $scope.$parent.list();
        });;
    }
});