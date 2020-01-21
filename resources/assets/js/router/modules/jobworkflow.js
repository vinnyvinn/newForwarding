const Shipment =()=>import(  '../../views/JobWorkflow/Shipment/Index.vue');
const ShipmentTypes =()=>import(  '../../views/JobWorkflow/ShipmentType/Index.vue');
const ShipmentSubTypes =()=>import(  '../../views/JobWorkflow/ShipmentSubTypes/Index.vue');
const JobProcessingWorkflow = () => import( '../../views/JobWorkflow/Index.vue');


const JobWorkflowRoutes = [
    {
        path:'/job-workflow/shipments',
        name:"workflow_shipments",
        component:Shipment,
    },
    {
        path:'/job-workflow/shipments-types',
        name:"workflow_shipments_type",
        component:ShipmentTypes,
    },
    {
        path:'/job-workflow/shipments-sub-types',
        name:"workflow_shipments_sub_type",
        component:ShipmentSubTypes,
    },
    {
        path: '/job-processing/workflow',
        name: "job_processing_workflow",
        component: JobProcessingWorkflow,
    },

];

export default JobWorkflowRoutes;