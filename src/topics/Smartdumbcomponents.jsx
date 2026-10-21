import  { useState } from 'react';

// Dumb Component: Displays UI using props
function DumbComponent({ name, count, onIncrease }) {
    return (
        <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="text-lg font-bold text-white">
                Dumb Component
            </h3>

            <p className="mt-2 text-white">
                Hello, {name}!
            </p>

            <p className="mt-2 text-white">
                Count: {count}
            </p>

            <button
                onClick={onIncrease}
                className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
                Increase Count
            </button>
        </div>
    );
}

// Smart Component: Handles state and logic
function SmartComponent() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(count + 1);
    }

    return (
        <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-3 text-lg font-bold text-white">
                Smart Component
            </h3>

            <p className="mb-3 text-white">
                I manage the count state and pass data to the Dumb Component.
            </p>

            <DumbComponent
                name="Zainab"
                count={count}
                onIncrease={handleIncrease}
            />
        </div>
    );
}

function Smartdumbcomponents() {
    return (
        <div className="space-y-3 p-5 text-white">
            <p>
                A Smart Component manages data, state, and logic.
                A Dumb Component mainly displays UI using the data
                received through props.
            </p>


            {/* Smart */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-2 text-lg font-bold">
                    1. Smart Component
                </h2>

                <ul className="list-inside list-disc space-y-2">
                    <li>Manages state and application logic.</li>
                    <li>Can handle events and data fetching.</li>
                    <li>Passes data and functions to child components.</li>
                </ul>
            </section>

            {/* Dumb */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-2 text-lg font-bold">
                    2. Dumb Component
                </h2>

                <ul className="list-inside list-disc space-y-2">
                    <li>Mainly displays the UI.</li>
                    <li>Receives data through props.</li>
                    <li>Can call a function received through props.</li>
                </ul>
            </section>

            {/* Comparison */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-3 text-xl font-bold">
                    Main Difference
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="border border-gray-700 p-3">Smart</th>
                                <th className="border border-gray-700 p-3">Dumb</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-700 p-3">
                                    Handles logic
                                </td>
                                <td className="border border-gray-700 p-3">
                                    Mainly displays UI
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 p-3">
                                    Manages state in this example
                                </td>
                                <td className="border border-gray-700 p-3">
                                    Receives count through props
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 p-3">
                                    Passes data and functions
                                </td>
                                <td className="border border-gray-700 p-3">
                                    Uses the received data and functions
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Working example */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-3 text-xl font-bold">
                    Working Example
                </h2>

                <p className="mb-4">
                    Click the button. The Smart Component updates the state,
                    and the Dumb Component displays the new count.
                </p>

                <SmartComponent />
            </section>

            {/* Summary */}
            <section className="rounded-lg  p-4">
                <h2 className="mb-2 text-lg font-bold">
                    Easy Way to Remember
                </h2>

                <p className="font-bold">
                    Smart = Thinks and manages logic.
                </p>

                <p className="mt-2 font-bold">
                    Dumb = Mainly displays the UI.
                </p>
            </section>
        </div>
    );
}

export default Smartdumbcomponents;