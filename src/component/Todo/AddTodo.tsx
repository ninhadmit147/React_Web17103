import React, { useState } from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { ITodo } from '../../interface/Todo'

type AddTodoProps = {
    addTodo:(todo:ITodo)=>void
}

const AddTodo = (props: AddTodoProps) => {
    // const [value,setValue] = useState<ITodo>({name:""})
    // const onHandleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setValue({
    //         id:1,
    //         name:e.target.value
    //     })
    // }
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors}
    } = useForm<ITodo>()
    // const onHandleAdd=(e:React.FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault()
    //     props.addTodo(value)
    // }
    const onSubmit:SubmitHandler<ITodo>= (data)=>{
        props.addTodo({id:3,...data})
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} action="">
            <input className='border' {...register("name")} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddTodo