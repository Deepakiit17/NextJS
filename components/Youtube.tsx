import React, { useState } from 'react'

interface IState{
    message: string
}

const Youtube: React.FC = () => {
    const [state, setState] = useState<IState>({message:'Welcome'});

    const handleGreet = (greet:string):void => {
        setState({message:greet})
    }
  return (
    <div>
        <h1>{state.message}</h1>
        <button onClick={() => handleGreet('Like')}>Like</button>
        <button onClick={() => handleGreet('Comment')}>Comment</button>
        <button onClick={() => handleGreet('Subscribe')}>Subscribe</button>
    </div>
  )
}

export default Youtube