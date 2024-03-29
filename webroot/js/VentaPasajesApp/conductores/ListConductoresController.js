var VentaPasajesApp = angular.module("VentaPasajesApp");

VentaPasajesApp.controller("ListConductoresController", function($scope, ConductoresService) {
    $scope.id = "";
    $scope.loading = true;
    $scope.reverse = false;
    $scope.predicate = "id";
    $scope.message = "";
    
    $scope.openModal = function() {
        $("#mdlConductores").modal("toggle");
    }
    
    $("#mdlConductores").on("hidden.bs.modal", function(e) {
        $scope.$apply(function() {
            $("#btnAddConductor").removeClass("disabled");
            $("#btnAddConductor").prop("disabled", false);
            $scope.modalUrl = "";
        });
    });
    
    $scope.list = function() {
        $scope.loading = true;
        ConductoresService.get(function(data) {
            $scope.conductores = data.conductores;
            $scope.loading = false;
        });
    };
    
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    
    $scope.addConductor = function() {
        $("#btnAddConductor").addClass("disabled");
        $("#btnAddConductor").prop("disabled", true);
        $scope.modalUrl = VentaPasajesApp.path_location + "conductores/add";
    };
    
    $scope.editConductor = function(id) {
        $scope.id = id;
        $scope.modalUrl = VentaPasajesApp.path_location + "conductores/edit/" + id;
    };
    
    $scope.viewConductor = function(id) {
        $scope.id = id;
        $scope.modalUrl = VentaPasajesApp.path_location + "conductores/view/" + id;
    };
    
    $scope.actualizarMessage = function(message) {
        $scope.message = message;
    } 
    
    $scope.removeConductor = function(id) {
        if(confirm("¿Está seguro de desactivar este Conductor?")) {
            var conductor = ConductoresService.get({id: id}, function() {
                conductor.$update({id: id}, function(data) {
                    
                });
            });
        }
    };
    
    $scope.buscarconductor = function() {
        $scope.loading = true;
        ConductoresService.findByDni({dni: $scope.dni}, function(data) {           
            $scope.conductores = data.conductor;
            $scope.loading = false;
        });
    }
    
    $scope.list();
});