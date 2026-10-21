import React, { useState } from 'react';

function Ssr() {
    const [showSteps, setShowSteps] = useState(false);

    return (
        <div className="space-y-5 p-5 text-white">

            <p>Rendering Strategies are different methods used to create
                and display a webpage in the browser.
            </p>
            <p>
                Server-Side Rendering (SSR) means the server creates
                the webpage's HTML before sending it to the browser.
            </p>

            <p className="mt-3">
                The browser receives ready-made HTML and can display
                the page content before the JavaScript makes it fully
                interactive.
            </p>


            {/* Easy example */}
            <section >
                <h2 className="mb-2 mt-4 text-xl font-semibold">
                    Easy Real-Life Example
                </h2>

                <p>
                    Imagine you order a ready-made pizza.
                </p>

                <ul className="mt-3 list-inside list-disc space-y-2">
                    <li>
                        <strong>Server:</strong> Prepares the pizza.
                    </li>
                    <li>
                        <strong>Browser:</strong> Receives the ready pizza.
                    </li>
                    <li>
                        <strong>Webpage:</strong> The content is already prepared
                        when it arrives.
                    </li>
                </ul>

                <p className="mt-3 text-gray-300">
                    This is just an analogy to help you remember the idea.
                </p>
            </section>

            {/* How SSR works */}
            <section className="mt-4">
                <h2 className="mb-3 text-xl font-semibold">
                    How Does SSR Work?
                </h2>

                <ol className="list-inside list-decimal space-y-3">
                    <li>
                        <strong>Browser sends a request:</strong> The user opens
                        a webpage.
                    </li>
                    <li>
                        <strong>Server prepares HTML:</strong> The server creates
                        the page content.
                    </li>
                    <li>
                        <strong>Server sends HTML:</strong> The prepared HTML
                        reaches the browser.
                    </li>
                    <li>
                        <strong>Browser displays the page:</strong> The user can
                        see the HTML content.
                    </li>
                    <li>
                        <strong>JavaScript loads:</strong> In a React SSR app,
                        JavaScript can then hydrate the page to make it interactive.
                    </li>
                </ol>

                <button
                    onClick={() => setShowSteps(!showSteps)}
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
                >
                    {showSteps ? 'Hide Flow' : 'Show SSR Flow'}
                </button>

                {showSteps && (
                    <div className="mt-4 space-y-2 text-center">
                        <div className="rounded bg-gray-800 p-3">
                            Browser requests a page
                        </div>
                        <div>↓</div>
                        <div className="rounded bg-gray-800 p-3">
                            Server creates HTML
                        </div>
                        <div>↓</div>
                        <div className="rounded bg-gray-800 p-3">
                            Browser receives HTML
                        </div>
                        <div>↓</div>
                        <div className="rounded bg-green-700 p-3">
                            Page content is displayed
                        </div>
                        <div>↓</div>
                        <div className="rounded bg-gray-800 p-3">
                            JavaScript makes React interactive
                        </div>
                    </div>
                )}
            </section>

            {/* Benefits */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-2 text-xl font-semibold">
                    Benefits of SSR
                </h2>

                <ul className="list-inside list-disc space-y-2">
                    <li>Can show page content sooner.</li>
                    <li>Can help search engines understand page content.</li>
                    <li>Useful for content-focused websites.</li>
                    <li>The server can prepare HTML using the required data.</li>
                </ul>
            </section>

            {/* Important note */}
            <section className="rounded-lg border border-yellow-600 bg-gray-900 p-4">
                <h2 className="mb-2 text-lg font-semibold">
                    Important Note
                </h2>

                <p>
                    SSR needs server-side rendering support. A normal React
                    app created with Vite usually uses Client-Side Rendering
                    by default. SSR can be set up with frameworks such as Next.js
                    or with a custom server.
                </p>
            </section>

            {/* Summary */}
            <section className="rounded-lg bg-gray-900 p-4">
                <h2 className="mb-2 text-xl font-semibold">
                    Remember in One Line
                </h2>

                <p className="font-semibold">
                    SSR = Server prepares the HTML first, then sends it to
                    the browser.
                </p>
            </section>
        </div>
    );
}

export default Ssr;
