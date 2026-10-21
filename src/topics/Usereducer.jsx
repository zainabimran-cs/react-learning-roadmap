import { useReducer } from 'react';

function reducer(count, action) {
    if (action === 'increase') {
        return count + 1;
    }

    if (action === 'decrease') {
        return count - 1;
    }

    return count;
}

function Demo() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="rounded-lg bg-gray-800 p-4 text-white">
            <h2 className="mb-3 text-xl font-bold">
                Count: {count}
            </h2>

            <button
                className="mr-2 rounded bg-green-600 px-4 py-2"
                onClick={() => dispatch('increase')}>
                Increase +
            </button>

            <button
                className="rounded bg-red-600 px-4 py-2"
                onClick={() => dispatch('decrease')}>
                Decrease -
            </button>
        </div>
    );
}

function Usereducer() {
    return (
        <div className="space-y-4 text-white">
            <h1 className="text-2xl font-bold">useReducer()</h1>

            <p>
                useReducer is a React Hook used to manage state
                by using actions and a reducer function.
            </p>

            <p>
                It works like useState, but it uses a different
                way to update the state.
            </p>

            <div className="rounded-lg bg-gray-800 p-4">
                <h2 className="mb-2 font-bold">How it works</h2>

                <ul className="list-disc space-y-1 pl-5">
                    <li>The user clicks a button.</li>
                    <li>dispatch sends an action.</li>
                    <li>The reducer checks the action.</li>
                    <li>The count is updated.</li>
                </ul>
            </div>

            <h2 className="text-lg font-bold">Working Example</h2>
            <Demo />
        </div>
    );
}

export default Usereducer;
