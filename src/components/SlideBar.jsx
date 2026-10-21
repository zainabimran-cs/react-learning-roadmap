import { Link, useParams } from "react-router-dom";
import { chapters } from "../Data/Chapters";

function SlideBar({ open, onClose }) {
    const { topicId } = useParams();

    return (
        <>
            {/* Overlay - sirf mobile par jab sidebar khuli ho */}
            {open && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-60"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed inset-y-0 left-0 z-70 w-64 sm:w-72 transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 md:sticky md:top-0 md:z-auto md:shrink-0
                    bg-gray-900 text-white p-4 h-screen overflow-y-auto
                `}
            >
                {/* Close button - sirf mobile par */}
                <button
                    onClick={onClose}
                    className="md:hidden absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
                    aria-label="Close menu"
                >
                    ✕
                </button>

                {chapters.map((chapter) => (
                    <div key={chapter.id}>
                        <h3 className="font-bold my-2 pr-8 md:pr-0">
                            {chapter.id}: {chapter.title}
                        </h3>
                        {chapter.topics.map((topic) => {
                            let style = "block p-2 rounded text-gray-300 hover:bg-gray-800";
                            if (String(topic.id) === topicId) {
                                style = "block p-2 rounded bg-blue-600 text-white";
                            }
                            return (
                                <div key={topic.id}>
                                    <Link
                                        className={style}
                                        to={"/topic/" + topic.id}
                                        onClick={onClose}
                                    >
                                        {topic.title}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
}

export default SlideBar;