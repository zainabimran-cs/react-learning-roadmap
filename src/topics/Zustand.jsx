
import React from 'react';
import { create } from 'zustand';

// 1. Create Zustand Store
const useCounterStore = create((set) => ({
  count: 0,

  increment: () =>
    set((state) => ({ count: state.count + 1 })),

  decrement: () =>
    set((state) => ({ count: state.count - 1 })),

  reset: () =>
    set({ count: 0 }),
}));

function Zustand() {
  // 2. Read state and actions from the store
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="space-y-5 p-5 text-white">
        <p>
          Zustand is a small state management library for React.
          It allows different components to share and update state
          without passing props through every component.
        </p>

      {/* Why use Zustand */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Why Do We Use It?
        </h2>

        <ul className="list-inside list-disc space-y-2">
          <li>To share state between components.</li>
          <li>To update shared state easily.</li>
          <li>To avoid unnecessary prop drilling.</li>
          <li>To manage state with less setup code.</li>
        </ul>
      </section>

      {/* Main concepts */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Main Concepts
        </h2>

        <ul className="list-inside list-disc space-y-3">
          <li>
            <strong>Store:</strong> Holds shared state and functions
            that update it.
          </li>
          <li>
            <strong>create:</strong> Creates a Zustand store.
          </li>
          <li>
            <strong>set:</strong> Updates the store's state.
          </li>
          <li>
            <strong>Selector:</strong> Reads the specific value or
            function needed from the store.
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          How Does It Work?
        </h2>

        <ol className="list-inside list-decimal space-y-2">
          <li>Create a store using create().</li>
          <li>Keep state and update functions inside the store.</li>
          <li>Read the required state in a component.</li>
          <li>Call a function to update the state.</li>
          <li>Zustand notifies subscribed components to update.</li>
        </ol>
      </section>

      {/* Working example */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-3 text-xl font-semibold">
          Working Counter Example
        </h2>

        <p className="mb-3">
          Current Count:
        </p>

        <p className="mb-4 text-center text-4xl font-bold">
          {count}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={increment}
            className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white"
          >
            Increment +
          </button>

          <button
            onClick={decrement}
            className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white"
          >
            Decrement -
          </button>

          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Important note */}
      <section className="rounded-lg border border-blue-500 bg-gray-900 p-4">
        <h2 className="mb-2 text-lg font-semibold">
          Important Note
        </h2>

        <p>
          Zustand does not require a Provider for a normal store
          created with create(). Components can access the store
          through its custom hook.
        </p>
      </section>
    </div>
  );
}

export default Zustand