import React from 'react'
import { ITodo } from '../../interface/Todo'

type ItemTodoProps = {
    todo:ITodo
}

const ItemTodo = ({todo}: ItemTodoProps) => {
  return (
    <div>{todo.name} <button>Remove</button></div>
  )
}

export default ItemTodo