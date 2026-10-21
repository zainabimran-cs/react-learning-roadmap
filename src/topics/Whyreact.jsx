import { useState } from "react"

function Whyreact() {
    const[count, setCount] =useState(0)
    return (
        <div>
            <p className="mb-4 text-gray-300">
                React makes it easier to update UI when data changes.
            </p>
            <div>
                <div className="rounded-xl bg-gray-900 p-6 text-white">
                    <h2 className="mb-3 text-2xl font-bold">
                        Why React?
                    </h2>

                    <p className="mb-4 text-gray-300">
                        React makes it easier to update UI when data changes.
                    </p>

                    <div className="rounded-lg bg-gray-800 p-4">
                        <h3 className="mb-3 text-lg">Counter</h3>

                        <p className="mb-3">Count: {count}</p>

                        <button
                            className="rounded bg-blue-600 px-4 py-2"
                            onClick={() => setCount(count + 1)}
                        >
                            Increase Count
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Whyreact