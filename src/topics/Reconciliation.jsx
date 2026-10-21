import { useState } from "react";

function Reconciliation() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white">

      {/* Explanation */}
      <div className="mb-4 rounded-lg bg-gray-800 p-4">
        <p>
          Reconciliation is the process React uses to compare
          the old Virtual DOM with the new Virtual DOM.
        </p>

        <p className="mt-2">
          React finds what has changed and updates only the
          necessary parts of the real DOM.
        </p>

        <p className="mt-2">
          Example: When we click Add 1, the count changes
          without reloading the whole page.
        </p>
      </div>

      <p className='font-bold m-2'>{count}</p>

      <button
        className="mb-4 rounded bg-blue-600 px-4 py-2"
        onClick={() => setCount(count + 1)}
      >
        Add 1
      </button>

      <div>
        <label>Enter Name: </label>
        <input className="rounded bg-gray-800 p-1" />
      </div>

    </div>
  );
}

export default Reconciliation;