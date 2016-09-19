var VentaPasajesApp = angular.module("VentaPasajesApp");

VentaPasajesApp.controller("AddConductoresController", function($scope, ConductoresService, PersonasService) {
    $scope.newConductor = new ConductoresService();
    $scope.newConductor.estado_id = 1;
    $scope.dni = "";
    $scope.persona = new PersonasService();
    
    $scope.buscarPersona = function() {
        PersonasService.findByDni({dni: $scope.dni}, function(data) {
            $scope.persona = data.persona;
        });
    }
    
    $scope.addConductor = function() {
        $scope.newConductor.persona_id = $scope.persona.id;
        $("#btnRegistrar").addClass("disabled");
        $("#btnRegistrar").prop("disabled", true);
        ConductoresService.save($scope.newConductor, function(data) {
            $("#mdlConductores").modal('toggle');
            $scope.newConductor = new ConductoresService();
            $scope.$parent.actualizarMessage(data.message);
            $scope.$parent.list();
        });;
    }
});