<!-- src/Template/Clientes/add.ctp -->
<div ng-controller="AddClientesController">
    <?= $this->Form->create($cliente, ["url" => false, "ng-submit" => "addCliente()"]); ?>
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Nuevo Cliente</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <?php
                            echo $this->Form->input('ruc', ['label' => 'RUC', "ng-model" => "newCliente.ruc"]);
                            echo $this->Form->input('razonsocial', ['label' => 'Razón Social', "ng-model" => "newCliente.razonsocial"]);
                            echo $this->Form->input('direccion', ['label' => 'Dirección', "ng-model" => "newCliente.direccion"]);
                            echo $this->Form->input('telefono', ['label' => 'Teléfono', "ng-model" => "newCliente.telefono"]);
                            echo $this->Form->input("estado_id", [
                                "label" => "Estado",
                                "empty" => "Selecciona uno",
                                "ng-model" => "newCliente.estado_id"
                            ]);
                        ?>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button id="btnRegistrar" type="submit" class="btn btn-primary">Registrar</button>
            </div>
        </div>
    <?= $this->Form->end() ?>
</div>