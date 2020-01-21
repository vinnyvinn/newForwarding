import MY_URLS from '../../configs/url';

const state = {
    companyInfo: {},
    errors: {}
};

const getters = {
    companyInfo: state => state.companyInfo,
};

const mutations = {
    GET_COMPANY_INFO(state, data) {
        state.companyInfo = data
    },
    SET_COMPANY_ERRORS(state, data) {
        state.errors = data
    },
};

const actions = {
    getCompanyInfo(store) {
        Event.fire('show-loader', true);
        axios.get(MY_URLS.COMPANY_INFO_URL).then((resp) => {
            Event.fire('show-loader', false);
            store.commit('GET_COMPANY_INFO', resp.data);
        }).catch((error) => {
            store.commit('SET_COMPANY_ERRORS', error);
            Event.fire('show-loader', true);
        })
    },
};

export default {
    state, getters, mutations, actions
}