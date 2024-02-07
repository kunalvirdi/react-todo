import {Main} from './Layouts'
import {Form,List} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {todoAction} from "./store/todoItems-slice.js";
import {useEffect} from "react";

const App=()=> {
    //Initial LocalStorage Setup
    if(localStorage.getItem('todos')===null){
        localStorage.setItem('todos',JSON.stringify([]))
    }
    const todos=useSelector(state=>state.todo);
    const Dispatch=useDispatch()
    useEffect(()=>{
        const todos=localStorage.getItem('todos')
        Dispatch(todoAction.fetchTodos(JSON.parse(todos)))
    },[Dispatch])

    return (
        <Main>
            <Form/>
            {todos.length===0 && <div>Please add your todo list here...</div>}
            <List/>
        </Main>
    )
}

export default App
