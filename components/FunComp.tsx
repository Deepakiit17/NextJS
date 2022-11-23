import React, { useState } from 'react'

interface IState{
    name: String,
    title: String,
}
const FunComp:React.FC<{}> = () => {
    const[state, setState] = useState<IState>({name: 'Techinfo', title: 'Mern Stack'})
  return (
    <div>
        <h1>Values from state</h1>
        <h4>Name: {state.name}</h4>
        <h4>Title: {state.title}</h4>
    </div>
  )
}

export default FunComp