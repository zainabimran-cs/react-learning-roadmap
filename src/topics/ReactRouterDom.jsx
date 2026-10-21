function ReactRouterDom() {
  return (
    <div className="space-y-4 p-5 text-white">
<div>
        <p>
          React Router DOM is a library that helps us navigate between
          different pages in a React application without reloading
          the whole page.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Why Do We Use It?</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To create different pages in a React application.</li>
          <li>To move between pages using links.</li>
          <li>To show different components for different URLs.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Important Terms</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>BrowserRouter:</b> Enables routing in the application.</li>
          <li><b>Routes:</b> Holds the route definitions.</li>
          <li><b>Route:</b> Connects a URL path to a component.</li>
          <li><b>Link:</b> Navigates to another route without a full page reload.</li>
        </ul>
      </div>

     

      <div>
        <h2 className="mb-2 text-lg font-semibold">Conclusion</h2>
        <p>
          React Router DOM makes it easy to navigate between pages
          in a React application without reloading the entire page.
        </p>
      </div>

    </div>
  );
}

export default ReactRouterDom;
