
import React from 'react';
import {
  configureStore,
  createSlice
} from '@reduxjs/toolkit';
import {
  Provider,
  useDispatch,
  useSelector
} from 'react-redux';

// 1. Create a Slice
const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    count: 0
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
    }
  }
});

// 2. Export Actions
const { increment, decrement, reset } = counterSlice.actions;

// 3. Create Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// 4. Counter Component
function CounterExample() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="rounded-lg bg-gray-800 p-5 text-center">
      <h3 className="mb-3 text-xl font-bold text-white">
        Counter Example
      </h3>

      <p className="mb-4 text-3xl font-bold text-white">
        {count}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Increment +
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Decrement -
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// 5. Main Component
function Reduxtoolkit() {
  return (
    <Provider store={store}>
      <div className="space-y-5 p-5 text-white">
        <p>
            Redux Toolkit is a library used to manage shared
            application state in one central store. It makes Redux
            easier to write and use.
          </p>

        <section>
          <h2 className="mb-2 text-xl font-semibold">
            Why Do We Use It?
          </h2>

          <ul className="list-inside list-disc space-y-2">
            <li>To manage state shared between components.</li>
            <li>To keep shared state in a central store.</li>
            <li>To update state through defined actions.</li>
            <li>To avoid passing props through many components.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">
            Main Redux Toolkit Concepts
          </h2>

          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Store:</strong> Holds the application's shared state.
            </li>
            <li>
              <strong>Slice:</strong> Defines a part of the state and
              its reducer functions.
            </li>
            <li>
              <strong>Reducer:</strong> Describes how state changes.
            </li>
            <li>
              <strong>Action:</strong> Describes which update should happen.
            </li>
            <li>
              <strong>useSelector:</strong> Reads data from the store.
            </li>
            <li>
              <strong>useDispatch:</strong> Sends an action to the store.
            </li>
            <li>
              <strong>Provider:</strong> Makes the store available to
              connected React components.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">
            How It Works
          </h2>

          <ol className="list-inside list-decimal space-y-2">
            <li>The user clicks a button.</li>
            <li>dispatch sends the selected action.</li>
            <li>The reducer updates the state.</li>
            <li>The store keeps the updated state.</li>
            <li>useSelector reads the new value.</li>
            <li>React updates the displayed counter.</li>
          </ol>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">
            Working Example
          </h2>

          <p className="mb-4">
            Click the buttons to change the counter using Redux Toolkit.
          </p>

          <CounterExample />
        </section>
      </div>
    </Provider>
  );
}

export default Reduxtoolkit;
