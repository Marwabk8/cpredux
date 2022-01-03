import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import{add, Delete}from './redux/action'


function Todoliste() {
  const dispatch = useDispatch()
  const[text,setText]= useState('')

    return (
        <div>
      <h1>My todo liste</h1>  
      <input onChange={(e)=>setText(e.target.value)}></input>    
      <button onClick={()=>dispatch(add({text}))}>ADD</button>
       <div> <li> 
      <button>Done</button>
      <button onClick={()=>dispatch(Delete({}))}>delete </button>
      </li>
      </div>

        </div>
    )
}

export default Todoliste
