function PreloadPrefetchPreflight() {
  return (
    <div className="space-y-6 text-white">

     

      {/* Definition */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          What Are They?
        </h2>

        <p className="mb-3 leading-7">
          <strong>Preload:</strong> Tells the browser to download an
          important resource early because the current page needs it soon.
        </p>

        <p className="mb-3 leading-7">
          <strong>Prefetch:</strong> Tells the browser that a resource
          may be needed on a future page or later navigation.
        </p>

        <p className="leading-7">
          <strong>Preflight:</strong> A browser request that checks
          whether the server allows certain cross-origin requests.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">
          Key Differences
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-3">Feature</th>
                <th className="border border-gray-700 p-3">Preload</th>
                <th className="border border-gray-700 p-3">Prefetch</th>
                <th className="border border-gray-700 p-3">Preflight</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-700 p-3">Purpose</td>
                <td className="border border-gray-700 p-3">Load important resources early</td>
                <td className="border border-gray-700 p-3">Prepare future resources</td>
                <td className="border border-gray-700 p-3">Check request permissions</td>
              </tr>

              <tr>
                <td className="border border-gray-700 p-3">Used For</td>
                <td className="border border-gray-700 p-3">Current page</td>
                <td className="border border-gray-700 p-3">Possible future page</td>
                <td className="border border-gray-700 p-3">Cross-origin HTTP requests</td>
              </tr>

              <tr>
                <td className="border border-gray-700 p-3">How</td>
                <td className="border border-gray-700 p-3">HTML preload hint</td>
                <td className="border border-gray-700 p-3">HTML prefetch hint</td>
                <td className="border border-gray-700 p-3">HTTP OPTIONS request</td>
              </tr>

              <tr>
                <td className="border border-gray-700 p-3">Example</td>
                <td className="border border-gray-700 p-3">Important font</td>
                <td className="border border-gray-700 p-3">Next page resource</td>
                <td className="border border-gray-700 p-3">Check if PUT is allowed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How they work */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">
          How Do They Work?
        </h2>

        <div className="space-y-4">

          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-2 font-semibold">
              1. Preload
            </h3>
            <p className="leading-7">
              The browser finds an important resource and starts
              downloading it early for the current page.
            </p>
            <p className="mt-2 text-sm">
              Example: Download a font before the page needs it.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-2 font-semibold">
              2. Prefetch
            </h3>
            <p className="leading-7">
              The browser may download a resource in advance for
              possible future use.
            </p>
            <p className="mt-2 text-sm">
              Example: Prepare a resource for the About page.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-2 font-semibold">
              3. Preflight
            </h3>
            <p className="leading-7">
              The browser sends an OPTIONS request to check whether
              the server permits a certain cross-origin request.
            </p>
            <p className="mt-2 text-sm">
              Example: Check whether a PUT request is allowed.
            </p>
          </div>

        </div>
      </section>

      {/* Code Examples */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">
          Simple Code Examples
        </h2>

        <h3 className="mb-2 font-semibold">
          Preload
        </h3>
        <pre className="mb-4 overflow-x-auto whitespace-pre-wrap rounded-lg bg-gray-800 p-4 text-sm">
          <code>{`<link
  rel="preload"
  href="/fonts/my-font.woff2"
  as="font"
  crossorigin
/>`}</code>
        </pre>

        <h3 className="mb-2 font-semibold">
          Prefetch
        </h3>
        <pre className="mb-4 overflow-x-auto whitespace-pre-wrap  rounded-lg bg-gray-800 p-4 text-sm">
          <code>{`<link
  rel="prefetch"
  href="/about.html"
  as="document"
/>`}</code>
        </pre>

        <h3 className="mb-2 font-semibold">
          Preflight
        </h3>
        <pre className="overflow-x-auto whitespace-pre-wrap  rounded-lg bg-gray-800 p-4 text-sm">
          <code>{`OPTIONS /users/1 HTTP/1.1
Origin: https://myapp.com
Access-Control-Request-Method: PUT`}</code>
        </pre>

        <p className="mt-3 leading-7">
          The first two are HTML resource hints. The third shows
          the type of HTTP request a browser may send automatically.
        </p>
      </section>

      {/* Conclusion */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Conclusion
        </h2>

        <p className="leading-7">
          Preload focuses on important resources needed soon.
          Prefetch prepares resources for possible future use.
          Preflight checks permissions before certain cross-origin requests.
        </p>

        <div className="mt-4 space-y-2 rounded-lg bg-gray-800 p-4">
          <p><strong>Preload:</strong> Need it soon.</p>
          <p><strong>Prefetch:</strong> May need it later.</p>
          <p><strong>Preflight:</strong> Check permission first.</p>
        </div>
      </section>

    </div>
  );
}

export default PreloadPrefetchPreflight;
