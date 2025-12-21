export default function Bars({ array, active, sorted, pivotIndex }) {
    return (
        <div className="h-64 bg-gray-100 rounded-xl flex items-end justify-center gap-3 p-6">
            {array.map((value, index) => (
                <div
                    key={index}
                    className={`w-14 rounded-lg text-white text-md flex items-end justify-center pb-2 pt-8 transition-all duration-300
                        ${
                        sorted.includes(index)
                            ? "bg-green-500"
                            : pivotIndex === index
                                ? "bg-yellow-500"
                                : active.includes(index)
                                    ? "bg-red-500"
                                    : "bg-indigo-500"
                    }
                    `}
                    style={{ height: `${value * 2}px` }}
                >
                    {value}
                </div>
            ))}
        </div>
    );
}
