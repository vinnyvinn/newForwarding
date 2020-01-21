<div class="table-responsive">
    <table class="table" id="countries-table">
        <thead>
            <tr>
                <th>Name</th>
        <th>Full Name</th>
        <th>Iso3</th>
        <th>Number</th>
        <th>Continent Code</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
        @foreach($countries as $country)
            <tr>
                <td>{!! $country->name !!}</td>
            <td>{!! $country->full_name !!}</td>
            <td>{!! $country->iso3 !!}</td>
            <td>{!! $country->number !!}</td>
            <td>{!! $country->continent_code !!}</td>
                <td>
                    {!! Form::open(['route' => ['countries.destroy', $country->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{!! route('countries.show', [$country->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{!! route('countries.edit', [$country->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
