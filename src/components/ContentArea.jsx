import { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { chapters } from "../Data/Chapters";
import topicDemos from "../topics";
import { useProgress } from "../context/useProgress";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ContentArea() {
  const { topicId } = useParams();
  const { isCompleted, toggleTopic } = useProgress();
  const done = isCompleted(topicId);

  // Step 1: saare chapters ke topics ek hi list mein jama karo
  const allTopics = [];
  chapters.forEach((chapter) => {
    chapter.topics.forEach((topic) => {
      allTopics.push(topic);
    });
  });

  // Step 2: current topic ki position (index) dhundo
  let currentIndex = -1;
  allTopics.forEach((topic, index) => {
    if (topic.id === topicId) {
      currentIndex = index;
    }
  });

  // Step 3: title, previous aur next topic nikalo
  let title = "";
  let prevTopic = null;
  let nextTopic = null;

  if (currentIndex !== -1) {       //find current topic
    title = allTopics[currentIndex].title;   // agar current topic mil gaya hai to andar wala code chalao. 

    if (currentIndex > 0) { //agar current topic pehla topic nahi hai, to us se pehle wala topic nikaal lo.
      prevTopic = allTopics[currentIndex - 1];
    }

    if (currentIndex < allTopics.length - 1) { //agar current topic aakhri topic nahi hai, to uske baad wala topic nikaal lo.
      nextTopic = allTopics[currentIndex + 1];
    }
  }

  const Demo = topicDemos[topicId];

  return (
    <div className="flex-1 min-w-0 p-3 pt-16 sm:p-6 md:pt-6 bg-gray-950">

      {/* title card */}
      <div className="mb-4 flex flex-col gap-3 rounded-xl border border-gray-700 bg-gray-900 p-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6">
        <h1 className="text-xl font-bold text-white sm:text-2xl">{title}</h1>

        <button
          onClick={() => toggleTopic(topicId)}
          className={`shrink-0 self-start rounded-lg px-4 py-2 text-sm font-medium text-white sm:self-auto ${done ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {done ? "Completed (undo)" : "Mark as read"}
        </button>
      </div>

      {/* demo card */}
      <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 sm:p-6 overflow-x-auto">
        {Demo ? (
          <Suspense fallback={<p className="text-gray-400">loading...</p>}>
            <Demo />
          </Suspense>
        ) : (
          <p className="text-gray-400">Topic not found.</p>
        )}
      </div>

      {/* previous / next buttons */}
      {/* previous / next buttons */}
<div className="mt-4 flex items-center justify-center gap-3 sm:mt-6">
  {prevTopic && (
    <Link
      to={"/topic/" + prevTopic.id}
      className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
    >
      <FaArrowLeft />
      Previous
    </Link>
  )}

  {nextTopic && (
    <Link
      to={"/topic/" + nextTopic.id}
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
    >
      Next
      <FaArrowRight />
    </Link>
  )}
</div>

    </div>
  );
}

export default ContentArea;