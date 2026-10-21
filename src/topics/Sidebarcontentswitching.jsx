function Sidebarcontentswitching() {
  return (
    <div className="space-y-6 text-white">
      <section className=" p-5">
        <p className="leading-7">
          Sidebar-Driven Content Switching means changing the main
          content when a user clicks an item in the sidebar.
        </p>
      </section>

      {/* Why */}
      <section className="pl-5 ">
        <h2 className="mb-3 text-xl font-semibold">
          Why Do We Use It?
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>To display different content in the same area.</li>
          <li>To make navigation easy for users.</li>
          <li>To organize topics in a sidebar.</li>
          <li>To avoid creating a separate page for every selection.</li>
        </ul>
      </section>

      {/* How it works */}
      <section className=" p-5">
        <h2 className="mb-3 text-xl font-semibold">
          How Does It Work?
        </h2>

        <ol className="list-decimal space-y-3 pl-6 leading-7">
          <li>The sidebar displays a list of items.</li>
          <li>The user clicks an item.</li>
          <li>React updates the selected item using state.</li>
          <li>The main content displays information for that item.</li>
        </ol>
      </section>

      {/* Important Terms */}
      <section className=" p-5">
        <h2 className="mb-4 text-xl font-semibold">
          Important Terms
        </h2>

        <div className="space-y-3">
          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-1 font-semibold">Sidebar</h3>
            <p>
              The area that contains clickable navigation items.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-1 font-semibold">State</h3>
            <p>
              State stores which item is currently selected.
            </p>
          </div>

          <div className="rounded-lg bg-gray-800 p-4">
            <h3 className="mb-1 font-semibold">Main Content</h3>
            <p>
              The area where the selected item's content appears.
            </p>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className=" p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Simple Example
        </h2>

        <div className="grid grid-cols-[120px_1fr] overflow-hidden rounded-lg border border-gray-700">

          {/* Sidebar */}
          <div className="space-y-2 bg-gray-800 p-3">
            <div className="rounded-md bg-gray-700 p-2">
              Home
            </div>

            <div className="rounded-md p-2">
              Users
            </div>

            <div className="rounded-md p-2">
              Settings
            </div>
          </div>

          {/* Main Content */}
          <div className="flex min-h-40 items-center justify-center bg-gray-900 p-4">
            <p className="text-center">
              Home Content Appears Here
            </p>
          </div>

        </div>

        <p className="mt-3 text-sm leading-6">
          This is a visual example only. Clicking the sidebar items
          will not change the content in this example.
        </p>
      </section>

      <section className=" p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Conclusion
        </h2>

        <p className="leading-7">
          Sidebar-Driven Content Switching allows users to select a
          sidebar item and display its related content in the main area.
        </p>

        <div className="mt-4 p-4">
          <p className="font-semibold">Easy to Remember</p>
          <p className="mt-2">
            Click Sidebar Item → Update State → Change Main Content
          </p>
        </div>
      </section>

    </div>
  );
}

export default Sidebarcontentswitching;