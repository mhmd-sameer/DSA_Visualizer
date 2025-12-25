const NODES = {
    0: { x: 400, y: 50 },
    1: { x: 250, y: 150 },
    2: { x: 550, y: 150 },
    3: { x: 200, y: 260 },
    4: { x: 400, y: 260 },
    5: { x: 600, y: 260 },
};

const EDGES = [
    [0, 1], [0, 2],
    [1, 3], [1, 4],
    [2, 4], [2, 5],
];

export default function GraphView({ active = [], queue = [], visited = [] }) {

    const color = (id) => {
        if (active.includes(id)) return "bg-yellow-400 text-black";
        if (queue.includes(id)) return "bg-purple-500 text-white";
        if (visited.includes(id)) return "bg-green-500 text-white";
        return "bg-indigo-500 text-white";
    };

    return (
        <div className="relative h-[350px]">

            {/* EDGES */}
            <svg className="absolute inset-0 w-full h-full">
                {EDGES.map(([u, v], i) => (
                    <line
                        key={i}
                        x1={NODES[u].x}
                        y1={NODES[u].y}
                        x2={NODES[v].x}
                        y2={NODES[v].y}
                        stroke="#CBD5E1"
                        strokeWidth="2"
                    />
                ))}
            </svg>

            {/* NODES */}
            {Object.entries(NODES).map(([id, pos]) => (
                <div
                    key={id}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center
                        font-semibold shadow transition-all duration-300
                        ${color(Number(id))}`}
                    style={{
                        left: pos.x - 24,
                        top: pos.y - 24,
                    }}
                >
                    {id}
                </div>
            ))}
        </div>
    );
}
