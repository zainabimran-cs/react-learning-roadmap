
import { useState } from "react";

function PublicRoutes() {
  const [currentPage, setCurrentPage] = useState("Home");

  const pages = {
    Home: "Welcome to our website!",
    About: "This page tells you about our website.",
    Contact: "Contact us at example@email.com.",
    Login: "This is a public login page.",
    Register: "Create an account using the registration page.",
  };

  return (
    <div className="space-y-5 p-5 text-white">
      <section className="rounded-lg bg-gray-800 p-4">
        <p>
          Public Routes are pages that users can access without
          logging in. Anyone can open these pages.
        </p>
      </section>

      {/* Why */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">
          Why Do We Use Public Routes?
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To allow everyone to access certain pages.</li>
          <li>To display public information.</li>
          <li>To let users visit pages without logging in.</li>
        </ul>
      </section>

      {/* How */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>The user opens a public page.</li>
          <li>The application displays the page.</li>
          <li>The user does not need to log in to access it.</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Examples</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Home Page</li>
          <li>About Page</li>
          <li>Contact Page</li>
          <li>Login Page</li>
          <li>Registration Page</li>
        </ul>
      </section>

      {/* Live Example */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-3 text-lg font-bold">
          Live Example: Public Pages
        </h2>
        <p className="mb-3 text-gray-300">
          Select any page. You can view every page without logging in.
        </p>

        <div className="flex flex-wrap gap-2">
          {Object.keys(pages).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded px-3 py-2 ${
                currentPage === page
                  ? "bg-blue-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-gray-900 p-4">
          <p className="mb-2 text-sm ">
            Public Page: {currentPage}
          </p>
          <h3 className="text-lg font-semibold">
            {pages[currentPage]}
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            No login required to view this example.
          </p>
        </div>

        <p className="mt-3 text-sm text-yellow-300">
          Note: This is an interactive demonstration. It changes the
          displayed content but does not change the browser URL.
        </p>
      </section>

      {/* Simple Code Example */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">React Router Example</h2>
        <p className="mb-3">
          This route displays the About component without requiring
          a login check in the route definition.
        </p>
        <pre className="overflow-x-auto rounded bg-gray-900 p-3 text-sm">
{`<Routes>
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>`}
        </pre>
      </section>

      {/* Important Point */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Important Point</h2>
        <p>
          Public Routes do not require login, but the application
          should still protect private information and restricted actions.
        </p>
      </section>

      {/* Conclusion */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          Public Routes allow users to access pages without logging in.
          They are useful for pages that everyone should be able to visit.
        </p>
      </section>
    </div>
  );
}

export default PublicRoutes;
