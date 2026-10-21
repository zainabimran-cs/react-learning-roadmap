import { Link } from "react-router-dom"

function TopicCard(props) {
    return (
        <Link to={"/topic/" + props.id} className="block h-full">
           <div className="flex h-full cursor-pointer items-center justify-between rounded-xl border border-gray-700 bg-gray-900 p-4 hover:border-blue-400">
                <p className=" flex-1 text-white">{props.title}</p>
                {props.done && (
                   <span className="ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-green-400 font-bold text-green-400">✓</span>
                )}
            </div>
        </Link>
    )
}

export default TopicCard
// TopicCard.jsx sirf ek card ka structure hai, aur Home.jsx mein map us card ko har topic ke liye baar baar banata hai.