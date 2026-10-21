import { useState, lazy, Suspense } from 'react'

const LazyContent = lazy(() =>
  Promise.resolve({
    default: function LazyContent() {
      return (
        <div className="bg-gray-700 p-4 rounded-lg space-y-2 text-white">
          <h3 className="text-lg font-bold">
            Lazy Loaded Component
          </h3>
          <p>
            This component is displayed only when you click
            the Load Component button.
          </p>
          <p>
            In a real application, lazy(() =&gt; import('./Component'))
          </p>
        </div>
      )
    }
  })
)

function Lazyloading() {
  const [showComponent, setShowComponent] = useState(false)

  return (
    <div className="text-white space-y-5">
<p>
        Lazy Loading means loading a component or resource only
        when it is needed instead of loading everything at the
        beginning.
      </p>

      <div className="bg-gray-800 p-4 rounded-lg space-y-3">
        <h3 className="text-xl font-bold">
          1. What is Lazy Loading?
        </h3>

        <p>
          Imagine a website has many pages and components.
          If all components load at the beginning, the website
          may take more time to load.
        </p>

        <p>
          Lazy Loading allows us to load some components later,
          when the user needs them.
        </p>

        <p>
          Example: A website loads its home page first.
          The user clicks Profile, and then the Profile component
          loads.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg space-y-3">
        <h3 className="text-xl font-bold">
          2. Why Do We Use Lazy Loading?
        </h3>

        <p>
          1. It can reduce the amount of JavaScript needed
          for the initial page.
        </p>

        <p>
          2. It can help the page load faster, especially in
          large applications.
        </p>

        <p>
          3. It avoids loading some components before they
          are needed.
        </p>

        <p>
          4. It can improve the user experience when used
          correctly.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg space-y-3">
        <h3 className="text-xl font-bold">
          3. How Does Lazy Loading Work?
        </h3>

        <p>
          Step 1: We create a component using React.lazy().
        </p>

        <p>
          Step 2: We decide when that component should appear.
        </p>

        <p>
          Step 3: When needed, React starts loading the component.
        </p>

        <p>
          Step 4: Suspense displays a fallback message while
          the component is loading.
        </p>

        <p>
          Step 5: When loading finishes, React displays the
          component.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg space-y-3">
        <h3 className="text-xl font-bold">
          4. Important React Tools
        </h3>

        <p>
          <span className="font-bold">React.lazy():</span>{' '}
          Lets React load a component when it is rendered
          for the first time.
        </p>

        <p>
          <span className="font-bold">Suspense:</span>{' '}
          Shows fallback content while the lazy component
          is loading.
        </p>

        <p>
          <span className="font-bold">Fallback:</span>{' '}
          Temporary content, such as Loading..., displayed
          while waiting.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg space-y-3">
        <h3 className="text-xl font-bold">
          5. Working Example
        </h3>

        <p>
          Click the button to show the lazy component.
          Click again to hide it.
        </p>

        <button
          onClick={() => setShowComponent(!showComponent)}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          {showComponent ? 'Hide Component' : 'Load Component'}
        </button>

        {showComponent && (
          <Suspense
            fallback={
              <p className="bg-gray-700 p-3 rounded-lg">
                Loading component...
              </p>
            }
          >
            <LazyContent />
          </Suspense>
        )}
      </div>

      <div className="bg-gray-800 p-4 rounded-lg space-y-3">
        <h3 className="text-xl font-bold">
          6. Important Point
        </h3>

        <p>
          React.lazy() normally works with a dynamic import()
          that loads a component from another file.
        </p>

        <p>
          In this single-file demonstration, Promise.resolve()
          supplies the component without creating another file.
          It demonstrates lazy rendering with Suspense, but it
          does not create a separate JavaScript chunk.
        </p>

        <p>
          To get the actual code-splitting benefit, use
          React.lazy(() =&gt; import('./Component')) with a
          separate component file.
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg space-y-2">
        <h3 className="text-xl font-bold">
          Remember
        </h3>

        <p>Lazy Loading = Load when needed.</p>
        <p>React.lazy() = Loads a component on demand.</p>
        <p>Suspense = Shows fallback while loading.</p>
        <p>Fallback = Temporary loading content.</p>
      </div>

    </div>
  )
}

export default Lazyloading