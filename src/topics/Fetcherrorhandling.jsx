import { useState } from 'react'

function Fetcherrorhandling() {
    const [message, setMessage] = useState('')

    // Handle API request
    const checkError = async (status) => {
        setMessage('')

        try {
            const response = await fetch(
                `https://httpbin.org/status/${status}`
            )

            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error('400: Bad Request')
                }

                if (response.status === 500) {
                    throw new Error('500: Internal Server Error')
                }

                throw new Error(`HTTP Error: ${response.status}`)
            }

            setMessage('Request successful!')
        } catch (error) {
            setMessage(error.message)
        }
    }

    return (
        <div className="text-white space-y-4">
            <p>
                Fetch API is used to send requests to a server and receive
                responses. Sometimes the server returns an error.
                We use error handling to manage these errors.
            </p>

            <div className="bg-gray-800 p-3 rounded space-y-2">
                <h3 className="font-bold">
                    1. What is a 400 Error?
                </h3>
                <p>
                    A 400 Bad Request error means the server cannot process
                    the request because the request is invalid.
                </p>
                <p>Example: Sending incorrect or missing data.</p>
            </div>

            <div className="bg-gray-800 p-3 rounded space-y-2">
                <h3 className="font-bold">
                    2. What is a 500 Error?
                </h3>
                <p>
                    A 500 Internal Server Error means something went wrong
                    inside the server while processing the request.
                </p>
                <p>Example: An unexpected server problem.</p>
            </div>

            <h3 className="text-lg font-bold">Working Example</h3>

            <p>
                Click a button to request a response with that HTTP status.
            </p>

            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => checkError(400)}
                    className="bg-yellow-600 p-2 rounded"
                >
                    Test 400 Error
                </button>

                <button
                    onClick={() => checkError(500)}
                    className="bg-red-600 p-2 rounded"
                >
                    Test 500 Error
                </button>

                <button
                    onClick={() => checkError(200)}
                    className="bg-green-600 p-2 rounded"
                >
                    Test Success
                </button>
            </div>

            {message && (
                <div className="bg-gray-800 p-3 rounded">
                    <p className="font-bold">Result:</p>
                    <p>{message}</p>
                </div>
            )}

            <div className="border border-gray-600 p-3 rounded space-y-2">
                <h3 className="font-bold">Important Concept</h3>
                <p>
                    Fetch does not automatically throw an error for HTTP
                    status codes like 400 or 500. We check response.ok and
                    handle the error ourselves.
                </p>
            </div>
        </div>
    )
}

export default Fetcherrorhandling