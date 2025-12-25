const NODE_POSITIONS = [
    { x: 400, y: 40 },   // 1
    { x: 250, y: 130 },  // 2
    { x: 550, y: 130 },  // 3
    { x: 170, y: 230 },  // 4
    { x: 330, y: 230 },  // 5
    { x: 470, y: 230 },  // 6
    { x: 630, y: 230 },  // 7
];

export default function BinaryTreeView({ active = [], visited = [] }) {
    const getNodeStyle = (index) => {
        if (active.includes(index)) {
            return "bg-yellow-400 text-black";
        }
        if (visited.includes(index)) {
            return "bg-green-500 text-white";
        }
        return "bg-indigo-500 text-white";
    };

    return (
        <div className="relative w-full h-[350px] bg-gray-50 rounded-xl overflow-hidden">

            {/* LINES */}
            <svg className="absolute inset-0 w-full h-full">
                <line x1="400" y1="70" x2="250" y2="130" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="400" y1="70" x2="550" y2="130" stroke="#CBD5E1" strokeWidth="2" />

                <line x1="250" y1="160" x2="170" y2="230" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="250" y1="160" x2="330" y2="230" stroke="#CBD5E1" strokeWidth="2" />

                <line x1="550" y1="160" x2="470" y2="230" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="550" y1="160" x2="630" y2="230" stroke="#CBD5E1" strokeWidth="2" />
            </svg>

            {/* NODES */}
            {NODE_POSITIONS.map((pos, index) => (
                <div
                    key={index}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center
                        font-semibold shadow-md transition-all duration-300
                        ${getNodeStyle(index)}`}
                    style={{
                        left: pos.x - 24,
                        top: pos.y,
                    }}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
}
