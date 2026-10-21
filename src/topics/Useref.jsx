
import { useRef } from 'react';

function Demo() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="mt-4 rounded-lg bg-gray-800 p-4">
      <h3 className="mb-3 font-bold">Demo: useRef</h3>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="rounded p-2 text-white"/>

      <button
        onClick={handleClick}
        className="ml-2 rounded bg-blue-600 px-4 py-2 text-white" >
        Focus Input
      </button>
    </div>
  );
}

function Useref() {
  return (
    <div className="text-white">
      <p className="my-2">
        useRef is a React Hook used to access DOM elements like input tag, button tag, heading tags, div tag
        or store values without causing a re-render.
      </p>

      <p className="my-2 font-bold">Demo</p>
      <Demo />
    </div>
  );
}

export default Useref;
