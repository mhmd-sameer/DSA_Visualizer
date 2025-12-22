import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explanation from "../../components/Explanation";
import StackView from "../../Components/StackView.jsx";
import { stackPush, stackPop, stackPeek } from "../../Services/api.js";

export default function Stack() {
    const [steps, setSteps] = useState([]);
    const [stepIndex, setStepIndex] = useState(0);
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    // current step (can be undefined on first render)
    const currentStep = steps[stepIndex];

    // safe stack fallback
    const stackArray = currentStep?.array || [10, 20, 30];

    // ✅ CORRECT loadSteps (CALLS the function)
    const loadSteps = async (fetcherFn) => {
        try {
            const res = await fetcherFn();
            setSteps(res.data);
            setStepIndex(0);
        } catch (err) {
            console.error("Stack API error:", err);
        }
    };

    const push = () => {
        if (!value) return;

        loadSteps(() =>
            stackPush({
                stack: stackArray,
                value: Number(value),
            })
        );

        setValue("");
    };

    const pop = () => {
        loadSteps(() =>
            stackPop({
                stack: stackArray,
            })
        );
    };

    const peek = () => {
        loadSteps(() =>
            stackPeek({
                stack: stackArray,
            })
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-10">

                {/* Back button */}
                <button
                    onClick={() => navigate("/")}
                    className="mb-4 text-md font-semibold text-gray-600 hover:text-black"
                >
                    ← Back to Dashboard
                </button>

                <h1 className="text-4xl font-bold">Stack</h1>
                <p className="text-gray-600 mt-2">
                    LIFO (Last In First Out) data structure
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow">
                            <h3 className="font-semibold text-lg mb-2">Complexity</h3>
                            <p className="font-mono text-md">
                                Time: O(1) for push/pop | Space: O(n)
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow">
                            <h3 className="font-semibold text-lg mb-4">How it Works</h3>
                            <ol className="space-y-2 text-md">
                                <li>① Push: Add element to top</li>
                                <li>② Pop: Remove element from top</li>
                                <li>③ Peek: View top element</li>
                            </ol>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 shadow">

                            <h3 className="font-semibold text-lg mb-4">
                                Visualization
                            </h3>

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
                            <StackView
                                stack={stackArray}
                                highlight={currentStep?.i}
                            />

                            <div className="mt-6 text-md text-gray-600 border-t pt-4">
                                Size: {stackArray.length}
                            </div>
                        </div>

                        <Explanation explanation={currentStep?.explanation || ""} />
                    </div>
                </div>
            </div>
        </div>
    );
}
