@if(!\Illuminate\Support\Facades\Auth::guest())
    <aside class="left-sidebar">
        <div class="scroll-sidebar">
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li><a class="has-arrow waves-effect waves-dark {{ Request::is('/')? 'active' : '' }}" href="{{ url('/') }}" aria-expanded="false">
                            <i class="mdi mdi-gauge"></i><span class="hide-menu">Dashboard</span></a>
                    </li>
                    @can('manager')
                        <li><a class="has-arrow waves-effect waves-dark {{ Request::is('customers*')? 'active' : '' }} " href="{{ url('/customers')  }}"
                               aria-expanded="false">
                                <i class="mdi mdi-account-multiple"></i><span class="hide-menu">All Customers</span></a>
                        </li>
                    @endcan
                    @can('manage-jobs')
                        <li><a href="{{ url('/dsr') }}" class="{{ Request::is('dsr*')? 'active' : '' }} {{ Request::is('dms*')? 'active' : '' }} {{ Request::is('job*')? 'active' : '' }} has-arrow waves-effect waves-dark" aria-expanded="false">
                                <i class="ti-briefcase"></i><span class="hide-menu">Jobs</span></a>
                            <ul>
                                <li>
                                    <a  href="{{ url('dsr#/jobs/active') }}">All Jobs</a>
                                </li>
                                @can('add-stages')
                                    <li>
                                        <a href="{{ url('job-workflow/#/job-processing/workflow') }}">Job  Workflow</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcan
                    @can('generate-quotation')
                        <li><a class="has-arrow waves-effect waves-dark {{ Request::is('quotations*')? 'active' : '' }} {{ Request::is('generate*')? 'active' : '' }} {{ Request::is('quotation/*')? 'active' : '' }}" href="#" aria-expanded="false">
                                <i class="ti-files"></i><span class="hide-menu">Quotations</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="{{ url('/quotations')}}">All Quotations</a></li>
                                <li><a href="{{ url('/generate-quotation/import') }}">Gen. Import Quotation</a></li>
                                <li><a href="{{ url('/generate-quotation/export') }}">Gen. Export Quotation</a></li>
                            </ul>
                        </li>
                    @endcan
                    @can('manager')
                        <li><a  class="has-arrow waves-effect waves-dark {{ Request::is('forwarding*')? 'active' : '' }} {{ Request::is('approval*')? 'active' : '' }}" href="#"
                               aria-expanded="false">
                                <i class="mdi mdi-account"></i><span class="hide-menu"> Approvals </span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li>
                                    <a href="{{ url('forwarding') }}">Approvals</a>
                                </li> <li>
                                    <a href="{{ url('/approval-workflow#/approval/workflow-stage-approvers') }}">Approval Workflow</a>
                                </li>
                            </ul>
                        </li>
                    @endcan
                    <li><a class="{{ Request::is('reports*')? 'active' : '' }}  {{ Request::is('pos-report*')? 'active' : '' }} {{ Request::is('leads-report*')? 'active' : '' }}   has-arrow waves-effect waves-dark" href="#" aria-expanded="false">
                            <i class="mdi mdi-package-down"></i><span>Reports</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{ url('/reports/create')}}">Jobs</a></li>
                            <li><a href="{{ url('/pos-report') }}">Purchase Orders</a></li>
                            <li><a href="{{ url('/leads-report') }}">Leads</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
@endif
