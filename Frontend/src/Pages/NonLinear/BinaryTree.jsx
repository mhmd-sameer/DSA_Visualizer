import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import Explanation from "../../Components/Explanation";
import BinaryTreeView from "../../Components/BinaryTreeView";

import useVisualizer from "../../Hooks/useVisualizer";
import {
    inorderTraversal,
    preorderTraversal,
    postorderTraversal,
} from "../../Services/api";

export default function BinaryTree() {
    const navigate = useNavigate();

    const {
        array,
        active,
        visited,
        explanation,
        loadSteps,
        play,
        reset,
    } = useVisualizer([1,2,3,4,5,6,7]);

    return (
        <div className="min-h-screen bg-gray-50">

            {/* TOP BAR */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <button
                        onClick={() => navigate("/algorithms")}
                        className="text-gray-600 font-semibold"
                    >
                        ← Back to Dashboard
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-2">Binary Tree</h1>
                <p className="text-gray-600 mb-8 text-xl">
                    Tree data structure where each node has at most two children
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <div className="space-y-6">
                        <Card title="Complexity">
                            <p className="font-mono text-md">
                                Time: O(n) traversal<br/>
                                Space: O(h)
                            </p>
                        </Card>

                        <Card title="How it Works">
                            <ol className="space-y-2 text-md">
                                <li>① Preorder: Root, Left, Right</li>
                                <li>② Inorder: Left, Root, Right</li>
                                <li>③ Postorder: Left, Right, Root</li>
                            </ol>
                        </Card>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-2">
                        <Card title="Visualization">

                            {/* CONTROLS */}
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={() => {
                                        loadSteps(() => inorderTraversal().then(r => r.data));
                                        setTimeout(play, 100);
                                    }}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    ▶ Inorder
                                </button>

                                <button
                                    onClick={() => {
                                        loadSteps(() => preorderTraversal().then(r => r.data));
                                        setTimeout(play, 100);
                                    }}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    ▶ Preorder
                                </button>

                                <button
                                    onClick={() => {
                                        loadSteps(() => postorderTraversal().then(r => r.data));
                                        setTimeout(play, 100);
                                    }}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    ▶ Postorder
                                </button>

                                <button
                                    onClick={reset}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    🔄 Reset
                                </button>
                            </div>

                            {/* TREE */}
                            <BinaryTreeView
                                active={active}
                                visited={visited}
                            />

                            <div className="flex gap-6 mt-6 text-sm">
                                <span className="flex items-center gap-2">
                                  🟣 Unvisited
                                </span>
                                <span className="flex items-center gap-2">
                                  🟡 Current
                                </span>
                                <span className="flex items-center gap-2">
                                  🟢 Visited
                                </span>
                            </div>
                        </Card>

                        <Explanation explanation={explanation} />
                    </div>
                </div>
            </div>
        </div>
    );
}
