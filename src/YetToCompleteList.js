import React from 'react'
import Todo from "./Todo";

export default function YetToCompleteList({todos}) {
  return (
    <div>
      <h3>Yet To Complete</h3>
      {todos.map(todos =>{
        return <Todo todos= {todos} key={todos.item}/>
      })}
    </div>
  )
}
