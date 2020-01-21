import MY_URLS from '../../configs/url'

const state = {
    allRequiredQuotationDocs:[],
    errors:[]
};

const getters = {
    allRequiredQuotationDocs: state => state.allRequiredQuotationDocs
};

const mutations = {
    SET_REQUIRED_DOCS(state, data){
        state.allRequiredQuotationDocs = data;

    },
    SET_REQUIRED_DOCS_ERRORS(state, data){
        state.errors = data;

    }
};


const actions = {
    getAllRequiredQuotationDocs(store){
        axios.get(MY_URLS.REQUIRED_DOCS_URL).then((response)=>{
            store.commit('SET_REQUIRED_DOCS', response.data)
        }).catch(error=>store.commit('SET_REQUIRED_DOCS_ERRORS', error))
    }
};


export default {
    state, getters, mutations,actions
}