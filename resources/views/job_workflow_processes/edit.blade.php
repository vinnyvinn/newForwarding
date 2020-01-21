@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Job Workflow Process
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($jobWorkflowProcess, ['route' => ['jobWorkflowProcesses.update', $jobWorkflowProcess->id], 'method' => 'patch']) !!}

                        @include('job_workflow_processes.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection