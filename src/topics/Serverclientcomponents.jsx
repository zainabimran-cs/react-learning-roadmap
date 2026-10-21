
import React, { useState } from 'react';

function Serverclientcomponents() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-2 p-5 text-white">
            <p>
                Server Components render on the server. Client Components
                can handle user interactions, state, and browser features.
            </p>


            {/* Server Components */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-2 text-lg font-bold">
                    1. Server Components
                </h2>

                <ul className="list-inside list-disc space-y-2">
                    <li>Render on the server.</li>
                    <li>Can fetch data on the server.</li>
                    <li>Good for displaying content.</li>
                    <li>Cannot use client-side hooks like useState.</li>
                </ul>

                <div className="mt-3 rounded bg-gray-800 p-3">
                    <p className="font-semibold">Example:</p>
                    <p className='mb-4'>Displaying a blog article or product details.</p>
                     <strong >Example:</strong>
                    <p>A Server Component displays product details, while a Client Component
                    allows the user to click an “Add to Cart” button. </p>
                </div>
            </section>

            {/* Client Components */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-2 text-lg font-bold">
                    2. Client Components
                </h2>

                <ul className="list-inside list-disc space-y-2">
                    <li>Handle clicks and user interactions.</li>
                    <li>Can use useState and useEffect.</li>
                    <li>Can respond to user input.</li>
                    <li>Useful for interactive UI.</li>
                </ul>

                <div className="mt-3 rounded bg-gray-800 p-3">
                    <p className="font-semibold">Example:</p>
                    <p>Buttons, counters, forms, and dropdowns.</p>
                </div>
            </section>

            {/* Interactive example */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-2 text-lg font-bold">
                    Client Component Example
                </h2>

                <p className="mb-3">
                    Click the button to update the count using useState.
                </p>

                <p className="mb-3 text-2xl font-bold">
                    Count: {count}
                </p>

                <button
                    onClick={() => setCount(count + 1)}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
                >
                    Increase Count
                </button>
            </section>

            {/* Difference */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-3 text-lg font-bold">
                    Main Difference
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="border border-gray-700 p-3">Server</th>
                                <th className="border border-gray-700 p-3">Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-700 p-3">
                                    Runs on the server
                                </td>
                                <td className="border border-gray-700 p-3">
                                    Handles browser interactions
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 p-3">
                                    Can fetch server data
                                </td>
                                <td className="border border-gray-700 p-3">
                                    Can use state and effects
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-700 p-3">
                                    No useState
                                </td>
                                <td className="border border-gray-700 p-3">
                                    Can use useState
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Important note */}
            <section className="rounded-lg border border-yellow-600 bg-gray-900 p-4">
                <h2 className="mb-2 font-bold">
                    Important Note
                </h2>

                <p>
                    This file demonstrates client-side interactivity. Actual
                    Server Components require a framework or setup that supports
                    React Server Components, such as Next.js. A normal Vite
                    React app does not automatically provide Server Components.
                </p>
            </section>

            {/* Summary */}
            <section className=" p-4">
                <h2 className="mb-2 font-bold">
                    Remember
                </h2>
                <p className=" mt-2 font-semibold">Component architecture divides an application into manageable parts. Smart and Dumb
                    Components describe the roles of components, while Server and Client Components describe
                    where components run and what features they support.</p>
                <p className=" mt-2 font-semibold">
                    Server Component = Server-side work and rendering.
                </p>

                <p className="mt-2 font-semibold">
                    Client Component = Interactivity like clicks and state.
                </p>
            </section>
        </div>
    );
}

export default Serverclientcomponents;