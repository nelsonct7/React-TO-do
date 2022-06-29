import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          if(toDo==="" || /^\s*$/.test(toDo))
          return
          else{
            return setToDos([...toDos,{id:Date.now(), text:toDo,status:false,deleted:false}])}
          }
          
          } className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value)=>{
            if(value.deleted===true){
              return null
            }else{
            return(
              <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id===value.id){
                      obj2.status=e.target.checked
                    }
                    return obj2
                  }))
                }} type="checkbox" name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i onClick={(e)=>{
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id===value.id){
                      obj2.deleted=true
                      obj2.text=""
                    }
                    return obj2
                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>
            );
              }
          })
        }
        <div >
        <h1>Completed Tasks</h1>
        {
          toDos.map((obj)=>{
            if(obj.status){
              return <h1>{obj.text}</h1>
            }
            return null
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;
