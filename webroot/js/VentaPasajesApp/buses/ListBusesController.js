var VentaPasajesApp = angular.module("VentaPasajesApp");

VentaPasajesApp.controller("ListBusesController", function($scope, BusesService, $routeParams) {
    $scope.id = "";
    $scope.loading = true;
    $scope.reverse = false;
    $scope.predicate = "id";
    $scope.message = {};
    
    $scope.openModal = function() {
        $("#mdlBuses").modal("toggle");
    }
    
    $("#mdlBuses").on("hidden.bs.modal", function(e) {
        $scope.$apply(function() {
            $("#btnAddBus").removeClass("disabled");
            $("#btnAddBus").prop("disabled", false);
            $scope.modalUrl = "";
        });
    });
    
    $scope.list = function() {
        $scope.loading = true;
        BusesService.get(function(data) {
            $scope.buses = data.buses;
            $scope.loading = false;
        });
        
        if ($routeParams.type !== null) {
            $scope.message.type = $routeParams.type;
            $scope.message.text = $routeParams.text;
        }
    };
    
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    
    $scope.addBus = function() {
        $("#btnAddBus").addClass("disabled");
        $("#btnAddBus").prop("disabled", true);
        $scope.modalUrl = VentaPasajesApp.path_location + "buses/add";
    };
    
    $scope.editBus = function(id) {
        $scope.id = id;
        $scope.modalUrl = VentaPasajesApp.path_location + "buses/edit/" + id;
    };
    
    $scope.viewBus = function(id) {
        $scope.id = id;
        $scope.modalUrl = VentaPasajesApp.path_location + "buses/view/" + id;
    };
    
    $scope.actualizarMessage = function(message) {
        $scope.message = message;
    } 
    
    $scope.removeBus = function(id) {
        if(confirm("¿Está seguro de desactivar este bus?")) {
            var bus = BusesService.get({id: id}, function() {
                bus.estado_id = 2;
                delete bus.estado; 
                bus.$update({id: id}, function(data) {
                    $scope.actualizarMessage(data.message);
                    $scope.list();
                });
            });
        }
    }
    
    $scope.list();
});