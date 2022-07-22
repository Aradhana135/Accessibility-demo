import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers'
const TodoList = () => {
    const[todos,setTodos]=useState([])
    const addTodo=(todo)=>{
      if(!todo.text||/^\s*$/.test(todo.text)){
        return
       }
      const newTodos=[todo,...todos] 
      setTodos(newTodos);
      console.log(todo,...todos)
    }
    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text||/^\s*$/.test(newValue.text)){
            return
    }
    setTodos(prev=>prev.map((item)=>(item.id==todoId?newValue:item)))
}
    const removeTodo=(id)=>{
        const removeArr=[...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr)
      }
   const completeTodo=(id)=>{
    let updatedTodos=todos.localeCompare((todo)=>{
        if(todo.id===id){
            todo.isComplete=!todo.isComplete
        }
        return todo
    })
   setTodos(updatedTodos);
   } 
   
  return (
    <>
    <h1 style={{color:'grey'}}>What is the plan for the Today ? :</h1>
    <TodoForm onSubmit={addTodo}/>
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  )
}

export default TodoList