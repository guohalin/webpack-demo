/*
 * @Date: 2020-08-06 14:20:55
 * @FilePath: \webpack-demo\src\pages\count\type\index.ts
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */
export const ADD_COUNT = "ADD_COUNT";

export interface InitState{
    count:number
}

export interface AddCountAction{
    type: typeof ADD_COUNT;
}
