function Preflight() {
  return (
    <div className="space-y-6 text-white">

      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
       
        <p className="leading-7">
          A preflight request is an automatic HTTP request sent by
          the browser before certain cross-origin requests. It checks
          whether the server allows the actual request.
        </p>
      </section>

      {/* Why */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Why Do We Use Preflight?
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>To check whether a cross-origin request is allowed.</li>
          <li>To check which HTTP methods the server permits.</li>
          <li>To check which request headers are allowed.</li>
          <li>To follow the browser's Cross-Origin Resource Sharing (CORS) rules.</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          How Does Preflight Work?
        </h2>

        <ol className="list-decimal space-y-2 pl-6 leading-7">
          <li>A webpage tries to send a cross-origin request.</li>
          <li>If the request needs a preflight, the browser sends an OPTIONS request first.</li>
          <li>The server responds with its CORS permissions.</li>
          <li>If the required permissions are allowed, the browser can send the actual request.</li>
          <li>If the check fails, the browser blocks the actual request.</li>
        </ol>
      </section>

      {/* Example */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Example
        </h2>

        <p className="mb-4 leading-7">
          Suppose a React app sends a PUT request to an API on a
          different origin. The browser may send an OPTIONS request
          first to check whether PUT is allowed.
        </p>

        <div className="overflow-x-auto rounded-lg bg-gray-800 p-4">
          <pre className="whitespace-pre-wrap text-sm">
            <code>{`OPTIONS /users/1 HTTP/1.1
Origin: https://myapp.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: content-type`}</code>
          </pre>
        </div>

        <p className="mt-3 leading-7">
          <strong>OPTIONS</strong> asks the server about permissions.
          <strong> Access-Control-Request-Method: PUT</strong> tells
          the server which method the browser wants to use.
        </p>
      </section>

      {/* Important terms */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-4 text-xl font-semibold">
          Important Terms
        </h2>

        <div className="space-y-3">
          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-1 font-semibold">CORS</h3>
            <p>
              A browser security mechanism that controls requests
              between different origins.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-1 font-semibold">OPTIONS</h3>
            <p>
              An HTTP method used by a preflight request to ask
              about the server's permissions.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-1 font-semibold">Origin</h3>
            <p>
              The combination of a URL's scheme, hostname, and port.
            </p>
          </div>
        </div>
      </section>

      {/* Important points */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>Preflight is related to CORS, not resource loading speed.</li>
          <li>It uses the HTTP OPTIONS method.</li>
          <li>Not every cross-origin request needs a preflight.</li>
          <li>The browser handles the preflight automatically when required.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="rounded-xl border border-gray-700 bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Conclusion
        </h2>

        <p className="leading-7">
          A preflight request checks whether the server allows certain
          cross-origin requests before the browser sends the actual request.
        </p>

        <div className="mt-4 rounded-lg bg-gray-800 p-4">
          <p className="font-semibold">
            Easy to Remember
          </p>
          <p className="mt-2 leading-7">
            Preflight = Check permission before sending the actual request.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Preflight;
