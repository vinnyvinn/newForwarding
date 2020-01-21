/*reusable components*/
import Loader from './components/Loader.vue';

Vue.component('loader', Loader);

import Flash from './components/Flash.vue';

Vue.component('flash', Flash);

import SimpleSpiner from './components/SimpleSpiner.vue';

Vue.component('simple-spiner', SimpleSpiner);

import MyModalSample from './components/MyModalSample.vue';

Vue.component('my-modal-sample', MyModalSample);

const PlainModal = () => import( './components/PlainModal.vue');
Vue.component('plain-modal', PlainModal);

const MyModal = () => import( './components/MyModal.vue');
Vue.component('my-modal', MyModal);

const CustomActions = () => import( './components/Vuetable2/CustomActions.vue');
Vue.component('custom-actions', CustomActions);

const CustomPaginationInfo = () => import( './components/Vuetable2/CustomPaginationInfo.vue');
Vue.component('custom-pagination-info', CustomPaginationInfo);

import FilterBar from './components/Vuetable2/FilterBar.vue';

Vue.component('filter-bar', FilterBar);

const CompanyAddress = () => import( './components/company/CompanyAddress.vue');
Vue.component('company-address', CompanyAddress);


/*dashboard components*/
const QuotationGenButton = () => import( './views/Dashboard/QuotationButton.vue');
Vue.component('quotation-gen-button', QuotationGenButton);

const QuotationPreview = () => import( './views/Dashboard/QuotationPreview.vue');
Vue.component('quotation-preview', QuotationPreview);

const DashbordTopBarComponent = () => import( './views/Dashboard/TopBar.vue');
Vue.component('dashbord-top-bar-component', DashbordTopBarComponent);


/*customer components*/
const AllCustomersComponent = () => import( './views/Customer/Index.vue');
Vue.component('all-customers-component', AllCustomersComponent);

const CustomerContactDetailsComponent = () => import( './views/Customer/ContactDetails.vue');
Vue.component('customer-contact-details-component', CustomerContactDetailsComponent);

const CustomerSearchAjaxComponent = () => import( './views/Customer/SearchAjax.vue');
Vue.component('customer-search-ajax-component', CustomerSearchAjaxComponent);

const CustomerSearchComponent = () => import( './views/Customer/Search.vue');
Vue.component('customer-search-component', CustomerSearchComponent);

/*jobs components*/

const CompletedJobsComponent = () => import( './views/Jobs/Completed.vue');
Vue.component('completed-jobs-component', CompletedJobsComponent);

const JobsTabsComponent = () => import( './views/Jobs/Tab.vue');
Vue.component('jobs-tabs-component', JobsTabsComponent);

const PendingJobsComponent = () => import( './views/Jobs/Active.vue');
Vue.component('pending-jobs-component', PendingJobsComponent);

/*jobs workflow components*/

const AddRequiredDocsComponent = () => import( './views/JobWorkflow/RequiredDocs/Add.vue');
Vue.component('add-required-docs-component', AddRequiredDocsComponent);

const RequiredDocsComponent = () => import( './views/JobWorkflow/RequiredDocs/Index.vue');
Vue.component('required-docs-component', RequiredDocsComponent);

const AddShipmentComponent = () => import( './views/JobWorkflow/Shipment/Add.vue');
Vue.component('add-shipment-component', AddShipmentComponent);

const ShipmentsComponent = () => import( './views/JobWorkflow/Shipment/Index.vue');
Vue.component('shipments-component', ShipmentsComponent);

const AddShipmentSubTypeComponent = () => import( './views/JobWorkflow/ShipmentSubTypes/Add.vue');
Vue.component('add-shipment-sub-type-component', AddShipmentSubTypeComponent);

const ShipmentSubTypesComponent = () => import( './views/JobWorkflow/ShipmentSubTypes/Index.vue');
Vue.component('shipment-sub-types-component', ShipmentSubTypesComponent);

const AddShipmentTypeComponent = () => import( './views/JobWorkflow/ShipmentType/Add.vue');
Vue.component('add-shipment-type-component', AddShipmentTypeComponent);

const ShipmentTypesComponent = () => import( './views/JobWorkflow/ShipmentType/Index.vue');
Vue.component('shipment-types-component', ShipmentTypesComponent);

