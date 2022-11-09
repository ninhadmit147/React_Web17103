import React, { useState } from 'react'
import { ITodo } from '../../interface/Todo'
import ItemTodo from './ItemTodo'

type ListTodoProps = {
    todos:ITodo[]
}

const ListTodo = ({todos}: ListTodoProps) => {
  return (
    <div>
        <h1 className="text-xl">List todo</h1>
        {todos.map((item,index)=>(
            <div key={index}>
                <ItemTodo todo={item}/>
            </div>
        ))}
    </div>
  )
}

export default ListTodo