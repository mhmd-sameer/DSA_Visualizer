import { useState } from "react";
import {useNavigate} from "react-router-dom";
import StackView from "../../Components/StackView";
import Explanation from "../../Components/Explanation";

export default function Stack() {
    const [stack, setStack] = useState([10, 20, 30]);
    const [value, setValue] = useState("");
    const [highlight, setHighlight] = useState(stack.length - 1);
    const [explanation, setExplanation] = useState("Top element is 30");

    const navigate = useNavigate();
    const push = () => {
        if (!value) return;
        const newStack = [...stack, Number(value)];
        setStack(newStack);
        setHighlight(newStack.length - 1);
        setExplanation(`Pushed ${value} to top of stack`);
        setValue("");
    };

    const pop = () => {
        if (stack.length === 0) {
            setExplanation("Stack is empty");
            return;
        }
        const popped = stack[stack.length - 1];
        const newStack = stack.slice(0, -1);
        setStack(newStack);
        setHighlight(newStack.length - 1);
        setExplanation(`Popped ${popped} from stack`);
    };

    const peek = () => {
        if (stack.length === 0) {
            setExplanation("Stack is empty");
            return;
        }
        setHighlight(stack.length - 1);
        setExplanation(`Top element is ${stack[stack.length - 1]}`);
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
                <h1 className="text-4xl font-bold">Stack</h1>
                <p className="text-gray-600 mt-2">
                    LIFO (Last In First Out) data structure
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">

                        {/* Complexity */}
                        <div className="bg-white rounded-xl p-6 shadow">
                            <h3 className="font-semibold text-lg mb-2">Complexity</h3>
                            <p className="font-mono text-sm">
                                Time: O(1) for push/pop | Space: O(n)
                            </p>
                        </div>

                        {/* How it works */}
                        <div className="bg-white rounded-xl p-6 shadow">
                            <h3 className="font-semibold text-lg mb-4">How it Works</h3>
                            <p className="text-gray-600 mb-4">
                                Stack is a linear data structure that follows LIFO (Last In First
                                Out) principle. Elements are added and removed from the same end
                                called the top.
                            </p>

                            <ol className="space-y-2 text-sm">
                                <li>① Push: Add element to top</li>
                                <li>② Pop: Remove element from top</li>
                                <li>③ Peek: View top element</li>
                                <li>④ IsEmpty: Check if stack is empty</li>
                            </ol>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 shadow">

                            <h3 className="font-semibold text-lg mb-4">Visualization</h3>

                            {/* Controls */}
                            <div className="flex items-center gap-3 mb-6">
                                <input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Enter value"
                                    className="border rounded-lg px-3 py-2 w-40"
                                />

                                <button
                                    onClick={push}
                                    className="bg-black text-white px-4 py-2 rounded-lg"
                                >
                                    + Push
                                </button>

                                <button
                                    onClick={pop}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    − Pop
                                </button>

                                <button
                                    onClick={peek}
                                    className="border px-4 py-2 rounded-lg"
                                >
                                    👁 Peek
                                </button>
                            </div>

                            {/* Stack Visualization */}
                            <StackView stack={stack} highlight={highlight} />

                            {/* Footer */}
                            <div className="mt-6 text-sm text-gray-600 border-t pt-4">
                                Size: {stack.length} | Operations: Push (add to top), Pop (remove
                                from top), Peek (view top)
                            </div>
                        </div>

                        <Explanation explanation={explanation} />
                    </div>
                </div>
            </div>
        </div>
    );
}
