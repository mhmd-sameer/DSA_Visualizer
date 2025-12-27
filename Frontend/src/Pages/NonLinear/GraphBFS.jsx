import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../Components/Card";
import Explanation from "../../Components/Explanation";
import GraphView from "../../Components/GraphView";

import useVisualizer from "../../Hooks/useVisualizer";
import { bfsTraversal } from "../../Services/api";

export default function GraphBFS() {
    const navigate = useNavigate();

    const graph = {
        0: [1, 2],
        1: [0, 3, 4],
        2: [0, 4, 5],
        3: [1],
        4: [1, 2],
        5: [2],
    };

    const {
        active,
        visited,
        queue,
        steps,
        stepIndex,
        explanation,
        loadSteps,
        play,
        reset,
    } = useVisualizer([]);

    // ▶ Auto-play when steps load
    useEffect(() => {
        if (steps.length > 0 && stepIndex === 0) {
            play();
        }
    }, [steps]);

    const startBFS = () => {
        loadSteps(() =>
            bfsTraversal({
                graph,
                start: 0,
            }).then(res => res.data)
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* TOP BAR */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <button
                        onClick={() => navigate("/algorithm")}
                        className="flex items-center gap-2 text-md text-gray-600 hover:text-black font-semibold"
                    >
                        ← Back to Dashboard
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-2">Graph BFS</h1>
                <p className="text-gray-600 mb-8 text-xl">
                    Traverses graph level by level using breadth-first approach
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        <Card title="Complexity">
                            <p className="font-mono text-md">
                                Time: O(V + E) <br />
                                Space: O(V)
                            </p>
                        </Card>

                        <Card title="How it Works">
                            <ol className="space-y-2 text-md">
                                <li>① Start from source vertex</li>
                                <li>② Visit neighbors level by level</li>
                                <li>③ Use a queue</li>
                                <li>④ Mark vertices as visited</li>
                            </ol>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <Card title="Visualization" subtitle="Default example">

                            {/* CONTROLS */}
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={startBFS}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    ▶ Start BFS
                                </button>

                                <button
                                    onClick={reset}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🔄 Reset
                                </button>
                            </div>

                            {/* GRAPH */}
                            <GraphView
                                active={active}
                                visited={visited}
                                queue={queue}
                            />

                            {/* LEGEND */}
                            <div className="flex gap-6 mt-6 text-sm">
                                <span>🟣 Unvisited</span>
                                <span>🟪 In Queue</span>
                                <span>🟡 Current</span>
                                <span>🟢 Visited</span>
                            </div>
                        </Card>

                        <Explanation explanation={explanation} />
                    </div>
                </div>
            </div>
        </div>
    );
}
