import { useState } from "react"


function SinglePageApplication() {
    const [page, setPage] = useState("")
    return (
        <div className="p-6 bg-gray-900 text-white rounded-xl ">
                <div className="pb-4">
                    <p>
         A Single Page Application is a web application that
                    updates content without reloading the whole page.
                </p>

                <p className="mt-2">
                    React uses SPA to provide a fast and smooth user experience.
                </p>

                <p className="mt-2">
                    Example: When we move from one section to another,
                    only the required content changes.
                </p>
                </div>
        
            <div className="flex  gap-3 mb-6">
                <button onClick={() => setPage("Home")} className="block p-2 rounded bg-blue-600 text-white ">Home</button>
                <button onClick={() => setPage("About")} className="block p-2 rounded bg-blue-600 text-white ">About</button>
                <button onClick={() => setPage("Contact")} className="block p-2 rounded bg-blue-600 text-white ">Contact</button>
            </div>


            <div className="bg-gray-800 p-4 rounded-lg">
                {page === "Home" && <h3>Welcome to home page</h3>}
                {page === "About" && <h3>This is about page</h3>}
                {page === "Contact" && <h3>Contact us Page</h3>}
            </div>

        </div >
    )
}

export default SinglePageApplication