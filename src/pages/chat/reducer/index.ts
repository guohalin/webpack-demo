/*
 * @Date: 2020-08-05 17:06:22
 * @FilePath: \webpack-demo\src\pages\chat\reducer\index.ts
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */
// /*
//  * @Date: 2020-08-05 17:06:22
//  * @FilePath: \webpack-demo\src\pages\chat\reducer\index.ts
//  * @file: 文件名称
//  * @author: halin.guo
//  * @description: 文件描述
//  */
// import {
//     ChatState,
//     ChatActions,
//     ChatActionTypes,
//     SEND_MESSAGE,
//     DELETE_MESSAGE
//   } from '../type'
  
//   const initialState: ChatState = {
//     messages: []
//   }
  
//   export function chatReducer(
//     state = initialState,
//     action: ChatActionTypes
//   ): ChatState {
//     switch (action.type) {
//       case SEND_MESSAGE:
//         return {
//           messages: [...state.messages, action.payload]
//         }
//       case DELETE_MESSAGE:
//         return {
//           messages: state.messages.filter(
//             message => message.timestamp !== action.meta.timestamp
//           )
//         }
//       default:
//         return state
//     }
//   }

//   // system
//   import {
//     SystemActions,
//     SystemState,
//     SystemActionTypes,
//     UPDATE_SESSION
//   } from '../type'
  
//   const initialState: SystemState = {
//     loggedIn: false,
//     session: '',
//     userName: ''
//   }
  
//   export function systemReducer(
//     state = initialState,
//     action: SystemActionTypes
//   ): SystemState {
//     switch (action.type) {
//       case UPDATE_SESSION: {
//         return {
//           ...state,
//           ...action.payload
//         }
//       }
//       default:
//         return state
//     }
//   }