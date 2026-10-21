import { useState } from "react"

function Stateless(props) {
    return (
        <div className="my-2">
            <p>This is stateless component</p>
            <p>My name is {props.name}</p>

        </div>
    )
}
function Stateful() {
    const [count, setCount] = useState(0)
    return (
        <div className="mb-2">
            <p>This is Stateful Component</p>
            <p className="font-bold">count : {count}</p>
            <button onClick={() => setCount(count + 1)} className="block p-2 rounded bg-blue-600 text-white my-2">Increment</button>
        </div>
    )
}

function StatelessvsStatefull() {
    return (
        <div className="text-white">
            <div className="py-2">
                <p className="font-bold">StateLess Component</p>
                <p>A stateless component is a component that does not have its own
                    state and mainly displays data using props.</p>
            </div>
            <div className="pb-2">
                <p className="font-bold">StateFull Component</p>
                <p>A stateful component is a component that has its own state and can
                    update that state.</p>
            </div>
            <div>
                <Stateless name="Zainab" />
                <Stateful />
            </div>

        </div>
    )
}

export default StatelessvsStatefull