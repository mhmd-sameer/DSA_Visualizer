import {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card.jsx";
import Legend from "../../Components/Legend.jsx";
import useVisualizer from "../../Hooks/useVisualizer.js";
import Bars from "../../Components/Bars.jsx";
import VisualizerControls from "../../Components/VisualizationControls.jsx";
import Explanation from "../../Components/Explanation.jsx";
import {linearSearch} from "../../Services/api.js";

export default function LinearSearch() {
    const navigate = useNavigate();

    const initialArray = [64, 34, 25, 12, 22, 11, 90];

    const {
        array,
        active,
        sorted,
        steps,
        stepIndex,
        sorting,
        paused,
        speed,
        input,
        explanation,

        setSpeed,
        setInput,

        loadSteps,
        nextStep,
        prevStep,
        play,
        pause,
        reset,
        applyCustomInput,
    } = useVisualizer(initialArray);

    const [target, setTarget] = useState("");


    function fetchSteps() {
        return linearSearch({
            array,
            target: Number(target),
        }).then(res => res.data);
    }



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
                <h1 className="text-4xl font-bold mb-2">Linear Search</h1>
                <p className="text-gray-600 mb-8 text-xl">
                    Search for a target value by checking each element sequentially
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">

                        {/* Complexity */}
                        <Card title="Complexity">
                            <p className="font-mono text-md">
                                Time: O(n) | Space: O(1)
                            </p>
                        </Card>

                        {/* How it works */}
                        <Card title="How it Works">
                            <p className="text-gray-600 text-md mb-4">
                                Linear Search checks each element in the array one by one
                                until the target value is found or the end of the array is reached.
                            </p>

                            <ol className="space-y-2 text-md">
                                <li>① Start from the first element</li>
                                <li>② Compare the current element with the target</li>
                                <li>③ If it matches, the search stops</li>
                                <li>④ If not, move to the next element</li>
                            </ol>
                        </Card>


                        {/* Custom Input */}
                        <Card title="Custom Input">
                            <p className="text-sm text-gray-600 mb-2">
                                Enter numbers separated by commas
                            </p>

                            <input
                                value={input}
                                disabled={sorting}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="e.g. 5, 2, 8, 1, 9"
                                className="w-full border rounded-lg px-3 py-2 mb-3 disabled:bg-gray-100"
                            />
                            <Card title="Target Value">
                                <p className="text-sm text-gray-600 mb-2">
                                    Enter the value to search for
                                </p>

                                <input
                                    type="number"
                                    value={target}
                                    disabled={sorting}
                                    onChange={(e) => setTarget(e.target.value)}
                                    placeholder="e.g. 25"
                                    className="w-full border rounded-lg px-3 py-2 disabled:bg-gray-100"
                                />
                            </Card>

                            <button
                                onClick={applyCustomInput}
                                disabled={sorting}
                                className="w-full px-3 py-2 rounded-lg border text-white bg-gray-900 hover:bg-gray-950 disabled:opacity-50"
                            >
                                Apply Input
                            </button>
                        </Card>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2">
                        <Card title="Visualization" subtitle="Default example">

                            {/* Controls */}
                            <VisualizerControls

                                onLoad={() =>{
                                    if(target==="")
                                    {
                                        alert("Enter a target value first");
                                        return ;
                                    }
                                    loadSteps(fetchSteps)}}
                                onPrev={prevStep}
                                onNext={nextStep}
                                onPlay={play}
                                onPause={pause}
                                onReset={() => reset(initialArray)}
                                sorting={sorting}
                                paused={paused}
                                stepIndex={stepIndex}
                                stepsLength={steps.length}
                            />

                            {sorting && (
                                <div className="flex items-center gap-3 mb-6">
                                    <span>Speed</span>
                                    <input
                                        type="range"
                                        min="50"
                                        max="1000"
                                        step="50"
                                        defaultValue={500}
                                        onChange={(e) => setSpeed(Number(e.target.value))}
                                    />
                                </div>
                            )}

                            {/* Visualization Area */}
                            <Bars
                                array = {array}
                                active = {active}
                                sorted = {sorted}
                            />


                            {/* Legend */}
                            <div className="flex gap-6 mt-6 text-md">
                                <Legend color="bg-indigo-500" label="Unsorted" />
                                <Legend color="bg-red-500" label="Comparing" />
                                <Legend color="bg-green-500" label="Sorted" />
                                <Legend color="bg-yellow-500" label="Pivot" />
                            </div>
                        </Card>
                        <div className="space-y-2">

                            {steps.length > 0 && (
                                <div className="text-xs uppercase tracking-wide text-gray-500">
                                    Step {stepIndex + 1} of {steps.length}
                                </div>
                            )}

                            <Explanation explanation={explanation} />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}





