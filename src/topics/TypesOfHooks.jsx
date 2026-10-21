function TypesOfHooks() {
  return (
    <div className="text-white">
      <p className="my-2">
        React Hooks are special functions that let us use React features
        inside functional components.
      </p>

      <p className="my-2">
        React provides different Hooks to manage state, handle side effects,
        share data, and improve performance.
      </p>

      <ul className="ml-5 list-disc space-y-2">
        <li>useState: Stores data and updates the screen.</li>
        <li>useEffect: Runs code for tasks like fetching API data.</li>
        <li>useContext: Shares data between components.</li>
        <li>useRef: Refers to a value or DOM element.</li>
        <li>useReducer: Manages state using actions.</li>
        <li>useMemo: Saves a calculated result.</li>
        <li>useCallback: Saves a function between renders.</li>
        <li>useLayoutEffect: Runs code before the browser paints the screen.</li>
      </ul>

      <p className="mt-4">
        Custom Hooks allow us to reuse logic in different components.
      </p>
    </div>
  );
}

export default TypesOfHooks;