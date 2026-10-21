import  { useState, useEffect } from 'react'

function Componentlifecycle() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="text-white space-y-4">
      <p>
        Component Lifecycle means the different stages a
        React component goes through during its life.
      </p>

      <div className="bg-gray-800 p-3 rounded space-y-2">
        <h3 className="font-bold">
          1. Mounting
        </h3>
        <p>
          Mounting means the component appears on the screen
          for the first time.
        </p>

        <h3 className="font-bold ">
          2. Updating
        </h3>
        <p>
          Updating means the component updates when its state
          or props change.
        </p>

        <h3 className="font-bold ">
          3. Unmounting
        </h3>
        <p>
          Unmounting means the component is removed from the screen.
        </p>
      </div>

      <h3 className="text-lg font-bold">Working Example</h3>

      <p>
        Click the buttons to see the component lifecycle in action.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-600 p-2 rounded"
        >
          {show ? 'Unmount Component' : 'Mount Component'}
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 p-2 rounded"
          disabled={!show}
        >
          Update Count
        </button>
      </div>

      {show && (
        <LifecycleChild count={count} />
      )}

      <div className="bg-gray-800 p-3 rounded">
        <h3 className="font-bold">Remember</h3>
        <p>Mounting = Appears</p>
        <p>Updating = Changes</p>
        <p>Unmounting = Removed</p>
      </div>
    </div>
  )
}

function LifecycleChild({ count }) {
  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Component unmounted')
    }
  }, [])

  useEffect(() => {
    console.log('Count updated:', count)
  }, [count])

  return (
    <div className="bg-gray-800 p-4 rounded space-y-2">
      <p className="font-bold">
        Component is mounted!
      </p>
      <p>Count: {count}</p>
    </div>
  )
}

export default Componentlifecycle
