import YetToCompleteList from "./YetToCompleteList"
import { useEffect, useRef, useState } from "react";

let LOCAL_STORAGE_KEY = "to-do-app"

function App() {
  const [todos, setTodos] = useState([]);

  const taskInput = useRef();

  //to rerender the component whenever todo changes- useEffect is used.- for any sideEffect-useEffect is used
  //here it is ues to store todos in local storage
  useEffect(()=>{
    console.log(todos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  useEffect(()=>{
    // console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
    let getTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(getTodos) setTodos(getTodos);
  },[])

  const handleTasks =()=>{
    const task = taskInput.current.value;
    console.log(task)
    if (task === "") return;
    setTodos(previousTodos=> {
      return [...previousTodos,{id:3, item: task, complete:true}];
    })
    console.log(todos);
    taskInput.current.value = null;
  }
  const toggleTodod =(id)=>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=>todo.id === id);
    todo.complete =!todo.complete;
    setTodos(newTodos)
  }

  let handleClearComplete = ()=>{
    const newTodos = todos.filter((todo)=> !todo.complete);
    setTodos(newTodos);
  }
  return (<div>
    <YetToCompleteList todos={todos} toggleTodod={toggleTodod}/>
    <input type="text" ref={taskInput} />
    <button onClick={handleTasks}>Add Task</button>
    <button onClick={handleClearComplete}>Clear complete</button>
    <p>{todos.filter((todo)=> !todo.completed).length}left to do</p>
  </div>    
  );
}

export default App;
