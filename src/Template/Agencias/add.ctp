<!-- src/Template/Buses/add.ctp -->
<div ng-controller="AddAgenciasController">
    <?= $this->Form->create($agencia, ["url" => false, "ng-submit" => "addAgencia()"]); ?>
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Nueva Agencia</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <?php
                            echo $this->Form->input('direccion', ["ng-model" => "newAgencia.direccion"]);
                            echo $this->Form->input('telefono', ["ng-model" => "newAgencia.telefono"]);
                            echo $this->Form->input('celular', ["ng-model" => "newAgencia.celular"]);
                            
                            echo $this->Form->input("ubigeo_id", [
                                "label" => "Ubigeo",
                                "empty" => "Selecciona uno",
                                "ng-model" => "newAgencia.ubigeo_id"
                            ]);
                            echo $this->Form->input("estado_id", [
                                "label" => "Estado",
                                "empty" => "Selecciona uno",
                                "ng-model" => "newAgencia.estado_id"
                            ]);

                        ?>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-primary">Registrar</button>
            </div>
        </div>
    <?= $this->Form->end() ?>
</div>