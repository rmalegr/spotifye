import Link from 'next/link'
import React from 'react'

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const todos  = await res.json()
  console.log("this is the todos", todos)
  return todos
}

async function TodoList() {
  const todos = await fetchTodos()
  // console.log(todos)
  return (
  <> 
    <p>Soy Todo List</p>
      {todos.map((todo)=> (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default TodoList