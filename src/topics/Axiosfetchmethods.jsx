import React, { useState } from 'react'
import axios from 'axios'

function Axiosfetchmethods() {
  const [users, setUsers] = useState([])
  const [popup, setPopup] = useState({ show: false, message: '' })

  // Fetch API - GET Method
  const getUsers = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
    const data = await response.json()
    setUsers(data)
  }

  // Axios - POST Method
  const addUser = async () => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      {
        name: 'Zainab',
        email: 'zainab@example.com'
      }
    )

    setPopup({
      show: true,
      message: 'User added: ' + response.data.name
    })
  }

  const closePopup = () => setPopup({ show: false, message: '' })

  return (
    <div className="text-white space-y-4">
      <p>
        HTTP methods tell the server what action we want to perform
        on data. Fetch and Axios help us send these requests.
      </p>

      <h3 className="text-lg font-bold">HTTP Methods</h3>

      <div className="space-y-3">
        <div className="bg-gray-800 p-3 rounded">
          <h4 className="font-bold">1. GET</h4>
          <p>GET is used to receive or read data from a server.</p>
          <p>Example: Getting a list of users.</p>
        </div>

        <div className="bg-gray-800 p-3 rounded">
          <h4 className="font-bold">2. POST</h4>
          <p>POST is used to send new data to a server.</p>
          <p>Example: Sending a new user's name and email.</p>
        </div>

        <div className="bg-gray-800 p-3 rounded">
          <h4 className="font-bold">3. PUT</h4>
          <p>PUT is used to replace existing data with updated data.</p>
          <p>Example: Replacing a user's complete information.</p>
        </div>

        <div className="bg-gray-800 p-3 rounded">
          <h4 className="font-bold">4. PATCH</h4>
          <p>PATCH is used to update only a specific part of existing data.</p>
          <p>Example: Changing only a user's email.</p>
        </div>

        <div className="bg-gray-800 p-3 rounded">
          <h4 className="font-bold">5. DELETE</h4>
          <p>DELETE is used to remove data from a server.</p>
          <p>Example: Deleting a user account.</p>
        </div>
      </div>

      <h3 className="text-lg font-bold">Working Example</h3>

      <p>
        Click the first button to get users using Fetch.
        Click the second button to send new user data using Axios.
      </p>

      <div className="flex flex-wrap gap-3">
        <button onClick={getUsers} className="bg-blue-600 p-2 rounded">
          GET Users (Fetch)
        </button>

        <button onClick={addUser} className="bg-green-600 p-2 rounded">
          POST User (Axios)
        </button>
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <p key={user.id} className="bg-gray-800 p-2 rounded">
            {user.name} — {user.email}
          </p>
        ))}
      </div>

      <h3 className="text-lg font-bold">Remember</h3>

      <p>
        GET = Read | POST = Create | PUT = Replace |
        PATCH = Partial Update | DELETE = Remove
      </p>

      {/* Popup Modal */}
      {popup.show && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold">Success</h3>
            <p>{popup.message}</p>
            <button
              onClick={closePopup}
              className="bg-blue-600 px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Axiosfetchmethods