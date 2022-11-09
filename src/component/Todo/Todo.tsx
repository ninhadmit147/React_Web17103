import React, { useState } from 'react'
import { ITodo } from '../../interface/Todo'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

type Props = {}

const Todo = (props: Props) => {
    const [todos,SetTodo]=useState<ITodo[]>([
        { id: 1, name: "Todo 1" },
        { id: 2, name: "Todo 2" },
    ])
    const onHandleAddTodo=(todo:ITodo)=>{
        SetTodo([...todos,todo])
    }
  return (
    <>
        <AddTodo addTodo={onHandleAddTodo}/>
        <ListTodo todos={todos} />
    </>
  )
}

export default Todo