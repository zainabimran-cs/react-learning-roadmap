import React, { useCallback, useState } from 'react';

function Demo() {
  const [count, setCount] = useState(0);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const showMessage = useCallback(() => {
    setPopup({ show: true, message: 'Hello! Button clicked.' });
  }, []);

  const closePopup = () => setPopup({ show: false, message: '' });

  return (
    <div className="rounded-lg bg-gray-800 p-4 text-white">
      <h2 className="mb-3 text-xl font-bold">Count: {count}</h2>

      <button
        className="mr-2 rounded bg-blue-600 px-4 py-2"
        onClick={() => setCount(count + 1)} >
        Increase Count
      </button>

      <button
        className="rounded bg-green-600 px-4 py-2"
        onClick={showMessage} >
        Show Message
      </button>

      {/* Popup Modal */}
      {popup.show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={closePopup}
        >
          <div
            className="w-80 space-y-4 rounded-lg bg-gray-700 p-6 text-center shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold">useCallback</h3>
            <p>{popup.message}</p>
            <button
              onClick={closePopup}
              className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Usecallback() {
  return (
    <div className="space-y-4 text-white">
      <div className=" p-4">
        <p>
          useCallback is a React Hook used to remember a function
          between renders.
        </p>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 font-bold">Why do we use it?</h2>
        <p>
          Normally, when a component re-renders, functions inside
          it are created again. useCallback helps React reuse the
          same function when its dependencies have not changed.
        </p>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 font-bold">How it works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>It remembers a function.</li>
          <li>It checks the function's dependencies.</li>
          <li>
            If dependencies have not changed, React can reuse
            the same function.
          </li>
          <li>
            If dependencies change, React can return a new function.
          </li>
        </ul>
      </div>

      <h2 className="text-lg font-bold">Working Example</h2>
      <Demo />

    </div>
  );
}

export default Usecallback;