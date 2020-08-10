/*
 * @Date: 2019-01-03 11:02:39
 * @FilePath: \webpack-demo\src\store.ts
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */
import { combineReducers } from 'redux';
import accountManagerReducer from './pages/accountManager/reducer';
import countReducer from './pages/count/reducer';


export type AppState = ReturnType<typeof storeTree>;

const storeTree = combineReducers({
    accountManagerReducer,
    countReducer
});
export default storeTree;