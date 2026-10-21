
import React, { useState } from 'react';

function Environmentvariables() {
  const [showExample, setShowExample] = useState(false);

  // Read a public environment variable from Vite
  const appName = import.meta.env.VITE_APP_NAME;
  const appMode = import.meta.env.MODE;

  return (
    <div className="space-y-5 p-5 text-white">
      <p>
          Environment variables are values stored outside the main
          source code. They let us configure an application without
          changing the code for every environment.
        </p>

<section className="rounded-lg bg-gray-900 p-4">
  <h2 className="mb-2 text-xl font-semibold">
    Current Environment
  </h2>

  <p>App Name: {appName || "Not configured"}</p>
  <p>App Mode: {appMode}</p>

  <button
    className="mt-3 rounded bg-blue-600 px-4 py-2"
    onClick={() => setShowExample(!showExample)}
  >
    {showExample ? "Hide Example" : "Show Example"}
  </button>

  {showExample && (
    <p className="mt-3">
      This example uses environment variables in React with Vite.
    </p>
  )}
</section>

      {/* Why we use them */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Why Do We Use Them?
        </h2>

        <ul className="list-inside list-disc space-y-2">
          <li>To store configuration values.</li>
          <li>To use different settings for development and production.</li>
          <li>To keep URLs and app settings outside source code.</li>
          <li>To make application configuration easier to manage.</li>
        </ul>
      </section>

      {/* Vite setup */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          How to Use Them in Vite
        </h2>

        <p className="mb-3">
          Step 1: Create a file named .env in the project root,
          where package.json is located.
        </p>

        <div className="rounded bg-gray-800 p-3">
          <code>VITE_APP_NAME=My React App</code>
        </div>

        <p className="my-3">
          Step 2: Read the variable in your React code.
        </p>

        <div className="rounded bg-gray-800 p-3">
          <code>import.meta.env.VITE_APP_NAME</code>
        </div>

        <p className="mt-3">
          Step 3: Restart the Vite development server after changing
          your .env file.
        </p>
      </section>
    </div>
  );
}

export default Environmentvariables;
