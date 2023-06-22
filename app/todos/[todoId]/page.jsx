import React from 'react'

const fetchTodo = async (todoId) => {
    const rest = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}, `, {next :{revalidate : 10}}
    )
    const todo = await rest.json()
    return todo 
}

const TodoPage = async ({params}) => {
 const todo = await fetchTodo(params.todoId)
  const id = params.todoId
  return (
    <div className='p-10  text-black  bg-yellow-200 border-2 m-2 shadow-lg'>
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed : {todo.completed ? "Yes" : "No"}</p>
      <p className='border-t border-black mt-5 text-right'>    by User: {todo.userId}</p>
  
    </div>
  )
}

export default TodoPage
// export async function generateStaticParams(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//   const todos  = await res.json()
// }