import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminRoutes from "./modules/settings"
import JobsRoutes from "./modules/jobs"
import JobProcessingRoutes from "./modules/jobprocessing"
import JobWorkflowRoutes from "./modules/jobworkflow"
import ApprovalRoutes from "./modules/approvals"


Vue.use(VueRouter);

const routes = [
    ...AdminRoutes,
    ...JobsRoutes,
    ...JobProcessingRoutes,
    ...JobWorkflowRoutes,
    ...ApprovalRoutes,
];


const myrouter = new VueRouter({
    saveScrollPosition: true,
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
});

setTimeout(() => {
    console.log(myrouter.currentRoute.path);
}, 0);

export default myrouter


