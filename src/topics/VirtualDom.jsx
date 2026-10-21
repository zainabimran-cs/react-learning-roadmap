function VirtualDom() {
    return (

        <div className="text-white px-2">
            <p className="font-bold pb-2">Virtual DOM:</p>
            <p>Virtual DOM is a lightweight copy of the UI that exists in memory as a JavaScript object. It is not visible on the screen it's just a "draft" or "plan" that React uses internally to figure out what
                should change.</p>
            <ul className="my-2 mx-3 list-disc">
                <li>Lightweight JS object in memory </li>
                <li>Fast to update</li>
                <li>Used by React to plan changes </li>
                <li>Not visible to the user </li>
            </ul>

            <p className="font-bold py-2">Real DOM:</p>
            <p>Real DOM is the actual webpage that the browser renders and displays. This is what the user sees and interacts with directly.</p>
            <ul className="my-2 mx-3 list-disc">
                <li>Actual HTML structure on the page </li>
                <li>Visible — what the user sees </li>
                <li>Slow to update </li>
                <li>Where final changes are actually applied</li>
            </ul>
        </div>

    );
}

export default VirtualDom