<li class="{{ Request::is('users*') ? 'active' : '' }}">
    <a href="{!! route('users.index') !!}"><i class="fa fa-edit"></i><span>Users</span></a>
</li>

<li class="{{ Request::is('companies*') ? 'active' : '' }}">
    <a href="{!! route('companies.index') !!}"><i class="fa fa-edit"></i><span>Companies</span></a>
</li>

<li class="{{ Request::is('countries*') ? 'active' : '' }}">
    <a href="{!! route('countries.index') !!}"><i class="fa fa-edit"></i><span>Countries</span></a>
</li>

<li class="{{ Request::is('shipments*') ? 'active' : '' }}">
    <a href="{!! route('shipments.index') !!}"><i class="fa fa-edit"></i><span>Shipments</span></a>
</li>

<li class="{{ Request::is('shipmentTypes*') ? 'active' : '' }}">
    <a href="{!! route('shipmentTypes.index') !!}"><i class="fa fa-edit"></i><span>Shipment Types</span></a>
</li>

<li class="{{ Request::is('shipmentSubTypes*') ? 'active' : '' }}">
    <a href="{!! route('shipmentSubTypes.index') !!}"><i class="fa fa-edit"></i><span>Shipment Sub Types</span></a>
</li>

<li class="{{ Request::is('jobStagesSkip=views,inde,edit,show,updates*') ? 'active' : '' }}">
    <a href="{!! route('jobStagesSkip=views,inde,edit,show,updates.index') !!}"><i class="fa fa-edit"></i><span>Job Stages--Skip=Views,Inde,Edit,Show,Updates</span></a>
</li>

<li class="{{ Request::is('jobStages*') ? 'active' : '' }}">
    <a href="{!! route('jobStages.index') !!}"><i class="fa fa-edit"></i><span>Job Stages</span></a>
</li>

<li class="{{ Request::is('requiredDocs*') ? 'active' : '' }}">
    <a href="{!! route('requiredDocs.index') !!}"><i class="fa fa-edit"></i><span>Required Docs</span></a>
</li>

<li class="{{ Request::is('posts*') ? 'active' : '' }}">
    <a href="{!! route('posts.index') !!}"><i class="fa fa-edit"></i><span>Posts</span></a>
</li>

<li class="{{ Request::is('jobWorkflowProcesses*') ? 'active' : '' }}">
    <a href="{!! route('jobWorkflowProcesses.index') !!}"><i class="fa fa-edit"></i><span>Job Workflow Processes</span></a>
</li>

<li class="{{ Request::is('posts*') ? 'active' : '' }}">
    <a href="{!! route('posts.index') !!}"><i class="fa fa-edit"></i><span>Posts</span></a>
</li>

<li class="{{ Request::is('billofLandingStages*') ? 'active' : '' }}">
    <a href="{!! route('billofLandingStages.index') !!}"><i class="fa fa-edit"></i><span>Billof Landing Stages</span></a>
</li>

<li class="{{ Request::is('billofLandingStageComponents*') ? 'active' : '' }}">
    <a href="{!! route('billofLandingStageComponents.index') !!}"><i class="fa fa-edit"></i><span>Billof Landing Stage Components</span></a>
</li>

<li class="{{ Request::is('bldmsComponents*') ? 'active' : '' }}">
    <a href="{!! route('bldmsComponents.index') !!}"><i class="fa fa-edit"></i><span>Bldms Components</span></a>
</li>