const AddStageComponent = () => import( './views/JobWorkflow/Stages/Add.vue');
Vue.component('add-stage-component', AddStageComponent);

const StagesComponent = () => import( './views/JobWorkflow/Stages/Index.vue');
Vue.component('stages-component', StagesComponent);

const StageCheckListComponent = () => import( './views/JobWorkflow/StageCheckList/Index.vue');
Vue.component('stage-check-list-component', StageCheckListComponent);

const AddStageCheckListComponent = () => import( './views/JobWorkflow/StageCheckList/Add.vue');
Vue.component('add-stage-check-list-component', AddStageCheckListComponent);

const StageTypeSubTypes = () => import( './views/JobWorkflow/StageTypes/Index.vue');
Vue.component('stage-type-sub-types', StageTypeSubTypes);

const JobsWorkflowTabsComponent = () => import( './views/JobWorkflow/Tabs.vue');
Vue.component('jobs-workflow-tabs-component', JobsWorkflowTabsComponent);

const ShipmentListDropdown = () => import( './views/JobWorkflow/Shipment/Dropdown.vue');
Vue.component('shipment-list-dropdown', ShipmentListDropdown);

const ShipmentSubTypeDropdown = () => import( './views/JobWorkflow/ShipmentSubType/Dropdown.vue');
Vue.component('shipment-sub-type-dropdown', ShipmentSubTypeDropdown);

const ShipmentTypeDropdown = () => import( './views/JobWorkflow/ShipmentType/Dropdown.vue');
Vue.component('shipment-type-dropdown', ShipmentTypeDropdown);

const AddJobProcessingWorkflow = () => import( './views/JobWorkflow/Add.vue');
Vue.component('add-job-processing-workflow', AddJobProcessingWorkflow);

const ShowWorkflowStages = () => import( './views/JobWorkflow/Show.vue');
Vue.component('show-job-workflow-stage', ShowWorkflowStages);

const WorkflowStageRequiredDocuments = () => import( './views/JobWorkflow/Document.vue');
Vue.component('workflow-stage-required-documents', WorkflowStageRequiredDocuments);

/*quotation components*/

const AllQuotationsComponent = () => import( './views/Quotation/Index.vue');
Vue.component('all-quotations-component', AllQuotationsComponent);

const GenerateQuotationComponent = () => import( './views/Quotation/Add/Index.vue');
Vue.component('generate-quotation-component', GenerateQuotationComponent);

const AddServiceComponent = () => import( './views/Quotation/Services/Index.vue');
Vue.component('add-service-component', AddServiceComponent);

const RequiredQuotationDocuments = () => import( './views/Quotation/Documents/Index.vue');
Vue.component('required-quotation-documents', RequiredQuotationDocuments);

const ShowRequiredQuotationDocuments = () => import( './views/Quotation/Documents/Show.vue');
Vue.component('show-required-quotation-documents', ShowRequiredQuotationDocuments);

const AddQuotationServiceForm = () => import( './views/Quotation/Services/Add.vue');
Vue.component('add-quotation-service-form', AddQuotationServiceForm);

const EditQuotationServiceComponent = () => import( './views/Quotation/Services/Edit.vue');
Vue.component('edit-quotation-service-component', EditQuotationServiceComponent);

const PreviewQuotationServiceComponent = () => import( './views/Quotation/Services/Show.vue');
Vue.component('preview-quotation-service-component', PreviewQuotationServiceComponent);

const QuotationServiceActionsComponent = () => import( './views/Quotation/Services/Actions.vue');
Vue.component('quotation-service-actions-component', QuotationServiceActionsComponent);

const EditQuotationComponent = () => import( './views/Quotation/Edit.vue');
Vue.component('edit-quotation-component', EditQuotationComponent);

const QuotationRemarksComponent = () => import( './views/Quotation/Remarks.vue');
Vue.component('quotation-remarks-component', QuotationRemarksComponent);

const CargoDetailsFormComponent = () => import( './views/Quotation/Add/Cargo.vue');
Vue.component('cargo-details-form-component', CargoDetailsFormComponent);

const TypeOfShipment = () => import( './views/Quotation/Shipment/TypeOfShipment.vue');
Vue.component('type-of-shipment', TypeOfShipment);

