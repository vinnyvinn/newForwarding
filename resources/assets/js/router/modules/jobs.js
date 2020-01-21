const ActiveJobs =()=>import(  '../../views/Jobs/Active.vue');
const CompletedJobs =()=>import(  '../../views/Jobs/Completed.vue');
const JobsRoutes = [
    {
        path:'/jobs/active',
        name:"active_jobs",
        component:ActiveJobs,
    },
    {
        path:'/jobs/completed',
        name:"completed_job",
        component:CompletedJobs,
    },


];

export default JobsRoutes;