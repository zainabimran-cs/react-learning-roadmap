function Welcome() {
    return (
        <div className="rounded-lg bg-gray-800 p-4 text-white my-2">
            <h1>This is React Component</h1>
        </div>
    )
}

function ReactComponents() {
    return (
        <div className="text-white">
            <p className=" py-4">A Component is a reusable, independent piece of UI (User Interface) in React. Think of it as a building block — you create it once, and then use it wherever you need it, as many times as you
                want.</p>
            <p className="font-bold">Main Point:</p>
            <p className="pb-4"> Break the UI into small, reusable pieces instead of writing everything in one big
                file.</p>
            <Welcome />
            <Welcome />
            <Welcome/>
        </div>
    )
}

export default ReactComponents