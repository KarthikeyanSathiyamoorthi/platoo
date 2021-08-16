import { TENANT_INFO,UPDATE_TENANT_TOKEN } from '../actions/types';

const initialState = {
    tenant:null,
    tenant_token:null
}

const commonStateReducer = ( state = initialState, action ) => {
    switch(action.type){
        case TENANT_INFO:
            console.log(action.data);
            return {...state,tenant:action.data};
        case UPDATE_TENANT_TOKEN:
            console.log(action.data);
            return {...state,tenant_token:action.data};
        default:
            return state;
    }
};

export default commonStateReducer;
