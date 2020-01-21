const SettingsComponent = () => import( '../../views/Admin/Settings/CompanyInfo.vue');
const RequiredDocs = () => import( '../../views/JobWorkflow/RequiredDocs/Index.vue');
const CompanyProfile = () => import( '../../views/Admin/Settings/CompanyProfile.vue');
const RoleAndPerMissions = () => import( '../../views/Admin/RolesAndPermisions');
const SettingsCountries = () => import( '../../views/Admin/Settings/CountriesComponent');

const AdminRoutes = [
    {
        path: '/companies',
        name: "admin_settings",
        component: SettingsComponent,
    },
    {
        path: '/stage/required-documents',
        name: "stage_required_documents",
        component: RequiredDocs,
    },
    {
        path: '/company/profile',
        name: "company_profile",
        component: CompanyProfile,
    },
    {
        path: '/store-role',
        name: "role_and_permissions",
        component: RoleAndPerMissions,
    },
    {
        path: '/settings/countries',
        name: "settings_countries",
        component: SettingsCountries,
    },


];

export default AdminRoutes;

/*const adminRoutes = {
    path: '/settings/company-info',
    // component: () => ('@/views/Admin/CompanyInfoSettingsComponent'),
    component: () => (SettingsComponent),
    redirect: '/settings-role',
    name: 'Administrator',
    alwaysShow: true,
    meta: {
        title: 'administrator',
        icon: 'admin',
        permissions: ['view menu administrator'],
    },
    children: [
        {
            path: 'settings/company-view',
            component: () => ('@/views/Admin/CompanyProfile'),
            // component: () => (CompanyProfile),
            name: 'UserProfile',
            meta: {title: 'userProfile', noCache: true, permissions: ['manage user']},
            hidden: true,
        },
    ],
};

export default adminRoutes;*/
