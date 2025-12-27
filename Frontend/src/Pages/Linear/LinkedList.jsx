import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from "../../Components/Card";
import Explanation from "../../Components/Explanation";
import LinkedListView from "../../Components/LinkedListView";

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
        steps,
        stepIndex,
        loadSteps,
        play,
    } = useVisualizer(initialList);


    // 🔹 Separate states (VERY IMPORTANT)
    const [insertValue, setInsertValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [deletePosition, setDeletePosition] = useState("");



    useEffect(() => {
        if (steps.length > 0 && stepIndex === 0) {
            play();
        }
    }, [steps]);

    // ✅ INSERT AT HEAD
    const handleInsertHead = () => {
        if (insertValue === "") return;

        loadSteps(() =>
            insertAtHead({
                list: array,
                value: Number(insertValue),
            }).then(res => res.data)
        );

        setInsertValue("");
    };

    // ✅ INSERT AT TAIL
    const handleInsertTail = () => {
        if (insertValue === "") return;

        loadSteps(() =>
            insertAtTail({
                list: array,
                value: Number(insertValue),
            }).then(res => res.data)
        );

        setInsertValue("");
    };

    // ✅ DELETE BY POSITION
    const handleDelete = () => {
        if (deletePosition === "") return;

        loadSteps(() =>
            deleteNode({
                list: array,
                position: Number(deletePosition),
            }).then(res => res.data)
        );

        setDeletePosition("");
    };

    // ✅ DELETE FROM ❌ ICON
    const handleDeleteFromNode = (pos) => {
        loadSteps(() =>
            deleteNode({
                list: array,
                position: pos,
            }).then(res => res.data)
        );
    };

    const handleSearch = () => {
        if (searchValue === "") return;

        loadSteps(() =>
            searchNode({
                list: array,
                value: Number(searchValue),
            }).then(res => res.data)
        );

        setSearchValue("");
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
                                <li>① Insert at Head</li>
                                <li>② Insert at Tail</li>
                                <li>③ Delete by Position</li>
                                <li>④ Search (Traversal)</li>
                            </ol>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <Card title="Visualization" subtitle="Backend-driven linked list">

                            {/* INPUT CONTROLS */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">

                                {/* INSERT VALUE */}
                                <input
                                    value={insertValue}
                                    onChange={(e) => setInsertValue(e.target.value)}
                                    placeholder="Insert value"
                                    className="border rounded-lg px-3 py-2 w-32"
                                />

                                <button
                                    onClick={handleInsertHead}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    + Insert Head
                                </button>

                                <button
                                    onClick={handleInsertTail}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    + Insert Tail
                                </button>

                                {/* DELETE POSITION */}
                                <input
                                    value={deletePosition}
                                    onChange={(e) => setDeletePosition(e.target.value)}
                                    placeholder="Delete pos"
                                    className="border rounded-lg px-3 py-2 w-28"
                                />

                                <button
                                    onClick={handleDelete}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🗑 Delete
                                </button>

                                {/* SEARCH */}
                                <input
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search value"
                                    className="border rounded-lg px-3 py-2 w-32"
                                />

                                <button
                                    onClick={handleSearch}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🔍 Search
                                </button>
                            </div>

                            {/* LINKED LIST VISUALIZATION */}
                            <LinkedListView
                                list={array}
                                highlight={active.length ? active[0] : -1}
                                onDelete={handleDeleteFromNode}
                            />

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
