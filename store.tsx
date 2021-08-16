import { combineReducers, createStore } from 'redux';
import commonStateReducer from './reducers/commonStateReducer';

const rootReducer = combineReducers({
    commonStateReducer: commonStateReducer 
});

const store = createStore(rootReducer);

export default store;