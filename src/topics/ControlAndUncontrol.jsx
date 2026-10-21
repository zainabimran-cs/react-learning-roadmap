import { useRef, useState } from "react"

function Control() {
    const [name, setName] = useState("")
    return (
        <div>
            <label>Enter Name:</label>
            <input type="text" value={name} onChange={(n)=> setName(n.target.value)} className="bg-white text-black mx-4"/>
            <p className="py-2">Name: {name}</p>
        </div>
    )
}

function Uncontrol(){
    const nameRef = useRef()
    const [popup, setPopup] = useState({ show: false, message: '' })

    function handleSubmit() {
        setPopup({ show: true, message: nameRef.current.value })
    }

    function closePopup() {
        setPopup({ show: false, message: '' })
    }

    return(
        <div>
            <label>Enter Name:</label>
            <input ref={nameRef} className="bg-white text-black mx-4" />
            <button onClick={handleSubmit} className="block p-2 rounded bg-blue-600 text-white my-2 ">Submit</button>

            {/* Popup Modal */}
            {popup.show && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                    onClick={closePopup}
                >
                    <div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center space-y-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-lg font-bold text-white">Submitted Name</h3>
                        <p className="text-white">{popup.message || "No name entered"}</p>
                        <button
                            onClick={closePopup}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

function ControlAndUncontrol() {
    return (
        <div className='text-white'>
            <p className='font-bold'>Controlled Component</p>
            <p>A Controlled Component is a form component whose input value is controlled by React State.
                In a controlled component, the input value is stored in React State and updated whenever the
                user types.</p>
            <p className='py-2'>Controlled components are useful when React needs to know and control the input value.
            </p>
            <p>Commonly use for:</p>
            <ul className='list-disc ml-4'>
                <li>Form validation</li>
                <li>Checking input values</li>
                <li>Showing data somewhere else</li>
                <li>Enabling/disabling buttons</li>
                <li>Checking whether an input is empty</li>
                <li> Handling form submission </li>
            </ul>
            <p className="font-bold">Example:</p>
            <Control/>
            <p>React controls the input value using useState. When the user types, the state updates and the new value is displayed on the screen.</p>

            <p className='font-bold pt-4'>Uncontrolled Component</p>
            <p>
                An Uncontrolled Component is a form component whose input value is managed by the DOM
                instead of React State.
            </p>
            <p>Uncontrolled components can be useful when you have a simple form and don't need React State
                to track every change. </p>
            <p className="font-bold">Example:</p>
            <Uncontrol/>
            <p>The DOM manages the input value. React reads the value using useRef when the user clicks the Submit button.</p>
        </div>
    )
}

export default ControlAndUncontrol