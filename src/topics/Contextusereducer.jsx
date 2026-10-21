import { createContext, useContext, useReducer } from 'react'

// 1. Create Context
const CounterContext = createContext()

// 2. Create Reducer Function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }

    case 'DECREMENT':
      return { count: state.count - 1 }

    case 'RESET':
      return { count: 0 }

    default:
      return state
  }
}

// 3. Create Provider
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(
    counterReducer,
    { count: 0 }
  )

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

// 4. Child Component
function Counter() {
  const { state, dispatch } = useContext(CounterContext)

  return (
    <div className="bg-gray-800 p-4 rounded-xl space-y-4 text-white">
      <h3 className="text-xl font-bold">Counter Example</h3>

      <p className="text-lg">
        Count: <span className="font-bold">{state.count}</span>
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Increase +
        </button>

        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Decrease -
        </button>

        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

// 5. Main Component
function Contextusereducer() {
  return (
    <div className="text-white space-y-5">
      <p>
        Context API and useReducer help us manage and share state
        between components in a React application.
      </p>

      <div className="bg-gray-800 p-4 rounded-xl space-y-3">
        <h3 className="text-xl font-bold">1. What is State Management?</h3>

        <p>
          State management means keeping track of data that can
          change in an application.
        </p>

        <p>
          Example: A counter value, a user's name, or items in a
          shopping cart.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl space-y-3">
        <h3 className="text-xl font-bold">2. What is Context API?</h3>

        <p>
          Context API allows us to share data with different
          components without passing props through every
          component in between.
        </p>

        <p>
          Example: Many components can access the same username
          or theme using Context.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl space-y-3">
        <h3 className="text-xl font-bold">3. What is useReducer?</h3>

        <p>
          useReducer is a React Hook that manages state using a
          reducer function and actions.
        </p>

        <p>
          An action tells React what we want to do. The reducer
          decides how the state should change.
        </p>

        <p>
          Example: INCREMENT increases the count, DECREMENT
          decreases it, and RESET makes it zero.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl space-y-3">
        <h3 className="text-xl font-bold">4. How Do They Work Together?</h3>

        <p>
          Context API shares the state and dispatch function with
          components. useReducer manages the state changes.
        </p>

        <p>
          This helps multiple components access and update shared
          data without passing props through every level.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl space-y-3">
        <h3 className="text-xl font-bold">5. Important Terms</h3>

        <p><span className="font-bold">State:</span> The current data, such as count = 0.</p>
        <p><span className="font-bold">Action:</span> An instruction, such as INCREMENT.</p>
        <p><span className="font-bold">Reducer:</span> A function that decides the next state.</p>
        <p><span className="font-bold">Dispatch:</span> Sends an action to the reducer.</p>
        <p><span className="font-bold">Provider:</span> Makes Context data available to its child components.</p>
        <p><span className="font-bold">useContext:</span> Reads the shared Context value.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold">Working Example</h3>

        <p>
          Click the buttons below to see how actions change the
          shared counter state.
        </p>

        <CounterProvider>
          <Counter />
        </CounterProvider>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl space-y-2">
        <h3 className="text-xl font-bold">Remember</h3>

        <p>Context API = Share data.</p>
        <p>useReducer = Manage state changes.</p>
        <p>dispatch = Send an action.</p>
        <p>reducer = Decide the next state.</p>
      </div>
    </div>
  )
}

export default Contextusereducer
