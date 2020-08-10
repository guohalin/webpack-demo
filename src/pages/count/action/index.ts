/*
 * @Date: 2020-08-06 14:21:06
 * @FilePath: \webpack-demo\src\pages\count\action\index.ts
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */

import { ADD_COUNT, AddCountAction } from "../type";

export function addCount() {
    return {
        type:ADD_COUNT
    }
}