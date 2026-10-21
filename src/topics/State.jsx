import { useState } from 'react'

function State() {
    const[count, setCount] = useState(0)
    return (
        <div className='text-white'>
            <p>State is a component's own data that is managed inside the component. It can change over time,
                and when the state changes, React re-renders the component to update the UI. </p>

                <div className=' flex gap-3 justify-center items-center my-4'>
                    <button className="block p-2 rounded bg-blue-600 text-white my-2" 
                    onClick={()=>(setCount(count+1))}>Increment</button>
                    <h1>{count}</h1>
                    <button className="block p-2 rounded bg-blue-600 text-white my-2"
                    onClick={()=>(setCount(count+1))}>Decrement</button>
                </div>
        </div>
    )
}

export default State