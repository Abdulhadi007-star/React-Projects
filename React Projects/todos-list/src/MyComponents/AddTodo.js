import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")

    const submit =(e)=>{
        e.preventDefault();
        if(!Title || !Desc){
            alert("Title or Desc is blank!!!")
        }else{
        addTodo(Title, Desc);
    }
  }

  return (
    <div className='container my-3'>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value ={Title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Desc</label>
    <input type="text" value ={Desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}