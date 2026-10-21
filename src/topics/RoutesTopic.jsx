
import { useState } from "react";

function RoutesTopic() {
  const [currentPage, setCurrentPage] = useState("Home");

  const pages = {
    Home: "Welcome to the Home Page!",
    About: "This is the About Page.",
    Contact: "This is the Contact Page.",
  };

  return (
    <div className="space-y-5 p-5 text-white">
      {/* Definition */}
      <section className="rounded-lg bg-gray-800 p-4">
       
        <p>
          Routes are used to decide which component should be displayed
          for a specific URL in a React application.
        </p>
      </section>

      {/* Why Routes */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">
          Why Do We Use Routes?
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To connect URLs with components.</li>
          <li>To display different pages.</li>
          <li>To organize navigation in a React application.</li>
        </ul>
      </section>

      {/* How Routes Work */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>We define a URL path.</li>
          <li>We connect that path to a component.</li>
          <li>When the URL matches, the related component is displayed.</li>
        </ul>
      </section>

      {/* Live Example */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-bold">
          Live Example
        </h2>
        <p className="mb-3 text-gray-300">
          Click the buttons to see how different pages display
          different content.
        </p>

        <div className="flex flex-wrap gap-2">
          {Object.keys(pages).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded px-4 py-2 ${
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
          <p className="text-sm text-gray-400">
            Selected Page: {currentPage}
          </p>
          <h3 className="mt-2 text-lg font-semibold">
            {pages[currentPage]}
          </h3>
        </div>

        <p className="mt-3 text-sm text-yellow-300">
          Note: This is an interactive demonstration. It changes the
          displayed content but does not change the browser URL.
        </p>
      </section>

      {/* Code Example */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">
          React Router Code Example
        </h2>
        <p className="mb-3">
          The Route component connects a URL path with the component
          that should be displayed.
        </p>

        <pre className="overflow-x-auto rounded bg-gray-900 p-3 text-sm">
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>`}
        </pre>
      </section>

      {/* Important Terms */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Important Terms</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <b>Path:</b> The URL used to identify a page.
          </li>
          <li>
            <b>Element:</b> The component displayed for that path.
          </li>
          <li>
            <b>Route:</b> Connects a path to a component.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          Routes help React Router display the correct component
          for a particular URL.
        </p>
      </section>
    </div>
  );
}

export default RoutesTopic;
