
import { useState } from "react";

function PrivateRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="space-y-5 p-5 text-white">
      <section className="rounded-lg bg-gray-800 p-4">
        <p>
          Private Routes are routes that allow only authorized users
          to access certain pages. For example, a dashboard page may
          require the user to log in first.
        </p>
      </section>

      {/* Why */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">
          Why Do We Use Private Routes?
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To restrict access to certain pages.</li>
          <li>To check whether a user is logged in.</li>
          <li>To protect pages such as a user dashboard.</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>The user tries to open a private page.</li>
          <li>The application checks the user's login status.</li>
          <li>If logged in, the private page is displayed.</li>
          <li>If not logged in, the user should be redirected to login.</li>
        </ul>
      </section>

      {/* Live Example */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-3 text-lg font-bold">
          Live Example: Private Dashboard
        </h2>

        <p className="mb-4 text-gray-300">
          Click Login to access the private dashboard. Click Logout
          to remove access.
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-sm ${
              isLoggedIn
                ? "bg-green-900 text-green-300"
                : "bg-red-900 text-red-300"
            }`}
          >
            {isLoggedIn ? "Logged In" : "Not Logged In"}
          </span>

          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="rounded bg-red-600 px-4 py-2 hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>

        {isLoggedIn ? (
          <div className="rounded-lg bg-gray-900 p-4">
            <h3 className="mb-2 text-lg font-bold">
              Private Dashboard
            </h3>
            <p>Welcome! You can now view this private page.</p>
          </div>
        ) : (
          <div className="rounded-lg  bg-gray-900 p-4">
            <h3 className="mb-2 text-lg font-bold">
              Access Denied
            </h3>
            <p>Please log in first to view the private dashboard.</p>
          </div>
        )}

        <p className="mt-3 text-sm text-gray-400">
          Note: This is a login-state demonstration. It does not
          implement actual authentication or URL redirection.
        </p>
      </section>

      {/* Code */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Code Example</h2>
        <p className="mb-3">
          A simple condition decides which component to display.
        </p>
        <pre className="overflow-x-auto rounded bg-gray-900 p-3 text-sm">
{`if (isLoggedIn) {
  return <Dashboard />;
} else {
  return <Login />;
}`}
        </pre>
      </section>

      {/* Important terms */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Important Terms</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Authentication:</b> Checking who the user is.</li>
          <li><b>Authorized User:</b> A user allowed to access a page.</li>
          <li><b>Redirect:</b> Sending the user to another page.</li>
        </ul>
      </section>

      {/* Security */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Important Point</h2>
        <p>
          Hiding a page in React is not enough to secure sensitive data.
          The server must also check the user's authentication and permissions.
        </p>
      </section>

      {/* Conclusion */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          Private Routes control access to pages that require a user
          to be logged in or authorized.
        </p>
      </section>
    </div>
  );
}

export default PrivateRoutes;
