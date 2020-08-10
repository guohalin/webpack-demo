/*
 * @Date: 2020-08-05 16:58:39
 * @FilePath: \webpack-demo\src\pages\chat\action\index.ts
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */


//  chat 

import { Message, SEND_MESSAGE, DELETE_MESSAGE } from '../type';

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message) {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}


// system
import { SystemState, UPDATE_SESSION } from '../type';

export function updateSession(newSession: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}