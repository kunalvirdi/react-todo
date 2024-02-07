import {createSlice} from "@reduxjs/toolkit";
const todoItemsSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        fetchTodos(todos,action){
            return action.payload
        },

        // eslint-disable-next-line no-unused-vars
        addTodo(todos,action){
            if(todos.length===0){
                todos.push(action.payload)
                return
            }
            return [action.payload,...todos]
        },
        changeState(todos,action){
          todos=todos.filter(st=>{
              if(action.payload.id===st?.id){
                  return st.isCompleted=action.payload.isCompleted
              }
          })
        },
        // eslint-disable-next-line no-unused-vars
        removeCompletedTodos(todos,action){
           return todos.filter((st)=>{
                if(!st.isCompleted){
                    return st;
                }
            })
        }
    }
})
export const todoAction=todoItemsSlice.actions;
export default todoItemsSlice;