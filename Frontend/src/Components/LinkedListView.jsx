export default function LinkedListView({
                                           list = [],
                                           highlight = -1,
                                           onDelete,
                                       }) {
    return (
        <div className="flex items-center flex-wrap gap-6 mt-8">

            {/* HEAD */}
            <div className="flex flex-col items-center mr-2">
                <span className="text-xs font-semibold text-gray-500">HEAD</span>
                <div className="w-1 h-12 bg-gray-400 mt-1 rounded"></div>
            </div>

            {/* EMPTY */}
            {list.length === 0 && (
                <div className="text-gray-400 italic">Empty List</div>
            )}

            {/* NODES */}
            {list.map((value, index) => (
                <div key={index} className="flex items-center relative">

                    {/* NODE */}
                    <div
                        className={`relative min-w-[90px] px-5 py-4 rounded-xl text-white font-semibold shadow-lg
                        ${
                            index === highlight
                                ? "bg-gradient-to-r from-purple-600 to-indigo-600 scale-105"
                                : "bg-gradient-to-r from-indigo-500 to-blue-500"
                        } transition-all duration-300`}
                    >
                        {/* DELETE ICON */}
                        <button
                            onClick={() => onDelete(index)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white
                                       rounded-full text-xs flex items-center justify-center
                                       hover:bg-red-600 shadow"
                            title="Delete node"
                        >
                            ✕
                        </button>

                        <div className="text-lg text-center">{value}</div>
                        <div className="text-[10px] text-indigo-100 text-center mt-1">
                            pos: {index}
                        </div>

                        {/* POINTER LABEL */}
                        {index === highlight && (
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2
                                            text-xs font-semibold text-indigo-600">
                                pointer
                            </div>
                        )}
                    </div>

                    {/* ARROW */}
                    <div className="mx-4 text-2xl font-bold text-gray-400">
                        →
                    </div>
                </div>
            ))}

            {/* NULL */}
            {list.length > 0 && (
                <div className="flex items-center">
                    <div className="px-4 py-3 border-2 border-dashed rounded-xl
                                    text-gray-500 font-semibold">
                        NULL
                    </div>
                </div>
            )}
        </div>
    );
}
