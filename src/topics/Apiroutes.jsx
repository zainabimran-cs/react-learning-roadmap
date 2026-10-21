
function Apiroutes() {
  return (
    <div className="text-white space-y-5">

      {/* API Definition */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">What is an API?</h2>

        <p>
          API stands for Application Programming Interface. It allows two
          applications to communicate and exchange data.
        </p>

        <p className="mt-2 text-gray-300">
          Example: A weather app uses an API to get weather information
          from a server.
        </p>
      </section>

      {/* API Routes Definition */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">What are API Routes?</h2>

        <p>
          API Routes allow us to create backend endpoints inside frameworks
          like Next.js. These endpoints receive requests, process data,
          and send responses.
        </p>

        <p className="mt-2 text-gray-300">
          Example: /api/users can handle requests for users' data.
        </p>
      </section>

      {/* How API Routes Work */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">
          How API Routes Work
        </h2>

        <ol className="list-decimal pl-5 space-y-2">
          <li>The frontend sends a request to an API endpoint.</li>
          <li>The API Route receives the request.</li>
          <li>The backend processes the request and may access a database.</li>
          <li>The API Route sends a response back to the frontend.</li>
          <li>The frontend displays the received data.</li>
        </ol>
      </section>

      {/* Example */}
      <section className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Example</h2>

        <div className="bg-gray-700 p-3 rounded">
          <p><strong>Frontend:</strong> Requests users' data.</p>
          <p><strong>API Route:</strong> /api/users</p>
          <p><strong>Backend:</strong> Gets users' data.</p>
          <p><strong>Response:</strong> Sends users' data to the frontend.</p>
        </div>
      </section>

      {/* Important Note */}
      <section className="border border-gray-600 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Remember</h2>

        <p>
          <strong>API:</strong> Allows applications to communicate.
        </p>

        <p>
          <strong>API Routes:</strong> Backend endpoints that handle requests
          and return responses.
        </p>

        <p className="mt-3 text-gray-300">
          Note: API Routes are not automatically created in a normal React
          Vite project. Next.js provides a way to create them. A separate
          backend can also provide API endpoints.
        </p>
      </section>

    </div>
  );
}

export default Apiroutes;