import MY_URLS from '../../configs/url';

const state = {
    cargoDetails: {},
    customerDetails: [],
    quotationServices: [],
    customerDetailsSet: false,
    shipmentSubType: '',
    shipmentType: '',
    errors: []
};

const getters = {
    cargoDetails: state => state.cargoDetails,
    customerDetails: state => state.customerDetails,
    quotationServices: state => state.quotationServices,
    customerDetailsSet: state => state.customerDetailsSet,
    shipmentSubType: state => state.shipmentSubType,
    shipmentType: state => state.shipmentType,
    errors: state => state.errors,
};

const mutations = {
    SET_CARGO_SHIPMENT_SUB_TYPE(state, data) {
        state.shipmentSubType = data
    },
    SET_CARGO_SHIPMENT_TYPE(state, data) {
        state.shipmentType = data
    },
    SET_CUSTOMER_DETAILS(state, data) {
        state.customerDetails = data
    },
    SET_CARGO_DETAILS(state, data) {
        state.cargoDetails = data
    },
    SET_CUSTOMER_DETAILS_SET(state, data) {
        state.customerDetailsSet = data
    },
    SET_QUOTATION_SERVICES(state, data) {
        state.quotationServices.push(data)
    },
    EDIT_QUOTATION_SERVICE(state, data) {
        let service = data.data;
        if (!_.isNil(state.quotationServices[data.index])) {
            state.quotationServices = state.quotationServices.map((value,key)=>key === data.index? service: value);
        }
    },
    DELETE_QUOTATION_SERVICES(state, data) {
        state.quotationServices.splice(_.indexOf(state.quotationServices, _.find(state.quotationServices, data)), 1);
    },
    SET_ERRORS(state, data) {
        state.errors = data
    },
};

const actions = {
    getAllCustomers(store) {
        axios.get(MY_URLS.CUSTOMER_URL).then((resp) => {
            store.commit('SET_CUSTOMERS_DETAILS', resp.data);
        }).catch(error => store.commit('SET_ERRORS', error))
    },
};

export default {
    state, getters, mutations, actions
}