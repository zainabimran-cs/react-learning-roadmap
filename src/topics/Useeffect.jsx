
import { useEffect, useState } from 'react';

function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="mt-4 rounded-lg bg-gray-800 p-4">
      <h3 className="mb-2 font-bold">Demo: useEffect</h3>

      <p className="mb-3">Count: {count}</p>

      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <p className="mt-3 text-sm">
        Check your browser tab title when you click the button.
      </p>
    </div>
  );
}

function Useeffect() {
  return (
    <div className="text-white">
      <p className="my-2">
        useEffect is a React Hook used to perform extra tasks
        after rendering, such as fetching API data, running timers,
        or changing the browser tab title.
      </p>

      <p className="my-2">
        The dependency array [] means the effect runs after the
        component's initial mount. In development, React Strict Mode
        may run the effect an extra time to help find bugs.
      </p>

      <p className="my-2 font-bold">Lifecycle Mapping</p>

      <ul className="ml-5 list-disc space-y-2">
        <li>
          <b>Mount:</b> Runs after the component appears on the screen.
        </li>
        <li>
          <b>Update:</b> Runs again when a dependency changes.
        </li>
        <li>
          <b>Unmount:</b> Cleanup runs when the component is removed,
          if a cleanup function is provided.
        </li>
      </ul>

      <Demo />
    </div>
  );
}

export default Useeffect;
