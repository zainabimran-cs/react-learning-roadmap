import { useState } from "react";

function StorageDifferences() {
  const storageData = [
    {
      name: "LocalStorage",
      purpose: "Saves data in the browser",
      duration: "Until removed",
      example: "Theme, preferences",
    },
    {
      name: "SessionStorage",
      purpose: "Saves temporary data",
      duration: "Current tab session",
      example: "Temporary form data",
    },
    {
      name: "Cookies",
      purpose: "Saves small pieces of data",
      duration: "Until expiry or deletion",
      example: "Login session, preferences",
    },
    {
      name: "Cache Storage",
      purpose: "Saves website resources",
      duration: "Until deleted or removed by browser",
      example: "Images, pages, API responses",
    },
  ];

  const [username, setUsername] = useState("");

  const [theme, setTheme] = useState(
    () => localStorage.getItem("demoTheme") || "dark"
  );

  const [sessionValue, setSessionValue] = useState(
    sessionStorage.getItem("demoUsername") || ""
  );

  const [cookieValue, setCookieValue] = useState("");

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("demoTheme", newTheme);
    setTheme(newTheme);
  }

  function saveSession() {
    sessionStorage.setItem("demoUsername", username);
    setSessionValue(username);
  }

  function saveCookie() {
    document.cookie =
      "demoUsername=" +
      encodeURIComponent(username) +
      "; max-age=3600; path=/; SameSite=Lax";

    setCookieValue(username);
  }

  function readCookie() {
    const cookie = document.cookie
      .split("; ")
      .find((item) => item.startsWith("demoUsername="));

    setCookieValue(
      cookie
        ? decodeURIComponent(cookie.substring("demoUsername=".length))
        : ""
    );
  }

  function clearSession() {
    sessionStorage.removeItem("demoUsername");
    setSessionValue("");
  }

  function clearCookie() {
    document.cookie =
      "demoUsername=; max-age=0; path=/; SameSite=Lax";

    setCookieValue("");
  }

  return (
    <div className="space-y-4 p-5 text-white">
      <div>
        <p>
          Browsers provide different ways to save data.
          Each storage type has a different purpose and use.
        </p>
      </div>

      {/* Why Compare */}
      <div>
        <h2 className="mb-2 text-lg font-semibold">
          Why Do We Compare Them?
        </h2>
        <p>
          Comparing storage types helps us choose the right way
          to save data in a web application.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-gray-700">
            <tr>
              <th className="border border-gray-600 p-3">Storage</th>
              <th className="border border-gray-600 p-3">Purpose</th>
              <th className="border border-gray-600 p-3">Duration</th>
              <th className="border border-gray-600 p-3">Example</th>
            </tr>
          </thead>

          <tbody>
            {storageData.map((item) => (
              <tr key={item.name} className="even:bg-gray-700">
                <td className="border border-gray-600 p-3 font-semibold">
                  {item.name}
                </td>
                <td className="border border-gray-600 p-3">
                  {item.purpose}
                </td>
                <td className="border border-gray-600 p-3">
                  {item.duration}
                </td>
                <td className="border border-gray-600 p-3">
                  {item.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Easy Explanation */}
      <div className="rounded-lg bg-gray-700 p-4">
        <h2 className="mb-2 text-lg font-semibold">Easy Explanation</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <b>LocalStorage:</b> Saves data until it is removed.
          </li>
          <li>
            <b>SessionStorage:</b> Saves data for the current tab session.
          </li>
          <li>
            <b>Cookies:</b> Saves small data that can also be sent to a server.
          </li>
          <li>
            <b>Cache Storage:</b> Saves copies of website resources for reuse.
          </li>
        </ul>
      </div>

      {/* Live Example */}
      <section className="space-y-4 rounded-lg bg-gray-800 p-4">
        <h2 className="text-xl font-semibold">
          Live Example: Browser Storage
        </h2>

        <p className="text-gray-300">
          Try the theme toggle for LocalStorage. Enter a name to
          test SessionStorage and Cookies.
        </p>

        {/* LocalStorage Theme Toggle */}
        <div className="rounded-lg bg-gray-900 p-3">
          <h3 className="font-bold">
            1. LocalStorage — Theme Toggle
          </h3>

          <p className="my-2 text-sm text-gray-300">
            Your selected theme is saved in LocalStorage.
            Refresh the page to check that it stays saved.
          </p>

          <div
            className={`my-3 rounded-lg p-5 ${
              theme === "dark"
                ? "bg-gray-950 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <h4 className="text-lg font-bold">
              Theme Preview
            </h4>

            <p className="my-2">
              Current Theme: {theme === "dark" ? "Dark" : "Light"}
            </p>

            <button
              onClick={toggleTheme}
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Switch to {theme === "dark" ? "Light" : "Dark"} Theme
            </button>
          </div>
        </div>

        {/* Shared Input for SessionStorage and Cookies */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Enter a name for SessionStorage and Cookies:
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded bg-gray-900 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* SessionStorage */}
        <div className="rounded-lg bg-gray-900 p-3">
          <h3 className="font-bold ">
            2. SessionStorage
          </h3>

          <p className="my-2 text-sm text-gray-300">
            Data remains available in the current tab session.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={saveSession}
              disabled={!username.trim()}
              className="rounded bg-purple-600 px-3 py-2 disabled:opacity-50"
            >
              Save
            </button>

            <button
              onClick={() =>
                setSessionValue(
                  sessionStorage.getItem("demoUsername") || ""
                )
              }
              className="rounded bg-gray-700 px-3 py-2"
            >
              Read
            </button>

            <button
              onClick={clearSession}
              className="rounded bg-red-700 px-3 py-2"
            >
              Delete
            </button>
          </div>

          <p className="mt-3 b">
            Saved name: {sessionValue || "No data saved"}
          </p>
        </div>

        {/* Cookies */}
        <div className="rounded-lg bg-gray-900 p-3">
          <h3 className="font-bold">
            3. Cookies
          </h3>

          <p className="my-2 text-sm text-gray-300">
            This demo cookie expires after one hour.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={saveCookie}
              disabled={!username.trim()}
              className="rounded bg-yellow-600 px-3 py-2 disabled:opacity-50"
            >
              Save
            </button>

            <button
              onClick={readCookie}
              className="rounded bg-gray-700 px-3 py-2"
            >
              Read
            </button>

            <button
              onClick={clearCookie}
              className="rounded bg-red-700 px-3 py-2"
            >
              Delete
            </button>
          </div>

          <p className="mt-3 ">
            Cookie name: {cookieValue || "No cookie read"}
          </p>
        </div>

        {/* Cache Storage */}
        <div className="rounded-lg bg-gray-900 p-3">
          <h3 className="font-bold">
            4. Cache Storage
          </h3>

          <p className="my-2 text-sm text-gray-300">
            Cache Storage saves website resources, such as responses,
            for reuse. It is different from saving a simple username.
          </p>

          <p className="text-sm">
            Example: A service worker can cache a page or an API response
            so it may be reused later.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <div className="rounded-lg bg-gray-700 p-4">
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          LocalStorage and SessionStorage save simple key-value data.
          Cookies can help manage information shared with a server.
          Cache Storage saves website resources that can be reused later.
        </p>
      </div>

    </div>
  );
}

export default StorageDifferences;
