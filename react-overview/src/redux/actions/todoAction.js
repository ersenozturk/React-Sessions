import { ADD_TODO, CLEARALL_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes"

export const addTodoFunc = (payload) =>{
    return { type:ADD_TODO, payload:payload}
}
export const clearAllFunc = () => ({
  type: CLEARALL_TODO,
})
export const toggleFunc = (payload) => ({
  type: TOGGLE_TODO,
  payload:payload
})
export const deleteTodoFunc = (payload) => ({
  type: DELETE_TODO,
  payload:payload
})
