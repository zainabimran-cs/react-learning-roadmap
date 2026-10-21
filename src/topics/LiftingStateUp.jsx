import { useState } from "react"

function Child1({count, increase}){
return (
<div>
    <p>This is Child1</p>
    <p className="font-bold">{count}</p>
    <button onClick={increase} className="block p-2 rounded bg-blue-600 text-white my-2 ">Add 1</button>
</div>
)}

function Child2({count}){
    return(
        <div>This is Child2: {count}</div>
    )
}

function LiftingStateUp() {
    const [count, setCount] = useState(0)
    return (
        <div className="text-white">
            <p className="mb-4">Lifting State Up means moving state from a child component to their nearest common
                parent component so that multiple child components can share the same state.</p>

<p className="font-bold">Example:</p>
                <Child1  count={count}
                increase={()=> setCount(count+1)}/>

                <Child2 count= {count}/>
        </div>
    )
}

export default LiftingStateUp