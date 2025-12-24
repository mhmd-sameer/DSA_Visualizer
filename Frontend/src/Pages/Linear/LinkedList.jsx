import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../Components/Card";
import Explanation from "../../Components/Explanation";
import LinkedListView from "../../Components/LinkedListView";
import VisualizerControls from "../../Components/VisualizationControls";

import useVisualizer from "../../Hooks/useVisualizer";
import {
    insertAtHead,
    insertAtTail,
    deleteNode,
    searchNode,
} from "../../Services/api";

export default function LinkedList() {
    const navigate = useNavigate();

    const initialList = [10, 20, 30, 40];

    const {
        array,
        active,
        explanation,

        loadSteps,
    } = useVisualizer(initialList);

    const [value, setValue] = useState("");
    const [position, setPosition] = useState("");

    // INSERT AT HEAD
    const handleInsertHead = () => {
        if (!value) return;

        loadSteps(() =>
            insertAtHead({
                list: array,
                value: Number(value),
            }).then((res) => res.data)
        );

        setValue("");
    };

    // INSERT AT TAIL
    const handleInsertTail = () => {
        if (!value) return;

        loadSteps(() =>
            insertAtTail({
                list: array,
                value: Number(value),
            }).then((res) => res.data)
        );

        setValue("");
    };

    // DELETE AT POSITION
    const handleDelete = () => {
        if (position === "") return;

        loadSteps(() =>
            deleteNode({
                list: array,
                position: Number(position),
            }).then((res) => res.data)
        );

        setPosition("");
    };

    // SEARCH
    const handleSearch = () => {
        if (!value) return;

        loadSteps(() =>
            searchNode({
                list: array,
                value: Number(value),
            }).then(res => res.data)
        );

        setTimeout(() => play(), 100);

        setValue("");
    };


    const handleDeleteFromNode = (pos) => {
        loadSteps(() =>
            deleteNode({
                list: array,
                position: pos,
            }).then(res => res.data)
        );
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

            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-2">Linked List</h1>
                <p className="text-gray-600 mb-8 text-xl">
                    Linear data structure with nodes stored in non-contiguous memory
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        <Card title="Complexity">
                            <p className="font-mono text-md">
                                Insert Head: O(1) <br />
                                Insert Tail: O(n) <br />
                                Delete: O(n) <br />
                                Search: O(n)
                            </p>
                        </Card>

                        <Card title="How it Works">
                            <ol className="space-y-2 text-md">
                                <li>① Insert at Head: Add node at the beginning</li>
                                <li>② Insert at Tail: Add node at the end</li>
                                <li>③ Delete: Remove node at a position</li>
                                <li>④ Search: Traverse from head</li>
                            </ol>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <Card title="Visualization" subtitle="Backend-driven linked list">
                            {/* INPUT CONTROLS */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Value"
                                    className="border rounded-lg px-3 py-2 w-32"
                                />

                                <input
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    placeholder="Position"
                                    className="border rounded-lg px-3 py-2 w-28"
                                />

                                <button
                                    onClick={handleInsertHead}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    + Insert Head
                                </button>

                                <button
                                    onClick={handleInsertTail}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    + Insert Tail
                                </button>

                                <button
                                    onClick={handleDelete}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🗑 Delete
                                </button>

                                <button
                                    onClick={handleSearch}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🔍 Search
                                </button>
                            </div>

                            {/* VISUALIZER CONTROLS */}


                            {/* LINKED LIST VIEW */}
                            <LinkedListView
                                list={array}
                                highlight={active.length ? active[0] : -1}
                                onDelete={handleDeleteFromNode}
                            />


                            {/* FOOTER */}
                            <div className="mt-6 text-md text-gray-600 border-t pt-4">
                                Length: {array.length}
                            </div>
                        </Card>

                        <Explanation explanation={explanation} />
                    </div>
                </div>
            </div>
        </div>
    );
}
