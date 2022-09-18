import React from 'react'

export const Todo = ({todo, onDelete}) => {
    return ( 
    <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <buton className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</buton>
    </div>
    )
}