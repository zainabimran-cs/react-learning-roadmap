
import React, { useState } from 'react';

function Csr() {
  const [showSteps, setShowSteps] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="space-y-3 p-5 text-white">
     <p>
          Client-Side Rendering (CSR) means the browser uses
          JavaScript to create and display the webpage content.
        </p>

        <p className="mt-3">
          The server usually sends the initial HTML file and
          JavaScript files. The browser runs the JavaScript to
          render the page content.
        </p>
  

      {/* Easy example */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Easy Real-Life Example
        </h2>

        <p>
          Imagine you receive ingredients and prepare a meal yourself.
        </p>

        <ul className="mt-3 list-inside list-disc space-y-2">
          <li>
            <strong>Server:</strong> Sends the basic files.
          </li>
          <li>
            <strong>Browser:</strong> Uses JavaScript to build the page.
          </li>
          <li>
            <strong>Webpage:</strong> The content appears after the
            browser runs the required code.
          </li>
        </ul>
      </section>

      {/* How CSR works */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-3 text-xl font-semibold">
          How Does CSR Work?
        </h2>

        <ol className="list-inside list-decimal space-y-3">
          <li>
            <strong>Browser sends a request:</strong> The user opens
            the website.
          </li>
          <li>
            <strong>Server sends files:</strong> The browser receives
            the initial HTML and JavaScript files.
          </li>
          <li>
            <strong>JavaScript runs:</strong> The browser executes
            the JavaScript code.
          </li>
          <li>
            <strong>React renders content:</strong> React creates
            and displays the page content.
          </li>
          <li>
            <strong>User interacts:</strong> The user can click
            buttons, fill forms, and use the page.
          </li>
        </ol>

        <button
          onClick={() => setShowSteps(!showSteps)}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
        >
          {showSteps ? 'Hide Flow' : 'Show CSR Flow'}
        </button>

        {showSteps && (
          <div className="mt-4 space-y-2 text-center">
            <div className="rounded bg-gray-800 p-3">
              Browser requests webpage
            </div>
            <div>↓</div>
            <div className="rounded bg-gray-800 p-3">
              Server sends HTML and JavaScript
            </div>
            <div>↓</div>
            <div className="rounded bg-gray-800 p-3">
              Browser runs JavaScript
            </div>
            <div>↓</div>
            <div className="rounded bg-green-700 p-3">
              React renders the webpage
            </div>
          </div>
        )}
      </section>

      {/* Interactive example */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Working Example
        </h2>

        <p className="mb-4">
          Click the button to render content on the browser using React state.
        </p>

        <button
          onClick={() => setShowContent(!showContent)}
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
        >
          {showContent ? 'Hide Content' : 'Render Content'}
        </button>

        {showContent && (
          <div className="mt-4 rounded-lgp-4">
            <h3 className="font-bold">
              Content Rendered!
            </h3>
            <p className="mt-2">
              React updated the page in the browser after the button
              was clicked.
            </p>
          </div>
        )}
      </section>

      {/* Benefits */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Benefits of CSR
        </h2>

        <ul className="list-inside list-disc space-y-2">
          <li>Good for interactive web applications.</li>
          <li>Can update parts of a page without a full page reload.</li>
          <li>Works well for dashboards and web applications.</li>
          <li>React can update the UI when state changes.</li>
        </ul>
      </section>

      {/* Limitations */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Limitations of CSR
        </h2>

        <ul className="list-inside list-disc space-y-2">
          <li>The first display may be slower if JavaScript takes time to load.</li>
          <li>Search engines may need to execute JavaScript to see the content.</li>
          <li>The browser needs to download and run JavaScript.</li>
        </ul>
      </section>

      {/* Summary */}
      <section >
        <h2 className="mb-2 text-xl font-semibold">
          Remember in One Line
        </h2>

        <p className="font-semibold">
          CSR = Browser uses JavaScript to render the webpage content.
        </p>
      </section>
    </div>
  );
}

export default Csr;
