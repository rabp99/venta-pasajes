var VentaPasajesApp = angular.module("VentaPasajesApp");

VentaPasajesApp.controller("ListAgenciasController", function($rootScope, $scope, AgenciasService) {
    $scope.id = "";
    $scope.loading = true;
    $scope.reverse = false;
    $scope.predicate = "id";
    
    $rootScope.$on('$includeContentLoaded', function(event, url) {
        console.log("mostrando desde agencias");
        $("#mdlAgencias").modal("toggle");
    });
    
    $("#mdlAgencias").on("hidden.bs.modal", function(e) {
        $scope.$apply(function() {
            $scope.modalUrl = ""; 
            console.log("ocultando agencias");
        });
    });
    
    $scope.list = function() {
        $scope.loading = true;
        AgenciasService.get(function(data) {
            $scope.agencias = data.agencias;
            $scope.loading = false;
        });
    };
    
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    
    $scope.addAgencia = function() {
        $scope.modalUrl = VentaPasajesApp.path_location + "agencias/add";
    };
    
    $scope.editAgencia = function(id) {
        $scope.id = id;
        $scope.modalUrl = VentaPasajesApp.path_location + "agencias/edit/" + id;
    };
    
    $scope.viewAgencia = function(id) {
        $scope.id = id;
        $scope.modalUrl = VentaPasajesApp.path_location + "agencias/view/" + id;
    };
    
    $scope.removeAgencia = function(id) {
        if(confirm("¿Está seguro de desactivar esta Agencia?")) {
            var agencia = AgenciasService.get({id: id}, function() {
                agencia.estado_id = 2;
                delete agencia.estado; 
                agencia.$update({id: id}, function() {
                    $scope.list();
                });
            });
        }
    }
    
    $scope.list();
});