const CompanyBankAccountDetails = () => import( './views/Quotation/BankDetails/Index.vue');
Vue.component('company-bank-account-details', CompanyBankAccountDetails);


/* invoice components*/

const InvoiceHeadComponent = () => import( './views/Invoice/Title.vue');
Vue.component('invoice-head-component', InvoiceHeadComponent);

const EditClientsDetailsComponent = () => import( './views/Invoice/Client/Edit.vue');
Vue.component('edit-clients-details-component', EditClientsDetailsComponent);

/*admin components*/
const CompanyInfoSettingsComponent = () => import( './views/Admin/Settings/CompanyInfo.vue');
Vue.component('company-info-settings-component', CompanyInfoSettingsComponent);

const CompanyProfile = () => import( './views/Admin/Settings/CompanyProfile.vue');
Vue.component('company-profile', CompanyProfile);

const ContractsComponent = () => import( './views/Admin/Contracts.vue');
Vue.component('contracts-component', ContractsComponent);

const ManageUsersComponent = () => import( './views/Admin/ManageUsers.vue');
Vue.component('manage-users-component', ManageUsersComponent);

const RolesAndPermisions = () => import( './views/Admin/RolesAndPermisions.vue');
Vue.component('roles-and-permisions', RolesAndPermisions);


const ServicesComponent = () => import( './views/Admin/Services.vue');
Vue.component('services-component', ServicesComponent);

const CountriesComponent = () => import( './views/Admin/Settings/CountriesComponent.vue');
Vue.component('countries-component', CountriesComponent);

const SettingsTabs = () => import( './views/Admin/Settings/Tabs.vue');
Vue.component('settings-tabs', SettingsTabs);


/* Approvals components*/
const ApprovalTabsComponent = () => import( './views/Approvals/Tabs.vue');
Vue.component('approval-tabs-component', ApprovalTabsComponent);

const MyApprovalComponent = () => import( './views/Approvals/Index.vue');
Vue.component('my-approval-component', MyApprovalComponent);

const ApprovalNotificationComponent = () => import( './views/Approvals/Notification.vue');
Vue.component('approval-notification-component', ApprovalNotificationComponent);

/* workflow routes*/
const AddWorkflowStageApproversComponent = () => import( './views/Approvals/Workflow/Approvers/Add.vue');
Vue.component('add-workflow-stage-approvers-component', AddWorkflowStageApproversComponent);

const ApprovalWorkflowStageApproversComponent = () => import( './views/Approvals/Workflow/Approvers/Index.vue');
Vue.component('approval-workflow-stage-approvers-component', ApprovalWorkflowStageApproversComponent);

const AddWorkflowStageComponent = () => import( './views/Approvals/Workflow/Stage/Add.vue');
Vue.component('add-workflow-stage-component', AddWorkflowStageComponent);

const ApprovalWorkflowStageComponent = () => import( './views/Approvals/Workflow/Stage/Index.vue');
Vue.component('approval-workflow-stage-component', ApprovalWorkflowStageComponent);

const AddWorkflowStageTypesComponent = () => import( './views/Approvals/Workflow/StageType/Add.vue');
Vue.component('add-workflow-stage-types-component', AddWorkflowStageTypesComponent);

const ApprovalWorkflowStageTypesComponent = () => import( './views/Approvals/Workflow/StageType/Index.vue');
Vue.component('approval-workflow-stage-types-component', ApprovalWorkflowStageTypesComponent);

const AddWorkflowTypesComponent = () => import( './views/Approvals/Workflow/Add.vue');
Vue.component('add-workflow-types-component', AddWorkflowTypesComponent);

const ApprovalWorkflowTypesComponent = () => import( './views/Approvals/Workflow/Index.vue');
Vue.component('approval-workflow-types-component', ApprovalWorkflowTypesComponent);

/*job processing process*/

const JobProcessingTabsComponent = () => import( './views/JobProcessing/Tab.vue');
Vue.component('job-processing-tabs-component', JobProcessingTabsComponent);

const JobProcessingStepsComponent = () => import( './views/JobProcessing/Stages/Index.vue');
Vue.component('job-processing-steps-component', JobProcessingStepsComponent);

