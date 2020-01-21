const ApprovalWorkflowTypes=()=>import("../../views/Approvals/Workflow/Index");
const ApprovalWorkflowStages =()=>import('../../views/Approvals/Workflow/Stage/Index.vue');
const ApprovalWorkflowStageTypes =()=>import( '../../views/Approvals/Workflow/StageType/Index');
const WorkflowStageApprovers =()=>import( '../../views/Approvals/Workflow/Approvers/Index');

const ApprovalRoutes = [
    {
        path: '/approval/workflow-type',
        name: "approval_workflow_type",
        component: ApprovalWorkflowTypes,
    },
    {
        path: '/approval/workflow-stages',
        name: "approval_workflow_stages",
        component: ApprovalWorkflowStages,
    },
    {
        path: '/approval/workflow-stage-types',
        name: "approval_workflow_stage_types",
        component: ApprovalWorkflowStageTypes,
    },
    {
        path: '/approval/workflow-stage-approvers',
        name: "workflow_stage_approvers",
        component: WorkflowStageApprovers,
    }
];

export default ApprovalRoutes;