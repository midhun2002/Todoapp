import React from 'react'
// import {useDispatch} from 'react-redux'
const Todo = ({item,Update,Delete}) => {
  // console.log("called")
    return (
        <div>
          <li key={item.work}>
            <input disabled="disabled" value={item.work}></input>
            <button onClick={()=>Update(item)}>tick</button>
            <button onClick={()=>Delete(item)}>del</button> 
            {item.completed === true ? <span>Completed</span> : <span>Not Completed</span>}
          </li>
        </div>
    )
}

export default Todo
