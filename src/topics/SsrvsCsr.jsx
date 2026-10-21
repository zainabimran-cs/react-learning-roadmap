function SsrvsCsr() {
  return (
    <div className="space-y-5 p-5 text-white">
        <p>
          SSR means the server prepares the HTML before sending
          it to the browser.
        </p>

        <p className="mt-3">
          CSR means the browser uses JavaScript to render the
          webpage content.
        </p>

      {/* Easy trick */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-3 text-xl font-bold">
          Easy Way to Remember
        </h2>

        <div className="rounded-lg bg-blue-900 p-3">
          <h3 className="font-bold">SSR</h3>
          <p>Server prepares the page.</p>
        </div>

        <div className="mt-3 rounded-lg bg-blue-900 p-3">
          <h3 className="font-bold">CSR</h3>
          <p>Client (browser) renders the page.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-3 text-xl font-bold">
          Main Differences
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-3">SSR</th>
                <th className="border border-gray-700 p-3">CSR</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-700 p-3">
                  Server renders HTML.
                </td>
                <td className="border border-gray-700 p-3">
                  Browser renders content.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-700 p-3">
                  Can show content sooner.
                </td>
                <td className="border border-gray-700 p-3">
                  May wait for JavaScript to load.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-700 p-3">
                  Useful for content-focused pages.
                </td>
                <td className="border border-gray-700 p-3">
                  Useful for interactive apps.
                </td>
              </tr>

              <tr>
                <td className="border border-gray-700 p-3">
                  Example: server-rendered article page.
                </td>
                <td className="border border-gray-700 p-3">
                  Example: React dashboard.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Simple example */}
      <section className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-bold">
          Simple Example
        </h2>

        <p>
          Imagine you want to read a news article.
        </p>

        <p className="mt-3">
          <strong>SSR:</strong> The server prepares the article
          HTML and sends it to you.
        </p>

        <p className="mt-3">
          <strong>CSR:</strong> Your browser runs JavaScript to
          render the article content.
        </p>
      </section>

      {/* Summary */}
      <section >
        <h2 className="mb-2 text-lg font-bold">
          Remember This!
        </h2>

        <p className="font-bold">
          SSR = Server renders
        </p>

        <p className="mt-2 font-bold">
          CSR = Client renders
        </p>
      </section>
    </div>
  );
}

export default SsrvsCsr;