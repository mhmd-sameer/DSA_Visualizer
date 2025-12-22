export default function StackView({ stack, highlight }) {
    return (
        <div className="flex flex-col items-center justify-end min-h-[300px]">
            {stack.map((val, idx) => (
                <div
                    key={idx}
                    className={`w-48 py-4 my-1 rounded-lg text-center text-white font-semibold
            ${idx === highlight
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                        : "bg-indigo-400"}`}
                >
                    {val} {idx === highlight && "(Top)"}
                </div>
            ))}
            <div className="w-48 h-2 bg-gray-800 rounded mt-2"></div>
        </div>
    );
}
