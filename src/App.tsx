import { useState } from 'react'
import Hello from './component/Hello'
import Lifecycle from './lifecycle'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name="Ninh nè"
  function show(props:{name:string}) {
    return props.name
  }
  return (
<div>
  <Lifecycle/>
    <h1>Function show: {show({name:"Ninh"})}</h1>
    <div>Component: 
    <Hello name="This is Ninh" age={10}/>
    </div>
  </div>
  )
}  
export default App
