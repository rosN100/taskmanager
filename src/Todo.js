import React from 'react'

export default function Todo({todos,toggleTodod}) {
  let handleClick=()=>{
  toggleTodod(todos.id)
  }
  return (
    <div>
      <lable>
        <input type="checkbox" checked={todos.complete} onChange={handleClick}/>
        {todos.item}
      </lable>
    </div>
  )
}
