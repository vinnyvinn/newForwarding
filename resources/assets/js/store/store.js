import Vue from 'vue'
import Vuex from 'vuex'
import Customers from './customers/customer'
import Transport from './transport/transport.js'
import companyInfo from './company/companyInfo.js'
import Quotation from './quotation/quotation.js'
import JobProcessing from './job/jobprocessing.js'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    modules: {
        Customers, Transport, companyInfo, Quotation, JobProcessing
    }
});


export default store