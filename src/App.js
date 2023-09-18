import React from "react"
import './App.css'
import { useState } from "react"

function App(){
   const [tuDos,setTodos]=useState([])
   const [tuDo,setTodo]=useState('')
  return (

    <div className="app" >
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input  value={tuDo}  onChange={(e)=>setTodo(e.target.value)}  type="text"  placeholder="🖊️ Add item..." />
        <i
    onClick={() => {
      if (tuDo.trim() !== "") { 
        setTodos([...tuDos, { id: Date.now(), text: tuDo, status: false }]);
        setTodo("");
      }
    }}
    className="fas fa-plus"
  ></i>

      </div>
      <div className="todos">
        {   tuDos.map((data)=>{

       
      return (  <div className="todo" key={data.id}>
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(data);
              setTodos(tuDos.filter(data2=>{
                if(data2.id===data.id){
                    data2.status=e.target.checked
                }
                return data2
              }))
            }}  data={data.status} type="checkbox" name="" id="" />
            <p>{data.text}</p>
          </div>
         <div className="right">
            {<button onClick={()=>{
             setTodos((deleteTudo)=> deleteTudo.filter((item)=>item.id !==data.id))
              console.log('delete done');
            }}>
             <i className="fas fa-times"></i>
            </button>}
          </div>
        </div>    )
         })}
         <div>
          <button className="btn-btn" onClick={(resest)=>{
            setTodos([])
          }}>
                resest
          </button>
         </div>
         { tuDos.map((f)=>{
          if(f.status){
          return  <h1 key={f.id}>{f.text}</h1>
          }
          return null
         })}
       
      </div>
    </div>
  )
}

export default App