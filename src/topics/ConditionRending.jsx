import React, { useState } from 'react'

function ConditionRending() {
    const [login, setlogin] = useState(false)
    return (
        <div className='text-white'>
            <p className='py-4'>Conditional rendering means displaying different UI elements based on a condition.</p>
            <div className='bg-gray-900 text-white'>
                {login ? (<h1>Welcome user</h1>) : (<h1>Please login</h1>)}
            <button className="block p-2 rounded bg-blue-600 text-white my-2 " onClick={()=>setlogin(!login)}>login</button>
            </div>
        </div>
    )
}

export default ConditionRending