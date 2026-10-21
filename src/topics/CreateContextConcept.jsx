import { createContext, useContext, useState } from 'react';

const NameContext = createContext();

function Child() {
  const { name } = useContext(NameContext);

  return (
    <div className="mt-3 rounded-lg bg-gray-700 p-3">
      <h3 className="font-bold">Child Component</h3>
      <p>My name is {name}</p>
    </div>
  );
}

function Demo() {
  const [name, setName] = useState('Zainab');

  return (
    <NameContext.Provider value={{ name }}>
      <div className="rounded-lg bg-gray-800 p-4 text-white">
        <h2 className="font-bold">Parent Component</h2>

        <p className="my-2">Name: {name}</p>

        <button
          className="rounded bg-blue-600 px-4 py-2"
          onClick={() => setName('Ayesha')} >
          Change Name
        </button>

        <Child />
      </div>
    </NameContext.Provider>
  );
}

function CreateContextConcept() {
  return (
    <div className="space-y-4 text-white">
      <div className="rounded-lg bg-gray-800 p-4">
        <p>
          Context API allows us to share data between components
          without passing props through every component.
        </p>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 font-bold">How it works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>createContext() creates a Context.</li>
          <li>useState() stores and updates the name.</li>
          <li>Provider shares the name with child components.</li>
          <li>useContext() reads the shared name.</li>
          <li>When the name changes, the displayed name updates.</li>
        </ul>
      </div>

      <h2 className="text-lg font-bold">Working Example</h2>
      <Demo />
    </div>
  );
}

export default CreateContextConcept;
