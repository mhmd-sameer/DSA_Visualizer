import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../Components/Card";
import Explanation from "../../Components/Explanation";
import GraphView from "../../Components/GraphView";

import useVisualizer from "../../Hooks/useVisualizer";
import { dfsTraversal } from "../../Services/api";

export default function GraphDFS() {
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
        queue,        // we reuse this as STACK
        steps,
        stepIndex,
        explanation,
        loadSteps,
        play,
        reset,
    } = useVisualizer([]);

    // ▶ auto-play on load
    useEffect(() => {
        if (steps.length > 0 && stepIndex === 0) {
            play();
        }
    }, [steps]);

    const startDFS = () => {
        loadSteps(() =>
            dfsTraversal({
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
                        onClick={() => navigate("/algorithms")}
                        className="flex items-center gap-2 text-md text-gray-600 hover:text-black font-semibold"
                    >
                        ← Back to Dashboard
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-2">Graph DFS</h1>
                <p className="text-gray-600 mb-8 text-xl">
                    Traverses graph by exploring as far as possible along each branch
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
                                <li>② Go as deep as possible</li>
                                <li>③ Use a stack (or recursion)</li>
                                <li>④ Backtrack when no neighbors</li>
                            </ol>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <Card title="Visualization" subtitle="Default example">

                            {/* CONTROLS */}
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={startDFS}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    ▶ Start DFS
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
                                queue={queue} // treated as STACK
                            />

                            {/* LEGEND */}
                            <div className="flex gap-6 mt-6 text-sm">
                                <span>🔵 Unvisited</span>
                                <span>🟠 In Stack</span>
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
