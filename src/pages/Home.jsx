import StatCard from "../components/StatCard"
import { chapters } from "../Data/Chapters"
import TopicCard from "../components/TopicCard";
import { useProgress } from "../context/useProgress";
import {
  faBookOpen,
  faCircleCheck,
  faClock,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  // state ab context se aa rahi hai (useState aur toggleTopic yahan se hata diye)
  const { completed: completeIds, isCompleted } = useProgress();

  let total = 0;
  for (let i = 0; i < chapters.length; i++) {
    total = total + chapters[i].topics.length;
  }

  const completed = completeIds.length;
  const pending = total - completed;
  const units = chapters.length;

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="mb-6 rounded-xl border border-gray-700 bg-gray-900 p-6">
        <h1 className="mb-2 text-2xl font-bold text-white">React Introduction</h1>
        <p className="mb-3 text-gray-400">What is React?</p>
        <ul className="list-disc space-y-1 pl-5 text-gray-300">
          <li>React is a front-end JavaScript library.</li>
          <li>React was developed by the Facebook Software Engineer Jordan Walke.</li>
          <li>React is also known as React.js or ReactJS.</li>
          <li>React is a tool for building UI components.</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <StatCard icon={faBookOpen} value={total} label="Total Topics" color="text-blue-400" />
        <StatCard icon={faCircleCheck} value={completed} label="Completed" color="text-green-400" />
        <StatCard icon={faClock} value={pending} label="Pending" color="text-yellow-400" />
        <StatCard icon={faLayerGroup} value={units} label="Units / Chapters" color="text-purple-400" />
      </div>

      {chapters.map((chapter) => (
        <div key={chapter.id} className="mt-8">
          <h2 className="mb-3 text-xl font-bold text-white">Chap {chapter.id}: {chapter.title}</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chapter.topics.map((topic) => (
              <TopicCard
                key={topic.id}
                id={topic.id}
                title={topic.title}
                done={isCompleted(topic.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home