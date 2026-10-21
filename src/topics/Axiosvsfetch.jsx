
import React, { useState } from 'react'
import axios from 'axios'

function Axiosvsfetch() {
  const [fetchData, setFetchData] = useState('')
  const [axiosData, setAxiosData] = useState('')

  // Fetch API
  const getFetchData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    )

    const data = await response.json()
    setFetchData(data.name)
  }

  // Axios
  const getAxiosData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    )

    setAxiosData(response.data.name)
  }

  return (
    <div className="text-white space-y-4">
      <p>
        Fetch and Axios are used to send HTTP requests to a server
        and receive data from it.
      </p>

      <h3 className="text-lg font-bold">Main Differences</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-600">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2 border border-gray-600">Fetch</th>
              <th className="p-2 border border-gray-600">Axios</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-2 border border-gray-600">
                Built into modern browsers.
              </td>
              <td className="p-2 border border-gray-600">
                Requires installation.
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-gray-600">
                Uses response.json() to read JSON data.
              </td>
              <td className="p-2 border border-gray-600">
                Reads JSON data through response.data.
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-gray-600">
                HTTP errors like 404 do not automatically throw an error.
              </td>
              <td className="p-2 border border-gray-600">
                HTTP errors like 404 reject the request by default.
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-gray-600">
                JSON data is converted manually.
              </td>
              <td className="p-2 border border-gray-600">
                JSON data is usually converted automatically.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold">Working Example</h3>

      <p>
        Click each button to get the same user's name using a
        different method.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={getFetchData}
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          Get Data with Fetch
        </button>

        <button
          onClick={getAxiosData}
          className="bg-green-600 hover:bg-green-700 p-2 rounded"
        >
          Get Data with Axios
        </button>
      </div>

      {fetchData && (
        <p className="bg-gray-800 p-3 rounded">
          Fetch Result: {fetchData}
        </p>
      )}

      {axiosData && (
        <p className="bg-gray-800 p-3 rounded">
          Axios Result: {axiosData}
        </p>
      )}

      <h3 className="text-lg font-bold">Remember</h3>

      <p>
        Fetch is built into the browser. Axios is a separate
        library. Both can send requests and receive server data.
      </p>
    </div>
  )
}

export default Axiosvsfetch