const JobStepDetails = () => import( './views/JobProcessing/Stages/Show.vue');
Vue.component('job-step-details', JobStepDetails);

const JobPurchaseOrderComponent = () => import( './views/JobProcessing/PurchaseOrder/Index.vue');
Vue.component('job-purchase-order-component', JobPurchaseOrderComponent);

const JobProjectCostComponent = () => import( './views/JobProcessing/ProjectCost/Index.vue');
Vue.component('job-project-cost-component', JobProjectCostComponent);

const JobDSRComponent = () => import( './views/JobProcessing/DSR/Index.vue');
Vue.component('job-dsr-component', JobDSRComponent);

const JobDeliveryDocsComponent = () => import( './views/JobProcessing/DeliveryDocs/Index.vue');
Vue.component('job-delivery-docs-component', JobDeliveryDocsComponent);

const CompleteJobComponent = () => import( './views/JobProcessing/Complete/Index.vue');
Vue.component('complete-job-component', CompleteJobComponent);

const JobClientDocumentsComponent = () => import( './views/JobProcessing/ClientDocuments/Index.vue');
Vue.component('job-client-documents-component', JobClientDocumentsComponent);

const JobCargoImagesComponent = () => import( './views/JobProcessing/CargoImages/Index.vue');
Vue.component('job-cargo-images-component', JobCargoImagesComponent);

const JobsReportComponent = () => import( './views/Reports/JobsReportComponent.vue');
Vue.component('jobs-report-component', JobsReportComponent);

const LeadsReportComponent = () => import( './views/Reports/LeadsReportComponent.vue');
Vue.component('leads-report-component', LeadsReportComponent);

const PosReportComponent = () => import( './views/Reports/PosReportComponent.vue');
Vue.component('pos-report-component', PosReportComponent);

const AddStepToJobProcessing = () => import( './views/JobProcessing/Stages/Add.vue');
Vue.component('add-step-to-job-processing', AddStepToJobProcessing);

const JobProcessingAddChecklistToStage = () => import( './views/JobProcessing/Steps/Add.vue');
Vue.component('job-processing-add-checklist-step-to-stage', JobProcessingAddChecklistToStage);

const JobProcessingCompleteStageStep = () => import( './views/JobProcessing/Steps/Complete.vue');
Vue.component('job-processing-complete-stage-step', JobProcessingCompleteStageStep);

const JobProcessingAddClientDocs = () => import( './views/JobProcessing/ClientDocuments/Add.vue');
Vue.component('job-processing-add-clients-docs', JobProcessingAddClientDocs);

const JobProcessingEditDSR = () => import( './views/JobProcessing/DSR/Edit.vue');
Vue.component('job-processing-edit-dsr', JobProcessingEditDSR);

const JobProcessingDSRStageAndStep = () => import( './views/JobProcessing/DSR/Show.vue');
Vue.component('job-processing-dsr-stage-and-step', JobProcessingDSRStageAndStep);

const JobProcessingProjectCostRequestFund = () => import( './views/JobProcessing/ProjectCost/RequestFund.vue');
Vue.component('job-processing-project-cost-request-fund', JobProcessingProjectCostRequestFund);

const JobProcessingProjectCostRequestViewFunds = () => import( './views/JobProcessing/ProjectCost/ViewFunds.vue');
Vue.component('job-processing-project-cost-request-view-funds', JobProcessingProjectCostRequestViewFunds);

const JobProcessingProjectCostAddProjectServiceCost = () => import( './views/JobProcessing/ProjectCost/AddProjectServiceCost.vue');
Vue.component('job-processing-project-cost-add-project-service-cost', JobProcessingProjectCostAddProjectServiceCost);

const JobProcessingProjectViewProjectStament = () => import( './views/JobProcessing/ProjectCost/ViewProjectStatement.vue');
Vue.component('job-processing-project-view-project-statement', JobProcessingProjectViewProjectStament);

/*user components*/

const UserSelectDropdown = () => import( './views/Users/UserSelectDropdown.vue');
Vue.component('user-select-dropdown', UserSelectDropdown);


/* notifications */

const AllNotifications = () => import( './views/Notification/Index.vue');
Vue.component('all-notifications', AllNotifications);


