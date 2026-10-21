import { useState } from "react";

function Apilayers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // API Layer function
  async function getProducts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  }

  // Load data when button is clicked
  async function handleLoadProducts() {
    setLoading(true);
    setError("");

    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      setError("Failed to load data. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5 text-white">

      {/* Definition */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          What are API Layers?
        </h2>

        <p>
          API Layers organize API request code into separate files,
          making it reusable and easier to maintain.
        </p>

        <p className="mt-2 text-gray-300">
          Easy words: Instead of writing API calls in every component,
          we keep them in one separate file, such as apiService.js.
        </p>
      </section>

      {/* Without API Layer */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-3 text-xl font-semibold">
          Without an API Layer
        </h2>

        <p>
          Each component may contain its own API URL, request code,
          headers, and error handling.
        </p>

        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-gray-700 p-3">
          {`// Products.jsx
fetch('/api/products');

// Users.jsx
fetch('/api/users');`}
        </pre>

        <p className="mt-3 text-gray-300">
          This can make components harder to manage when API code is repeated.
        </p>
      </section>

      {/* With API Layer */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-3 text-xl font-semibold">
          With an API Layer
        </h2>

        <p>
          We keep API request functions in a separate file called
          apiService.js and reuse them in different components.
        </p>

        <h3 className="mt-4 font-bold">apiService.js</h3>

        <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded bg-gray-700 p-3">
          {`export async function getProducts() {
  const response = await fetch('/api/products');

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}`}
        </pre>
        <h3 className="mt-4 font-bold">Products.jsx</h3>

        <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded bg-gray-700 p-3">
          {`import { getProducts } from './apiService';

// Call inside an async function
const products = await getProducts();`}
        </pre>

        <p className="mt-3 text-gray-300">
          Note: These are code examples. The API URL must exist in your
          backend, and the function call must be used inside an appropriate
          async function or event handler.
        </p>
      </section>

      {/* How It Works */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-3 text-xl font-semibold">
          How API Layers Work
        </h2>

        <ol className="list-decimal space-y-2 pl-5">
          <li>The component needs some data.</li>
          <li>It calls a function, such as getProducts().</li>
          <li>The API Layer sends the request to the backend.</li>
          <li>The backend sends a response.</li>
          <li>The API Layer returns the data to the component.</li>
          <li>The component displays the data on the screen.</li>
        </ol>
      </section>

      {/* Live Example */}
      <section className="rounded-lg  bg-gray-800 p-4">
        <h2 className="mb-3 text-xl font-semibold">
          Live Example: API Layer
        </h2>

        <p className="mb-3 text-gray-300">
          Click the button to fetch posts from a public test API.
          The reusable getProducts() function handles the API request.
        </p>

        <button
          onClick={handleLoadProducts}
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load Posts"}
        </button>

        {error && (
          <p className="mt-3 text-red-400">{error}</p>
        )}

        {products.length > 0 && (
          <p className="mt-3 text-sm">
            Successfully loaded {products.length} posts.
          </p>
        )}

        <div className="mt-4 space-y-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded bg-gray-900 p-3"
            >
              <h3 className="font-semibold text-blue-300">
                {product.id}. {product.title}
              </h3>

              <p className="mt-2 text-gray-300">
                {product.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="rounded-lg border border-gray-600 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Benefits of API Layers
        </h2>

        <ul className="list-disc space-y-2 pl-5">
          <li>Code can be reused in multiple components.</li>
          <li>Components stay cleaner and easier to read.</li>
          <li>API error handling can be managed in one place.</li>
          <li>API URLs can be updated more easily.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Remember
        </h2>

        <p>
          <strong>API Layer:</strong> Keeps API request functions in a
          separate file so components can reuse them.
        </p>

        <p className="mt-2">
          <strong>Example:</strong> apiService.js contains getProducts(),
          and a component calls getProducts() when it needs product data.
        </p>
      </section>

    </div>
  );
}
export default Apilayers;