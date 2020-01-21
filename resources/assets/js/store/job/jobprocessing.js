import MY_URLS from '../../configs/url';

const state = {
    selectedJobStage: {},
    errors: {}
};

const getters = {
    selectedJobStage: state => state.selectedJobStage,
};

const mutations = {
    SET_SELECTED_JOB_INFO(state, data) {
        state.selectedJobStage = data
    }
};

const actions = {

};

export default {
    state, getters, mutations, actions
}