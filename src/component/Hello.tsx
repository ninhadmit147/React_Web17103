import React from 'react'

type Props = {name:string,age:number}

const Hello = (props: Props) => {
  return (
    <div>
    <div>{props.name}</div>
    <div>{props.age}</div>
    </div>
  )
}

export default Hello