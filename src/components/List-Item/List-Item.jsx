import styles from './item.module.css'
// import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {todoAction} from "../../store/todoItems-slice.js";
// eslint-disable-next-line react/prop-types
const ListItem=({id,todo,isCompleted})=>{
    const Dispatch=useDispatch();
    const className=isCompleted?`${styles.listItem} ${styles.fade} ${styles.line}`:`${styles.listItem}`;
    const inputHandler=(e)=>{
        e.target.checked?isCompleted=true:isCompleted=false
        Dispatch(todoAction.changeState({id, isCompleted}))
    }
    return(
        <div className={`${styles['list-item']}`}>
            <input type="checkbox" onChange={inputHandler} checked={isCompleted}/>
            <div className={className}>{todo}</div>
        </div>
    )
}
export default ListItem