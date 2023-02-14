import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  function handleCount(){
    setCount(count+1)
  }
  console.log(count,"here is value")
  return (
    <div>
      hello world
      <br/>
      
      <button onClick={handleCount}>click me</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App
