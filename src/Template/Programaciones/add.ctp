<!-- src/Template/Programaciones/index.ctp -->
<?php
$this->extend('/Common/vista');
$this->assign("module-name", "Programación");
$this->assign("title", "Nueva Programación");
?>

<div class="row">
    <div class="col-sm-12">
        <div class="form-group">
            <label for="txtFechaHora">Fecha y Hora</label>
            <input id="txtFechaHora" type="datetime-local" ng-model="programacion.fechahora_prog" class="form-control"/>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm-4">
        <div class="form-group">
            <label for="sltBuses">Bus</label>
            <select id="sltBuses" class="form-control" ng-model="programacion.bus_id" 
                ng-options="bus.id as bus.placa for bus in buses" ng-change="onBusSelected()">
                <option value="">Selecciona un Bus</option>
            </select>
        </div>
        <div ng-show="programacion.bus_id != null">
            <dl class="dl-horizontal">
                <dt>Código</dt>
                <dd>{{busSelected.id}}</dd>

                <dt>Placa</dt>
                <dd>{{busSelected.placa}}</dd>

                <dt>Chasis</dt>
                <dd>{{busSelected.chasis}}</dd>

                <dt>Año</dt>
                <dd>{{busSelected.anio}}</dd>

                <dt>Pisos</dt>
                <dd>{{busSelected.nro_pisos}}</dd>

                <dt>Asientos</dt>
                <dd>{{busSelected.nro_asientos}}</dd>

                <dt>Estado</dt>
                <dd>{{busSelected.estado.descripcion}}</dd>
            </dl>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="form-group">
            <label for="sltRutas">Ruta</label>
            <select id="sltRutas" class="form-control" ng-model="programacion.ruta_id" 
                ng-options="ruta.id as ruta.descripcion for ruta in rutas" ng-change="onRutaSelected()">
                <option value="">Selecciona un Ruta</option>
            </select>
        </div>
        <div ng-show="programacion.ruta_id != null">
            <dl class="dl-horizontal">
                <dt>Código</dt>
                <dd>{{rutaSelected.id}}</dd>

                <dt>Descripción</dt>
                <dd>{{rutaSelected.descripcion}}</dd>

                <dt>Desplazamientos</dt>
                <dd>
                    <ul>
                        <li>des 1</li>
                        <li>des 2</li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="form-group">
            <label for="sltServicios">Servicio</label>
            <select id="sltServicios" class="form-control" ng-model="programacion.servicio_id" 
                ng-options="servicio.id as servicio.descripcion for servicio in servicios" ng-change="onServicioSelected()">
                <option value="">Selecciona un Servicio</option>
            </select>
        </div>
        <div ng-show="programacion.servicio_id != null">
            <dl class="dl-horizontal">
                <dt>Código</dt>
                <dd>{{servicioSelected.id}}</dd>

                <dt>Descripción</dt>
                <dd>{{servicioSelected.descripcion}}</dd>
            </dl>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm-12">
        <div class="form-group">
            <button class="btn btn-primary" ng-click="addConductor()">Nuevo Conductor</button>
        </div>
        <div ng-show="conductores.length != 0">
            Información de conductores
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="mdlProgramacionesAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document" ng-include="modalUrl" onload="openModal()">
        
    </div>
</div>