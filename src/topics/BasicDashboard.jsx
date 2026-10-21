
import React from 'react';

function BasicDashboard() {
  return (
    <div className="space-y-6 text-white">
        <p className="leading-7">
          A dashboard is a page that organizes different sections of
          an application in one place. It helps users access information
          and features easily.
        </p>
     

      <section className=" p-5">
        <h2 className="mb-4 text-xl font-semibold">
          Main Parts of a Dashboard
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
            <h3 className="mb-2 font-semibold text-white">
              1. Header
            </h3>
            <p className="leading-7 text-gray-300">
              The Header is the top section of a dashboard. It can
              contain the application name, search bar, or profile.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
            <h3 className="mb-2 font-semibold text-white">
              2. Sidebar
            </h3>
            <p className="leading-7 text-gray-300">
              The Sidebar is the side section of a dashboard. It
              contains navigation links to different pages or topics.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
            <h3 className="mb-2 font-semibold text-white">
              3. Main Content
            </h3>
            <p className="leading-7 text-gray-300">
              Main Content is the area where the selected page or
              information is displayed.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
            <h3 className="mb-2 font-semibold text-white">
              4. Layout
            </h3>
            <p className="leading-7 text-gray-300">
              Layout means arranging the Header, Sidebar, and Main
              Content properly on the screen.
            </p>
          </div>

        </div>
      </section>

      {/* Why */}
      <section >
        <h2 className="mb-3 text-xl font-semibold">
          Why Do We Use a Dashboard?
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>To organize different sections in one place.</li>
          <li>To make navigation easier.</li>
          <li>To display important information clearly.</li>
          <li>To create a consistent user interface.</li>
        </ul>
      </section>

      {/* How it works */}
      <section className=" p-5">
        <h2 className="mb-3 text-xl font-semibold">
          How Does It Work?
        </h2>

        <div className="space-y-3">
          <div className="rounded-lg bg-gray-800 p-3">
            <p className="font-medium text-white">Header</p>
            <p className="text-sm text-gray-400">
              Appears at the top.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-3">
            <p className="font-medium text-white">Sidebar</p>
            <p className="text-sm text-gray-400">
              Appears on the side and provides navigation.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-3">
            <p className="font-medium text-white">Main Content</p>
            <p className="text-sm text-gray-400">
              Displays the selected page or information.
            </p>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className=" p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Simple Example
        </h2>

        <div className="overflow-hidden rounded-lg border border-gray-600">
          <div className="bg-gray-800 p-3 text-center font-semibold text-orange-300">
            Header
          </div>

          <div className="grid grid-cols-[110px_1fr]">
            <div className="space-y-3 bg-gray-800 p-3">
              <p className="text-sm text-gray-300">Home</p>
              <p className="text-sm text-gray-300">Users</p>
              <p className="text-sm text-gray-300">Settings</p>
            </div>

            <div className="flex min-h-36 items-center justify-center bg-gray-900 p-4">
              <p className="text-center text-gray-300">
                Main Content Area
              </p>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          This is a visual example of a dashboard layout. The menu
          items are for illustration and are not clickable.
        </p>
      </section>

      {/* Conclusion */}
      <section className="rounded-xl  bg-gray-900 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Conclusion
        </h2>

        <p className="leading-7">
          A basic dashboard organizes the application using a Header,
          Sidebar, and Main Content area.
        </p>

      </section>

    </div>
  );
}

export default BasicDashboard;
