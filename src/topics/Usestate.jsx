
import { useState } from 'react';

function Demo() {
    const [color, setColor] = useState('bg-red-500');

    return (
        <div>
            <div className={`h-32 rounded-lg ${color}`}></div>

            <div className="mt-4 flex gap-3">
                <button
                    className="rounded bg-red-500 px-4 py-2 text-white"
                    onClick={() => setColor('bg-red-500')}>
                    Red
                </button>

                <button
                    className="rounded bg-green-500 px-4 py-2 text-white"
                    onClick={() => setColor('bg-green-500')}>
                    Green
                </button>

                <button
                    className="rounded bg-blue-500 px-4 py-2 text-white"
                    onClick={() => setColor('bg-blue-500')}>
                    Blue
                </button>
            </div>
        </div>
    );
}

function Usestate() {
    return (
        <div className="text-white">
            <p className="my-2">
                useState is a React Hook used to store and update data
                in a component.
            </p>

            <p className="my-2">
                It returns two values:
            </p>

            <ul className="ml-5 list-disc">
                <li>Current state: The current value.</li>
                <li>Setter function: Updates the value.</li>
            </ul>

            <h3 className="my-4 font-bold">Demo</h3>

            <Demo />
        </div>
    );
}

export default Usestate;
