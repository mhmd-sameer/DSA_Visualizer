const POS = [
    { x: 400, y: 50 },
    { x: 250, y: 140 },
    { x: 550, y: 140 },
    { x: 170, y: 240 },
    { x: 330, y: 240 },
    { x: 470, y: 240 },
    { x: 630, y: 240 },
];

export default function BinarySearchTreeView({ tree = [], active = [] }) {
    return (
        <div className="relative h-[350px] w-full">
            <svg className="absolute inset-0 w-full h-full">
                <line x1="400" y1="80" x2="250" y2="140" stroke="#CBD5E1" />
                <line x1="400" y1="80" x2="550" y2="140" stroke="#CBD5E1" />
                <line x1="250" y1="170" x2="170" y2="240" stroke="#CBD5E1" />
                <line x1="250" y1="170" x2="330" y2="240" stroke="#CBD5E1" />
                <line x1="550" y1="170" x2="470" y2="240" stroke="#CBD5E1" />
                <line x1="550" y1="170" x2="630" y2="240" stroke="#CBD5E1" />
            </svg>

            {tree.map((v, i) =>
                v !== null && POS[i] ? (
                    <div
                        key={i}
                        className={`absolute w-12 h-12 rounded-full flex items-center justify-center
                            font-semibold shadow
                            ${active.includes(i)
                            ? "bg-yellow-400 text-black"
                            : "bg-indigo-500 text-white"}`}
                        style={{
                            left: POS[i].x - 24,
                            top: POS[i].y,
                        }}
                    >
                        {v}
                    </div>
                ) : null
            )}
        </div>
    );
}
