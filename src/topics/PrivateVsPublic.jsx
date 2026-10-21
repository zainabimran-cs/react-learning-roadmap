
import React from 'react';

function PrivateVsPublic() {
  return (
    <div className="space-y-6 text-white">
 {/* Definition */}
      <section className="rounded-lg bg-gray-800 p-5">
       

        <p className="mb-3 text-gray-300">
          <strong>Private Routes:</strong> These routes allow only
          logged-in users to access certain pages.
        </p>

        <p className="text-gray-300">
          <strong>Public Routes:</strong> These routes allow users
          to access pages without logging in.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="rounded-lg bg-gray-800 p-5">
        <h2 className="mb-4 text-xl font-semibold">
          Key Differences
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 p-3">Feature</th>
                <th className="border border-gray-600 p-3">Public Route</th>
                <th className="border border-gray-600 p-3">Private Route</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-600 p-3">Access</td>
                <td className="border border-gray-600 p-3">
                  Everyone
                </td>
                <td className="border border-gray-600 p-3">
                  Logged-in users
                </td>
              </tr>

              <tr>
                <td className="border border-gray-600 p-3">Login Required</td>
                <td className="border border-gray-600 p-3">No</td>
                <td className="border border-gray-600 p-3">Yes</td>
              </tr>

              <tr>
                <td className="border border-gray-600 p-3">Examples</td>
                <td className="border border-gray-600 p-3">
                  Home, About, Login
                </td>
                <td className="border border-gray-600 p-3">
                  Dashboard, Profile
                </td>
              </tr>

              <tr>
                <td className="border border-gray-600 p-3">Purpose</td>
                <td className="border border-gray-600 p-3">
                  Show public information
                </td>
                <td className="border border-gray-600 p-3">
                  Restrict access to certain pages
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How It Works */}
      <section className="rounded-lg bg-gray-800 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          How Do They Work?
        </h2>

        <h3 className="mb-2 font-semibold ">
          Public Route
        </h3>
        <ol className="mb-4 list-decimal space-y-2 pl-6">
          <li>User opens a public page.</li>
          <li>The page opens without checking login status.</li>
        </ol>

        <h3 className="mb-2 font-semibold">
          Private Route
        </h3>
        <ol className="list-decimal space-y-2 pl-6 text-gray-300">
          <li>User tries to open a private page.</li>
          <li>The app checks whether the user is logged in.</li>
          <li>If logged in, the page opens.</li>
          <li>If not logged in, the user is redirected to the login page.</li>
        </ol>
      </section>

      {/* Examples */}
      <section className="rounded-lg bg-gray-800 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Examples
        </h2>

        <div className="space-y-3">
          <p>
            <strong>Public:</strong>{' '}
            Anyone can open the About page without logging in.
          </p>

          <p>
            <strong >Private:</strong>{' '}
            Only a logged-in user can access their Dashboard.
          </p>
        </div>
      </section>

      {/* Important Point */}
      <section className="rounded-lg  bg-gray-800 p-5">
        <h2 className="mb-2 text-xl font-semibold text-white-400">
          Important Point
        </h2>
        <p className="text-gray-300">
          Private routes help control page access. Sensitive data must
          also be protected by checking authentication and permissions
          on the server.
        </p>
      </section>

      {/* Conclusion */}
      <section className="rounded-lg bg-gray-800 p-5">
        <h2 className="mb-2 text-xl font-semibold text-white-400">
          Conclusion
        </h2>
        <p className="text-gray-300">
          Public Routes are for everyone, while Private Routes are for
          logged-in users only.
        </p>

        <p className="mt-3 font-semibold text-white-400">
          Easy to Remember: Public = Everyone | Private = Logged-in Users
        </p>
      </section>

    </div>
  );
}

export default PrivateVsPublic;
