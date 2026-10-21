import { useState } from "react";

function Demo() {
  const [data, setData] = useState("");

  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const result = await response.json();
    setData(result.name);
  }

  return (
    <div>
     <p>Example:</p>

      <button className="block p-2 rounded bg-blue-600 text-white my-2 " onClick={getData}>Get User</button>

      <p className="bg-white text-black p-4 mb-3">{data}</p>
    </div>
  );
}
function AsyncAwait() {
  return (
    <div className="text-white">
        <p>Async/Await is used to handle asynchronous operations, like getting data from an API, in a simple and readable way.</p>
        <p>React needs data from an API. Getting this data takes time, so we use async/await to wait for the data before using it.</p>
        <ul className="list-disc ml-4 my-2">
            <li>async: Makes a function asynchronous and allows us to use await inside it</li>
            <li>await: Waits for a Promise to finish before moving to the next line.</li>
            <li>fetch: Sends a request to an API to get data.</li>
        </ul>

        <Demo/>
        <p>async/await helps us handle tasks that take time, such as fetching API data, in a clear and easy way.</p>
    </div>
  )
}

export default AsyncAwait