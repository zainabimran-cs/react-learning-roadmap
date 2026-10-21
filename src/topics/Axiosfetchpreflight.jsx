
import React, { useState } from 'react'
import axios from 'axios'

function Axiosfetchpreflight() {
  const [result, setResult] = useState('')

  // Fetch API
  const sendFetchRequest = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: 'Hello',
            body: 'Learning React',
            userId: 1
          })
        }
      )

      const data = await response.json()
      setResult('Fetch: Request sent successfully! ID: ' + data.id)
    } catch (error) {
      setResult('Fetch Error: ' + error.message)
    }
  }

  // Axios
  const sendAxiosRequest = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: 'Hello',
          body: 'Learning React',
          userId: 1
        }
      )

      setResult('Axios: Request sent successfully! ID: ' + response.data.id)
    } catch (error) {
      setResult('Axios Error: ' + error.message)
    }
  }

  return (
    <div className="text-white space-y-4">
      <p>
        A preflight request is a check sent by the browser before
        certain cross-origin requests. It asks the server if the
        actual request is allowed.
      </p>

      <div className="bg-gray-800 p-3 rounded space-y-2">
        <h3 className="font-bold">How It Works</h3>

        <p>1. Our website sends a request to another origin.</p>
        <p>2. The browser checks whether a preflight is needed.</p>
        <p>3. If needed, the browser sends an OPTIONS request first.</p>
        <p>4. The server responds with CORS permission headers.</p>
        <p>5. If allowed, the browser sends the actual request.</p>
      </div>

      <h3 className="text-lg font-bold">Working Example</h3>

      <p>
        Both buttons send a JSON POST request. The browser may
        send an OPTIONS preflight request before the POST request.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={sendFetchRequest}
          className="bg-blue-600 p-2 rounded"
        >
          Test with Fetch
        </button>

        <button
          onClick={sendAxiosRequest}
          className="bg-green-600 p-2 rounded"
        >
          Test with Axios
        </button>
      </div>

      {result && (
        <p className="bg-gray-800 p-3 rounded">
          {result}
        </p>
      )}

      <div className="border border-gray-600 p-3 rounded">
        <h3 className="font-bold">Remember</h3>
        <p>
          Fetch and Axios do not independently send preflight
          requests. The browser handles preflight when a
          cross-origin request requires it.
        </p>
      </div>
    </div>
  )
}

export default Axiosfetchpreflight
