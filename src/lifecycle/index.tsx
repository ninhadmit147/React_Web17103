import React, { useEffect, useState } from 'react'

type Props = {}
interface IProduct{
    id:number,
    name:string
}
const Lifecycle = (props: Props) => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("Ninh")
    const [products,setProducts]= useState<IProduct[]>([])
useEffect(()=>{
    // document.title=`After Click count = ${count}`
    (async()=>{
        const respone = await fetch(`http://localhost:3000/products`)
        const data = await respone.json()
        setProducts(data)
    })()
},[])
const Remove=async(id:number)=>{
    await fetch(`http://localhost:3000/products/${id}`,
    {method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    }
    })
    // const newProducts = products.filter((item)=>item.id!==id)
    // setProducts(newProducts)
}
  return (
    // <div>
    <div>
        {products.length>0 ?
        products.map((item,index)=> (<div key={index}>{item.name}<button onClick={()=>Remove(item.id)}>Remove</button></div>)):"hehe"}
    </div>
    // <button onClick={()=>setCount(count+1)}>count + 1</button>
    // <button onClick={()=>setName("Ninh after")}>Set name</button>
    // </div>
  )
}

export default Lifecycle