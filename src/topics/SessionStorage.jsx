import { useState } from 'react';

function SessionStorage() {
  const [name, setName] = useState(
    sessionStorage.getItem('name') || ''
  );
  const [popup, setPopup] = useState({ show: false, message: '' });

  function saveName() {
    sessionStorage.setItem('name', name);
    setPopup({ show: true, message: 'Name Saved!' });
  }

  function closePopup() {
    setPopup({ show: false, message: '' });
  }

  return (
    <div className="space-y-4 p-5 text-white">
      <div>
        <p>
          Session Storage saves data in the browser for the current tab
          session. The data remains available after refreshing the page
          but is cleared when that tab session ends.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Why Do We Use It?</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To save temporary data.</li>
          <li>To keep data after refreshing the page.</li>
          <li>To store information for the current tab session.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Enter your name in the input field.</li>
          <li><code>useState()</code> stores the name in React.</li>
          <li><code>setItem()</code> saves the name in Session Storage.</li>
          <li><code>getItem()</code> reads the saved name.</li>
          <li>The name remains available after a page refresh.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Important Methods</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><code>setItem(key, value)</code> — Saves data.</li>
          <li><code>getItem(key)</code> — Reads saved data.</li>
          <li><code>removeItem(key)</code> — Deletes a specific item.</li>
          <li><code>clear()</code> — Deletes all items in this session storage.</li>
        </ul>
      </div>

      <div className="rounded-lg bg-gray-700 p-4">
        <h2 className="mb-2 text-lg font-semibold">Working Example</h2>

        <p className="mb-3">
          Enter your name and click Save Name. Refresh the page to
          see that the name is still available in this tab.
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
          <li>Session Storage stores data as strings.</li>
          <li>Data remains after refreshing the page.</li>
          <li>Data is separate for each tab.</li>
          <li>Do not store passwords or sensitive information in Session Storage.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          Session Storage is useful for saving temporary data that
          is needed only during the current tab session.
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
            <h3 className="text-lg font-bold">Session Storage</h3>
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

export default SessionStorage;