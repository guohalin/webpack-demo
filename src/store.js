import { combineReducers } from 'redux';
import accountManagerReducer from './pages/accountManager/reducer';

const storeTree = combineReducers({
    accountManagerReducer
});
export default storeTree;