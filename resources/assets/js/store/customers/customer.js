import MY_URLS from '../../configs/url';

const state = {
    customers: [],
    options:['sample','sample1','sample2'],
    selected:'',
    errors:[]
};

const getters = {
    customers: state => state.customers,
};

const mutations = {
    SET_ALL_CUSTOMERS(state, data) {
        state.customers = data
    },
    SET_CUSTOMERS_ERRORS(state, data) {
        state.errors = data
    },
};

const actions = {
    getAllCustomers(store) {
        axios.get(MY_URLS.CUSTOMER_URL).then((resp) => {
            store.commit('SET_ALL_CUSTOMERS', resp.data);
        }).catch(error=>store.commit('SET_CUSTOMERS_ERRORS',error))
    },
};

export default {
    state, getters, mutations, actions
}