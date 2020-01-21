<!-- Stages Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('stages_id', 'Stages Id:') !!}
    {!! Form::number('stages_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Shipment Types Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('shipment_types_id', 'Shipment Types Id:') !!}
    {!! Form::number('shipment_types_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('jobWorkflowProcesses.index') !!}" class="btn btn-default">Cancel</a>
</div>
