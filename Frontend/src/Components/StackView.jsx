export default function StackView({ stack, highlight }) {
    return (
        <div className="flex flex-col items-center justify-end min-h-[320px]">

            {/* STACK ITEMS (RENDERED TOP FIRST) */}
            <div className="flex flex-col items-center">
                {[...stack].reverse().map((val, idx) => {
                    const actualIndex = stack.length - 1 - idx;

                    return (
                        <div
                            key={actualIndex}
                            className={`w-48 py-4 my-1 rounded-lg text-center text-white font-semibold
                ${actualIndex === highlight
                                ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                                : "bg-indigo-400"}`}
                        >
                            {val} {actualIndex === highlight && "(Top)"}
                        </div>
                    );
                })}
            </div>

            {/* BASE */}
            <div className="w-48 h-2 bg-gray-800 rounded mt-2"></div>
        </div>
    );
}
