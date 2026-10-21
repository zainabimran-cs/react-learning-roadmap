import { useState } from "react";

function Lists() {
  const [vehicles, setVehicles] = useState([
    "Car",
    "Aeroplane",
    "Cycle",
    "Bus",
  ]);

  const [newVehicle, setNewVehicle] = useState("");

  function addVehicle() {
    if (newVehicle.trim() === "") return;

    setVehicles((prev) => [...prev, newVehicle.trim()]);
    setNewVehicle("");
  }

  function deleteVehicle(indexToDelete) {
    setVehicles((prev) =>
      prev.filter((vehicle, index) => index !== indexToDelete)
    );
  }

  return (
    <div className="rounded-lg bg-gray-800 p-4">
      <p className="mb-3 font-bold">List of Vehicles</p>

      <div className="flex flex-wrap gap-2">
        <input
          className="rounded p-2 text-white"
          placeholder="Enter vehicle"
          value={newVehicle}
          onChange={(e) => setNewVehicle(e.target.value)}
        />

        <button
          className="rounded bg-blue-600 px-4 py-2"
          onClick={addVehicle}
        >
          Add Vehicle
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {vehicles.map((vehicle, index) => (
          <li
            key={`${vehicle}-${index}`}
            className="flex items-center justify-between gap-3 rounded bg-gray-700 p-2"
          >
            <span>
              {vehicle} Index: {index}
            </span>

            <button
              className="rounded bg-blue-600 px-3 py-1"
              onClick={() => deleteVehicle(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Keys() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Amna" },
    { id: 3, name: "Sara" },
  ]);

  function deleteStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  return (
    <div className="rounded-lg bg-gray-800 p-4">
      <p className="mb-3 font-bold">Students and Their Keys</p>

      {students.map((student) => (
        <div
          key={student.id}
          className="mb-2 flex items-center justify-between rounded bg-gray-700 p-3"
        >
          <span>
            {student.name} (ID: {student.id})
          </span>

          <button
            className="rounded bg-blue-600 px-3 py-1"
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </div>
      ))}

      {students.length === 0 && <p>No students left.</p>}
    </div>
  );
}

function ListsAndKeys() {
  return (
    <div className="space-y-5 p-4 text-white">
      <section>
        <p className="mb-3">
          Lists display multiple items from an array. React's map()
          method creates an element for each item.
        </p>
        <Lists />
      </section>

      <section>
        <p className="mb-3">
          Keys help React identify list items when items are added
          or removed. Each student uses a unique ID as its key.
        </p>
        <Keys />
      </section>
    </div>
  );
}

export default ListsAndKeys;
