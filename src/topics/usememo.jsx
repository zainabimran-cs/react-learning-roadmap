
import React, { useMemo, useState } from 'react';

function Demo() {
    const [number, setNumber] = useState(2);
    const [count, setCount] = useState(0);

    const square = useMemo(() => {
        console.log('Calculating square...');
        return number * number;
    }, [number]);

    return (
        <div className="rounded-lg bg-gray-800 p-4 text-white">
            <h2 className="mb-3 text-xl font-bold">
                Number: {number}
            </h2>

            <p className="mb-3">Square: {square}</p>

            <button
                className="mr-2 rounded bg-blue-600 px-4 py-2"
                onClick={() => setNumber(number + 1)}>
                Change Number
            </button>

            <button
                className="rounded bg-green-600 px-4 py-2"
                onClick={() => setCount(count + 1)}>
                Re-render: {count}
            </button>
        </div>
    );
}

function Usememo() {
    return (
        <div className="space-y-4 text-white">

            <div className="rounded-lg bg-gray-800 p-4">
                <p>
                    useMemo is a React Hook used to remember the result
                    of a calculation.
                </p>
            </div>

            <div className="rounded-lg bg-gray-800 p-4">
                <h2 className="mb-2 font-bold">Why do we use it?</h2>
                <p>
                    Normally, a calculation may run again when a component
                    re-renders. useMemo helps React reuse the saved result
                    when its dependencies have not changed.
                </p>
            </div>
            <h2 className="mb-2 mt-4 font-bold">What is a Dependency?</h2>

            <p>
                A dependency is a value that React checks to know when
                to calculate the result again.
            </p>

            <div className="rounded-lg bg-gray-800 p-4">

                <h2 className="mb-2 font-bold">How it works</h2>

                <ul className="list-disc space-y-2 pl-5">
                    <li>useMemo remembers the result of a calculation.</li>
                    <li>React reuses the saved result when dependencies do not change.</li>
                    <li>If a dependency changes, React calculates the result again.</li>
                </ul>
            </div>
            <h2 className="text-lg font-bold">Working Example</h2>
            <Demo />
        </div>
    );
}

export default Usememo;
