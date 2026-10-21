import { useState } from 'react';

function Localstorage() {
  const [name, setName] = useState(
    localStorage.getItem('name') || ''
  );
  const [popup, setPopup] = useState({ show: false, message: '' });

  function saveName() {
    localStorage.setItem('name', name);
    setPopup({ show: true, message: 'Name Saved!' });
  }

  function closePopup() {
    setPopup({ show: false, message: '' });
  }

  return (
    <div className=" p-5 text-white space-y-4">

      <div>
        <p>
          LocalStorage is a browser feature that saves data in the
          user's browser. The saved data remains available even after
          the page is refreshed or the browser is closed.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Why Do We Use LocalStorage?</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To save data in the browser.</li>
          <li>To keep data after a page refresh.</li>
          <li>To remember simple information, such as a username.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Enter your name in the input field.</li>
          <li><code>useState()</code> stores the name in React.</li>
          <li><code>onChange</code> updates the name while typing.</li>
          <li><code>setItem()</code> saves the name in the browser.</li>
          <li><code>getItem()</code> reads the saved name after refresh.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Important Methods</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><code>setItem(key, value)</code> — Saves data.</li>
          <li><code>getItem(key)</code> — Reads saved data.</li>
          <li><code>removeItem(key)</code> — Deletes a specific item.</li>
          <li><code>clear()</code> — Deletes all items for this website.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Working Example</h2>

        <p className="mb-3">
          Enter your name and click Save Name. Refresh the page to see
          that the saved name remains available.
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full rounded bg-white p-2 text-black"
        />

        <button
          onClick={saveName}
          className="mt-3 rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
        >
          Save Name
        </button>

        <p className="mt-3">Your Name: {name}</p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Important Points</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>LocalStorage stores data as strings.</li>
          <li>Saved data remains after a page refresh.</li>
          <li>Do not store passwords or sensitive information in LocalStorage.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          LocalStorage allows us to save small amounts of data in the
          browser and use that data again later.
        </p>
      </div>

      {/* Popup Modal */}
      {popup.show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={closePopup}
        >
          <div
            className="w-80 space-y-4 rounded-lg bg-gray-800 p-6 text-center shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold">LocalStorage</h3>
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

export default Localstorage;