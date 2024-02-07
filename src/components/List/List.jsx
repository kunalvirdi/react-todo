import {useDispatch, useSelector} from "react-redux";
import './list.css'
import ListItem from "../List-Item/List-Item.jsx";
import {useEffect} from "react";
import {todoAction} from "../../store/todoItems-slice.js";
import {Button} from "../../Layouts/index.js";
const List=()=>{
    const todos=useSelector(state=>state.todo);
    useEffect(()=>{
        if(todos.length>0) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    },[todos])


    const Dispatch=useDispatch();
    let completed=todos.filter(todo=>{
        if(todo.isCompleted){
            return todo
        }
    }).map(todo=>todo.id);
    const clearTasks=()=>{
        const todos=JSON.parse(localStorage.getItem('todos'));
        const updatedTodos=todos.filter((todo)=>{
            if(!completed.includes(todo.id)){
                return todo;
            }
        })
        updatedTodos.length>0?localStorage.setItem('todos',JSON.stringify(updatedTodos)):localStorage.setItem('todos',JSON.stringify([]));
        Dispatch(todoAction.removeCompletedTodos())
    }
    return(
        <>
            {todos.length>0 && todos.map(todo=>{
                return <ListItem key={todo.id} todo={todo.task} id={todo.id} isCompleted={todo.isCompleted}/>
            })}
            {completed.length>0 && <Button clickHandler={clearTasks}>Clear completed tasks</Button>}
        </>

    )
}
export default List