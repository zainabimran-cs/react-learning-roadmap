import React, { useState } from 'react';

function CookieStorage() {
  const [name, setName] = useState('');
  const [popup, setPopup] = useState({ show: false, message: '' });

  function showPopup(message) {
    setPopup({ show: true, message });
  }

  function closePopup() {
    setPopup({ show: false, message: '' });
  }

  function saveCookie() {
    document.cookie =
      `username=${encodeURIComponent(name)}; max-age=3600; path=/; SameSite=Lax`;

    showPopup('Cookie Saved!');
  }

  function readCookie() {
    const cookie = document.cookie
      .split('; ')
      .find((item) => item.startsWith('username='));

    if (cookie) {
      setName(decodeURIComponent(cookie.split('=').slice(1).join('=')));
    } else {
      showPopup('No saved cookie found.');
    }
  }

  return (
    <div className="space-y-4 p-5 text-white">
      <div>
        <p>
          Cookies are small pieces of data stored by the browser.
          Websites can use them to remember information, such as
          preferences or session details.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Why Do We Use Cookies?</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To remember user preferences.</li>
          <li>To maintain login sessions.</li>
          <li>To store small amounts of information.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Enter your name in the input field.</li>
          <li><code>document.cookie</code> saves a cookie.</li>
          <li><code>max-age=3600</code> sets its lifetime to one hour.</li>
          <li><code>document.cookie</code> can also read cookies available to JavaScript.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Important Terms</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Cookie:</b> Small data stored by the browser.</li>
          <li><b>max-age:</b> How long the cookie lasts.</li>
          <li><b>path=/:</b> Makes the cookie available across the website's paths.</li>
          <li><b>SameSite=Lax:</b> Helps limit when cookies are sent with cross-site requests.</li>
        </ul>
      </div>

      <div className="rounded-lg bg-gray-700 p-4">
        <h2 className="mb-2 text-lg font-semibold">Working Example</h2>

        <p className="mb-3">
          Enter your name and save it in a cookie. You can then read
          the saved name using the Read Cookie button.
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full rounded bg-white p-2 text-black"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={saveCookie}
            className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
          >
            Save Cookie
          </button>

          <button
            onClick={readCookie}
            className="rounded bg-green-600 px-4 py-2 hover:bg-green-700"
          >
            Read Cookie
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Important Points</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Cookies can have an expiry time.</li>
          <li>Cookies may be sent to the server with HTTP requests.</li>
          <li>JavaScript cannot read cookies marked HttpOnly.</li>
          <li>Never store passwords or sensitive information directly in cookies.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          Cookies help websites remember small pieces of information
          and are often used for preferences and session management.
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
            <h3 className="text-lg font-bold">Cookie</h3>
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

export default CookieStorage;