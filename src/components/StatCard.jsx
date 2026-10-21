// Ye ek card hai. Isay bahar se 5 cheezein (props) milti hain:
// icon, value, label, color, bg
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function StatCard(props) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#141414] p-5">
            
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-800">
                <FontAwesomeIcon icon={props.icon} className={props.color} size="lg" />
            </div>

            {/* Number aur naam */}
            <div>
                <p className={"text-2xl font-bold " + props.color}>{props.value}</p>
                <p className="text-sm text-gray-400">{props.label}</p>
            </div>
        </div>
    )
}

export default StatCard