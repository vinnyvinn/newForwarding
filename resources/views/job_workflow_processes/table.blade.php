<div class="table-responsive">
    <table class="table" id="jobWorkflowProcesses-table">
        <thead>
            <tr>
                <th>Stages Id</th>
        <th>Shipment Types Id</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
        @foreach($jobWorkflowProcesses as $jobWorkflowProcess)
            <tr>
                <td>{!! $jobWorkflowProcess->stages_id !!}</td>
            <td>{!! $jobWorkflowProcess->shipment_types_id !!}</td>
                <td>
                    {!! Form::open(['route' => ['jobWorkflowProcesses.destroy', $jobWorkflowProcess->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{!! route('jobWorkflowProcesses.show', [$jobWorkflowProcess->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{!! route('jobWorkflowProcesses.edit', [$jobWorkflowProcess->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
