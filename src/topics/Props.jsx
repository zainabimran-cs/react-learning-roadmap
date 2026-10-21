
function Child(props) {
  return (
    <div className="mt-3 rounded-lg bg-gray-800 p-4">
      <h3 className="mb-3 font-bold text-green-400">
        Child Component
      </h3>

      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

function Props() {
  return (
    <div className="space-y-4 p-4 text-white">
      <p>
        Props are read-only data passed from a parent component
        to a child component.
      </p>

      <div className="rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-lg font-bold text-blue-400">
          Parent Component
        </h2>

        <p>The parent sends these values to Child:</p>

        <Child
          name="Zainab"
          email="zainab@gmail.com"
          course="BS Computer Science"
        />
      </div>
    </div>
  );
}

export default Props;
