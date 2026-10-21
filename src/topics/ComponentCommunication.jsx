import React, { useState } from 'react'

function Child(props) {
    return (
        <div className="my-2">
            <p>This is Parent to Child Communication by passing props</p>
            <p>My name is {props.name}</p>

            <button
                className="bg-blue-600 px-3 py-1 rounded mt-2"
                onClick={() => props.sendMessage("Hello Parent")}
            >
                send message to Parent
            </button>
        </div>
    )
}

function ComponentCommunication() {
    const [popup, setPopup] = useState({ show: false, message: '' })

    function handleMessage(message) {
        setPopup({ show: true, message })
    }

    function closePopup() {
        setPopup({ show: false, message: '' })
    }

    return (
        <div className="text-white">
            <p className="font-bold ">Component Communication</p>
            <p className="pb-2">Component Communication means sharing data or information between React
                components.</p>
            <p className="font-bold">Parent-to-Child communication</p>
            <p className="pb-2">Parent-to-Child communication means a parent component sends data to its child component
                using props. </p>
            <p className="font-bold">Child-to-parent communication</p>
            <p className="pb-2">Child-to-parent communication is done by passing a function from the parent to the child as a
                prop. The child calls the function to send data or trigger an action in the parent. </p>

            <div>
                <p className='font-bold'>Example:</p>
                <Child name="Zainab" sendMessage={handleMessage} />
            </div>

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
                        <h3 className="text-lg font-bold">Message from Child</h3>
                        <p>{popup.message}</p>
                        <button
                            onClick={closePopup}
                            className="bg-blue-600 px-4 py-2 rounded"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ComponentCommunication