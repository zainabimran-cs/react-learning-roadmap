import { useState } from "react";
function Prefetch() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="space-y-6 text-white">
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <p className="leading-7">
          Prefetch is a browser technique that downloads a resource
          that may be needed on a future page or later navigation.
          It helps prepare resources before the user needs them.
        </p>
      </section>

      {/* Why use prefetch */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Why Do We Use Prefetch?
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>To prepare resources for a future page.</li>
          <li>To make later navigation feel faster.</li>
          <li>To download resources when the browser has spare time.</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          How Does Prefetch Work?
        </h2>

        <ol className="list-decimal space-y-2 pl-6 leading-7">
          <li>The browser loads the current page.</li>
          <li>The page indicates a resource that may be needed later.</li>
          <li>The browser may download that resource when suitable.</li>
          <li>If the user needs it later, it may already be available in the cache.</li>
        </ol>
      </section>

      {/* Example */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Example
        </h2>

        <p className="mb-4 leading-7">
          Suppose a user is reading the Home page and may open the
          About page next. The browser can prefetch the About page
          resource in advance.
        </p>

        <div className="overflow-x-auto rounded-lg bg-gray-800 p-4">
          <pre className="whitespace-pre-wrap  text-sm">
            <code>{`<link
  rel="prefetch"
  href="/about.html"
  as="document"
/>`}</code>
          </pre>
        </div>

        <p className="mt-3 leading-7">
          <strong>rel="prefetch"</strong> tells the browser that
          this resource may be useful for a future navigation.
          The browser decides when or whether to download it.
        </p>
      </section>

      {/* Important points */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>Prefetch is mainly for resources needed in the future.</li>
          <li>The browser may delay or skip prefetching.</li>
          <li>It can use extra network data and cache space.</li>
          <li>It is different from preload, which prioritizes resources needed soon on the current page.</li>
        </ul>
      </section>
      {/* Live Example */}
      <section className="rounded-xl border bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Live Example: Prefetch
        </h2>

        <p className="mb-4 leading-7">
          Imagine you are on the Home page and may visit the About page next.
          The browser can download the About page in advance.
        </p>

        <button
          onClick={() => setShowAbout(!showAbout)}
          className="rounded-lg bg-blue-600 px-4 py-2"
        >
          {showAbout ? "Go Back to Home" : "Open About Page"}
        </button>

        {showAbout && (
          <div className="mt-4 rounded-lg bg-gray-800 p-4">
            <h3 className="text-lg font-bold">
              About Page
            </h3>
            <p className="mt-2">
              Welcome to the About page! This is the content the user
              may need on the next page.
            </p>
          </div>
        )}

        <p className="mt-4 text-sm text-gray-300">
          This is a simple navigation demo. To demonstrate real prefetching,
          the browser must be instructed to fetch a resource in advance.
        </p>
      </section>

      {/* Conclusion */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Conclusion
        </h2>

        <p className="leading-7">
          Prefetch prepares resources that may be needed on a future
          page, which can make the next navigation faster.
        </p>

        <div className="mt-4 rounded-lg bg-gray-800 p-4">
          <p className="font-semibold">
            Easy to Remember
          </p>
          <p className="mt-2 leading-7">
            Prefetch = Download a resource for possible future use.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Prefetch