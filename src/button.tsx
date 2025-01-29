import React, { useState } from 'react'

const Button = () => {
    const  [counter, setCounter] = useState(0)
  return (
    <button onClick={()=>setCounter(3)} disabled={counter === 3 ? true: false} data-testid="btn">{counter}</button>
  )
}

export default Button