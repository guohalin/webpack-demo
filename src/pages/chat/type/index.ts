/*
 * @Date: 2020-08-05 16:54:12
 * @FilePath: \webpack-demo\src\pages\chat\type\index.ts
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */


// chat 

//chat reducer 类型检查
export interface Message {
    user: string
    message: string
    timestamp: number
  }
  
export interface ChatState {
    messages: Message[]
}

// chat action 类型检查
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction

// system  reducer 类型检查
export interface SystemState {
    loggedIn: boolean
    session: string
    userName: string
}

// system action 类型检查
export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction;
