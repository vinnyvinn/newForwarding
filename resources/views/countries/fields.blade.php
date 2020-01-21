<!-- Name Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name', 'Name:') !!}
    {!! Form::text('name', null, ['class' => 'form-control']) !!}
</div>

<!-- Full Name Field -->
<div class="form-group col-sm-6">
    {!! Form::label('full_name', 'Full Name:') !!}
    {!! Form::text('full_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Iso3 Field -->
<div class="form-group col-sm-6">
    {!! Form::label('iso3', 'Iso3:') !!}
    {!! Form::text('iso3', null, ['class' => 'form-control']) !!}
</div>

<!-- Number Field -->
<div class="form-group col-sm-6">
    {!! Form::label('number', 'Number:') !!}
    {!! Form::number('number', null, ['class' => 'form-control']) !!}
</div>

<!-- Continent Code Field -->
<div class="form-group col-sm-6">
    {!! Form::label('continent_code', 'Continent Code:') !!}
    {!! Form::text('continent_code', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('countries.index') !!}" class="btn btn-default">Cancel</a>
</div>
