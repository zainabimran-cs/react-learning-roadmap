
import { useLayoutEffect, useRef, useState } from 'react';

function Demo() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    console.log('Box width:', boxWidth);
  }, [width]);

  return (
    <div className="rounded-lg bg-gray-800 p-4 text-white">
      <div
        ref={boxRef}
        style={{ width: `${width}px` }}
        className="mb-4 rounded bg-blue-600 p-4">
        My Box
      </div>

      <button
        className="rounded bg-green-600 px-4 py-2"
        onClick={() => setWidth(width === 200 ? 300 : 200)}>
        Change Box Width
      </button>
    </div>
  );
}

function Uselayouteffect() {
  return (
    <div className="space-y-4 text-white">
      <p>
        useLayoutEffect is a React Hook that runs after React updates
        the DOM but before the browser displays the changes on screen.
      </p>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 font-bold">How it works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>React updates the DOM.</li>
          <li>useLayoutEffect runs before the browser display the screen.</li>
          <li>It can measure or adjust the layout before it appears.</li>
        </ul>
      </div>

      <h2 className="text-lg font-bold">Working Example</h2>
      <Demo />

      <p>
  useLayoutEffect is used for layout-related tasks, such as measuring
  an element's width, height, or position and adjusting the layout
  before the browser displays the changes.
</p>
    </div>
  );
}

export default Uselayouteffect;
