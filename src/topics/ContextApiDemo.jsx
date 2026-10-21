
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
}

function UserList() {
  const users = useContext(UserContext);

  return (
    <div className="rounded-lg bg-gray-800 p-4 text-white">
      <h2 className="mb-3 text-xl font-bold">Users List</h2>

      {users.map((user) => (
        <p key={user.id} className="border-b border-gray-600 py-2">
          {user.name}
        </p>
      ))}
    </div>
  );
}


function ContextAPIDemo() {
  return (
    <div className="space-y-4 text-white">

     

      <div className="rounded-lg bg-gray-800 p-4">
        <p>
          Context API allows us to share data between components
          without passing props through every component.
        </p>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-bold">Why Do We Use It?</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To share data between components.</li>
          <li>To avoid passing props again and again.</li>
          <li>To access shared data in different components.</li>
        </ul>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-bold">How It Works</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>The API provides users' data.</li>
          <li>useState stores the users' data.</li>
          <li>UserProvider shares the data with child components.</li>
          <li>useContext reads the shared data.</li>
          <li>UserList displays the users' names on the screen.</li>
        </ul>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-bold">Important Terms</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>createContext():</b> Creates a Context.</li>
          <li><b>Provider:</b> Shares data with child components.</li>
          <li><b>useContext():</b> Reads shared data.</li>
          <li><b>fetch():</b> Requests data from an API.</li>
          <li><b>useEffect():</b> Runs the API request when the component loads.</li>
        </ul>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-bold">Working Example</h2>
        <p className="mb-3">
          The following example fetches users from an API and shares
          their data using Context API.
        </p>

        <UserProvider>
          <UserList />
        </UserProvider>
      </div>

      <div className="rounded-lg bg-gray-800 p-4">
        <h2 className="mb-2 text-lg font-bold">Conclusion</h2>
        <p>
          Context API makes it easier to share data between components
          without passing props through every component. In this example,
          it shares API users' data with the UserList component.
        </p>
      </div>

    </div>
  );
}
export default ContextAPIDemo;