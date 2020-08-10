/*
 * @Date: 2020-08-06 14:21:01
 * @FilePath: \webpack-demo\src\pages\count\reducer\index.ts
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */

import {InitState, ADD_COUNT, AddCountAction} from "../type";

export default function countReducer(state:InitState={count: 0}, action:AddCountAction){
    switch(action.type){
        case ADD_COUNT:
            return{
                ...state,
                count:state.count+1
            };
        default:
            return state;
    }
}