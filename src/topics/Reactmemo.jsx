import { useState, memo } from 'react'

function Reactmemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Zainab')

  return (
    <div className="text-white space-y-4">
      <p>
        React.memo is used to prevent a component from
        re-rendering when its props have not changed.
      </p>

      <div className="bg-gray-800 p-3 rounded space-y-2">
        <h3 className="font-bold">
          Why use React.memo?
        </h3>
        <p>
          When a parent component re-renders, its child
          components may also re-render.
        </p>
        <p>
          React.memo checks the child's props. If the props
          have not changed, React can skip that child's
          re-render.
        </p>
      </div>

      <div className="bg-gray-800 p-3 rounded space-y-3">
        <h3 className="font-bold">Working Example</h3>

        <p>Parent Count: {count}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 p-2 rounded"
        >
          Increase Count
        </button>

        <button
          onClick={() => setName(name === 'Zainab' ? 'Ayesha' : 'Zainab')}
          className="bg-blue-600 p-2 rounded ml-2"
        >
          Change Name
        </button>

        <MemoChild name={name} />
      </div>

      <div className="bg-gray-800 p-3 rounded">
        <h3 className="font-bold">Remember</h3>
        <p>
          React.memo = Skip a child re-render when its props
          have not changed.
        </p>
      </div>
    </div>
  )
}

const MemoChild = memo(function MemoChild({ name }) {
  console.log('MemoChild rendered')

  return (
    <div className="bg-gray-700 p-3 rounded">
      <p className="font-bold">Child Component</p>
      <p>Hello, {name}!</p>
      <p>Check the browser console to see when it renders.</p>
    </div>
  )
})

export default Reactmemo
