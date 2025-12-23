export default function QueueView({ queue, highlight }) {
    return (
        <div className="flex items-center justify-center gap-4 min-h-[200px]">

            {/* FRONT MARKER */}
            <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">FRONT</span>
                <div className="h-16 w-1 bg-gray-400 rounded"></div>
            </div>

            {/* QUEUE ITEMS */}
            <div className="flex gap-3">
                {queue.map((val, idx) => (
                    <div
                        key={idx}
                        className={`w-20 h-20 flex items-center justify-center rounded-lg text-white font-semibold
              ${idx === highlight
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                            : "bg-indigo-400"}`}
                    >
                        {val}
                    </div>
                ))}
            </div>

            {/* REAR MARKER */}
            <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">REAR</span>
                <div className="h-16 w-1 bg-gray-400 rounded"></div>
            </div>
        </div>
    );
}
