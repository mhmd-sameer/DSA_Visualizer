import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../Components/Card";
import Explanation from "../../Components/Explanation";
import BinarySearchTreeView from "../../Components/BinarySearchTreeView";

import useVisualizer from "../../Hooks/useVisualizer";
import { bstInsert, bstSearch } from "../../Services/api";

export default function BinarySearchTree() {
    const navigate = useNavigate();

    const initialTree = [50, 30, 70, 20, 40, 60, 80];

    const {
        array,
        active,
        steps,
        stepIndex,
        explanation,
        loadSteps,
        play,
        reset,
    } = useVisualizer(initialTree);

    const [value, setValue] = useState("");

    /* -------------------- AUTO PLAY WHEN STEPS LOAD -------------------- */
    useEffect(() => {
        if (steps.length > 0 && stepIndex === 0) {
            play();
        }
    }, [steps]);

    /* -------------------- INSERT -------------------- */
    const handleInsert = () => {
        if (value === "") return;

        loadSteps(() =>
            bstInsert({
                tree: array,
                value: Number(value),
            }).then(res => res.data)
        );

        setValue("");
    };

    /* -------------------- SEARCH -------------------- */
    const handleSearch = () => {
        if (value === "") return;

        loadSteps(() =>
            bstSearch({
                tree: array,
                value: Number(value),
            }).then(res => res.data)
        );

        setValue("");
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* TOP BAR */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 text-md text-gray-600 hover:text-black font-semibold"
                    >
                        ← Back to Dashboard
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-2">Binary Search Tree</h1>
                <p className="text-gray-600 mb-8 text-xl">
                    Binary tree where left child is smaller and right child is larger
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        <Card title="Complexity">
                            <p className="font-mono text-md">
                                Time: O(log n) avg, O(n) worst <br />
                                Space: O(h)
                            </p>
                        </Card>

                        <Card title="How it Works">
                            <ol className="space-y-2 text-md">
                                <li>① Insert: Compare and go left or right</li>
                                <li>② Search: Similar to binary search</li>
                                <li>③ Delete: Leaf / one child / two children</li>
                                <li>④ Inorder traversal gives sorted order</li>
                            </ol>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <Card title="Visualization" subtitle="Default example">

                            {/* CONTROLS */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Enter value"
                                    className="border rounded-lg px-3 py-2 w-40"
                                />

                                <button
                                    onClick={handleInsert}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    + Insert
                                </button>

                                <button
                                    onClick={handleSearch}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🔍 Search
                                </button>

                                <button
                                    onClick={reset}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🔄 Reset
                                </button>
                            </div>

                            {/* TREE VIEW */}
                            <BinarySearchTreeView
                                tree={array}
                                active={active}
                            />

                            {/* FOOTER */}
                            <div className="mt-6 text-sm text-gray-600 border-t pt-4">
                                Property: Left &lt; Parent &lt; Right | Operations: Insert, Search
                            </div>
                        </Card>

                        <Explanation explanation={explanation} />
                    </div>
                </div>
            </div>
        </div>
    );
}
