import React, { useState } from 'react'

interface IState{
    count: number
}
interface IProps{}
const Counter: React.FC = () => {
    const[state, setState] = useState<IState>({count:0});
    
    // add increment
    const handleIncrement = () => {
        setState({count: state.count + 1});
    }

    // decrement minus
    const handleDecrement = () => {
        setState({count: state.count - 1});
    }
  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={handleIncrement}>INC</button> 
        <button onClick={handleDecrement}>DECR</button>
    </div>
  )
}

export default Counter