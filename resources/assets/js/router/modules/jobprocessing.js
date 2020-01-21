const CargoImages = () => import( '../../views/JobProcessing/CargoImages/Index.vue');
const ClientsDocuments = () => import(  '../../views/JobProcessing/ClientDocuments/Index.vue');
const CompleteJob = () => import(  '../../views/JobProcessing/Complete/Index.vue');
const JobDeliveryDocs = () => import(  '../../views/JobProcessing/DeliveryDocs/Index.vue');
const JobDSR = () => import(  '../../views/JobProcessing/DSR/Index.vue');
const ProjectCost = () => import(  '../../views/JobProcessing/ProjectCost/Index.vue');
const PurchaseOrder = () => import(  '../../views/JobProcessing/PurchaseOrder/Index.vue');
const Steps = () => import(  '../../views/JobProcessing/Stages/Index.vue');
const JobStepDetails = () => import(  '../../views/JobProcessing/Stages/Show.vue');
const JobProcessingStages = () => import( '../../views/JobWorkflow/Stages/Index.vue');


const JobProcessingRoutes = [
    {
        path: '/job-processing/:jobId/cargo-images',
        name: "job_processing_cargo_images",
        component: CargoImages,
    },
    {
        path: '/job-processing/stages',
        name: "job_processing_stage",
        component: JobProcessingStages,
    },
    {
        path: '/job-processing/:jobId/clients-documents',
        name: "job_processing_clients_documents",
        component: ClientsDocuments,
    },
    {
        path: '/job-processing/:jobId/complete-job',
        name: "job_processing_complete_job",
        component: CompleteJob,
    },
    {
        path: '/job-processing/:jobId/job-delivery-docs',
        name: "job_processing_job_delivery_docs",
        component: JobDeliveryDocs,
    },
    {
        path: '/job-processing/:jobId/job-dsr',
        name: "job_processing_job_dsr",
        component: JobDSR,
    },
    {
        path: '/job-processing/:jobId/project-cost',
        name: "job_processing_project_cost",
        component: ProjectCost,
    },
    {
        path: '/job-processing/:jobId/purchase-order',
        name: "job_processing_purchase_order",
        component: PurchaseOrder,
    },
    {
        path: '/job-processing/:jobId/job-steps',
        name: "job_processing_job_steps",
        component: Steps,
        children: [

            {
                path: '/job-processing/step-details/:jobId/job-step/:stepId',
                name: 'job_processing_step_details_job_step_step_details',
                component: JobStepDetails,
            },

        ]
    }

];

export default JobProcessingRoutes;

