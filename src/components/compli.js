import React,{useState} from 'react'
import Todo from   "./Todo"
import {Add} from  "../redux/actions"
import {useDispatch,useSelector} from "react-redux"
const Compli = ({Todos,Update,Delete}) => {
    // const [eitem,setItem]=useState("")
    // const Todos = useSelector(state => state.Todos);
    // // console.log(Todos);
    // const dispatch = useDispatch();
    return (
        <div>
                {/* <input type="text" value ={eitem} onChange={e => setItem(e.target.value)}></input>
                <button onClick={() => {dispatch(Add(eitem));setItem("") ;}}>+</button>
                <button name="option">All</button>
                <button name="option">Completed</button>
                <button name="option">not Completed</button> */}
                <div>
                    {Todos.map(item => <Todo item={item} Update={Update} Delete={Delete}/>)}         
                </div>           
       </div>
    )
}

export default Compli
