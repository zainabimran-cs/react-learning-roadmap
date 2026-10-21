import { lazy, Suspense, useState } from "react";

const LazyMessage = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: function Message() {
          return (
            <div className="rounded-lg bg-gray-800 p-4">
              <h3 className="font-bold">
                Lazy Component Loaded!
              </h3>
              <p className="mt-2">
                This component is displayed after you click the button.
              </p>
            </div>
          );
        },
      });
    }, 1000);
  })
);

function Codesplitting() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="space-y-5 p-5 text-white">
      <section className="rounded-lg bg-gray-800 p-4">
        <p>
          Code Splitting means dividing a large JavaScript bundle
          into smaller parts so the application does not need to
          load all its code at once.
        </p>
      </section>

      {/* How it works */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          How Does It Work?
        </h2>
        <ol className="list-inside list-decimal space-y-2">
          <li>The application starts.</li>
          <li>Only the code needed at the beginning is loaded.</li>
          <li>Other code can be loaded when it is needed.</li>
          <li>This can reduce the initial loading time.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Benefits of Code Splitting
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Reduces the initial JavaScript bundle size.</li>
          <li>Can improve the initial loading speed.</li>
          <li>Loads code when it is needed.</li>
          <li>Useful for large applications with many pages.</li>
        </ul>
      </section>

      {/* Live Example */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-bold ">
          Live Example: Lazy Loading
        </h2>
        <p className="mb-3 text-gray-300">
          Click the button to load a component only when needed.
        </p>

        <button
          onClick={() => setShowComponent(true)}
          disabled={showComponent}
          className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {showComponent ? "Component Requested" : "Load Component"}
        </button>

        {showComponent && (
          <div className="mt-4">
            <Suspense
              fallback={
                <p className="rounded bg-gray-900 p-4 text-yellow-300">
                  Loading component...
                </p>
              }
            >
              <LazyMessage />
            </Suspense>
          </div>
        )}
      </section>

      {/* Code Example */}
      <section className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-semibold">
          Important Syntax
        </h2>
        <pre className="overflow-x-auto rounded bg-gray-900 p-3 text-sm">
          {`const Page = lazy(() => import("./Page"));

<Suspense fallback={<p>Loading...</p>}>
  <Page />
</Suspense>`}
        </pre>
        <p className="mt-3 text-gray-300">
          <b>lazy():</b> Loads a component when React needs it.
        </p>
        <p className="mt-2 text-gray-300">
          <b>Suspense:</b> Displays fallback content while the
          lazy component is loading.
        </p>
      </section>
    </div>
  );
}

export default Codesplitting;
