var VentaPasajesApp = angular.module("VentaPasajesApp");

VentaPasajesApp.controller("AddProgramacionesController", function($scope, ProgramacionesService, BusesService, RutasService, ServiciosService, ConductoresService, EstadosService, $filter) {  
    $scope.step = 1;
  
    BusesService.get(function(data) {
        $scope.buses = data.buses;
    });
    
    RutasService.get(function(data) {
        $scope.rutas = data.rutas;
    });
        
    ConductoresService.get(function(data) {
        $scope.conductores = data.conductores;
    });
    
    EstadosService.get(function(data) {
        $scope.estados = data.estados;
    });
    
    $scope.onBusSelected = function() {
        BusesService.get({id: $scope.programacion.bus_id}, function(data) {
            $scope.busSelected = data.bus;
        })
    };
    
    $scope.onRutaSelected = function() {
        RutasService.get({id: $scope.programacion.ruta_id}, function(data) {
            $scope.rutaSelected = data.ruta;
            ServiciosService.findServiciosAvailablesByRuta({ruta_id: $scope.rutaSelected.id}, function(data) {
                $scope.servicios = data.servicios;
            });
        })
    };
    
    $scope.onServicioSelected = function() {
        ServiciosService.get({id: $scope.programacion.servicio_id}, function(data) {
            $scope.servicioSelected = data.servicio;
        })
    };
    
    $scope.onConductoresSelected = function() {
        if ($scope.conductores_ids.length) {
            ConductoresService.getMany($scope.conductores_ids, function(data) {
                $scope.conductoresSelected = data.conductores;
            });
        }
    };
    
    $scope.saveProgramacion = function() {
        $("#btnRegistrarProgramacion").addClass("disabled");
        $("#btnRegistrarProgramacion").attr("disabled", true);
        angular.forEach($scope.conductoresSelected, function(value, key) {
            var conductor = value;
            $scope.programacion.detalle_conductores[key].conductor_id = conductor.id;
        });
        $scope.programacion.fechahora_prog = $filter("date")($scope.prefechahora_prog, "yyyy-MM-dd HH:mm:ss");
        $scope.programacion.estado_id = 1;
        ProgramacionesService.save($scope.programacion, function(data) {
            $('#aProgramacionesAdd').removeClass('disabled');
            $('#aProgramacionesAdd').prop('disabled', false);
            
            $("#mdlProgramacionesAdd").modal('toggle');
            $scope.$parent.actualizarMessage(data.message);
            $("#btnRegistrarProgramacion").removeClass("disabled");
            $("#btnRegistrarProgramacion").attr("disabled", false);
            $scope.list();
        })
    };
    
    $scope.seleccionadoChofer = function(conductores) {
        var res = false;
        angular.forEach(conductores, function(value, key) {
            if (!res) {
                if (value.condicion == 'piloto') {
                    res = true;
                }
            }
        });
        return res;
    }
});