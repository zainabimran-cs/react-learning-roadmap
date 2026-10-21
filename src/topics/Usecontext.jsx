
import React, { createContext, useContext } from 'react';

const NameContext = createContext();

function Child() {
  const name = useContext(NameContext);

  return (
    <div className="mt-3 rounded bg-gray-700 p-3">
      <p>Hello, {name}!</p>
    </div>
  );
}

function Demo() {
  return (
    <NameContext.Provider value="Zainab">
      <div className="rounded-lg bg-gray-800 p-4 text-white">
        <h2 className="font-bold">Parent Component</h2>
        <p>Name is shared with the Child component.</p>
        <Child />
      </div>
    </NameContext.Provider>
  );
}

function Usecontext() {
  return (
    <div className="space-y-4 text-white">
      <div className=" p-4">
        <p>
          useContext is a React Hook used to access shared data
          from a Context without passing props through every component.
        </p>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 font-bold">Why do we use it?</h2>
        <p>
          We use useContext to share data, such as a username or theme,
          with components that need it.
        </p>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 font-bold">How it works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>createContext creates a Context.</li>
          <li>Provider shares a value with child components.</li>
          <li>useContext reads that value.</li>
          <li>The Child component displays the name.</li>
        </ul>
      </div>

      <h2 className="text-lg font-bold">Working Example</h2>
      <Demo />
    </div>
  );
}

export default Usecontext;
