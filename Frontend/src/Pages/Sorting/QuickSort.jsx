import {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card.jsx";
import Legend from "../../Components/Legend.jsx";
import useVisualizer from "../../Hooks/useVisualizer.js";
import Bars from "../../Components/Bars.jsx";
import VisualizerControls from "../../Components/VisualizationControls.jsx";
import Explanation from "../../Components/Explanation.jsx";

export default function QuickSort() {
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



    async function fetchSteps() {
        const res = await fetch("http://localhost:8080/api/algorithm/quick-sort", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(array),
        });
        const data = await res.json();

        return data;
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
                <h1 className="text-4xl font-bold mb-2">Quick Sort</h1>

                <p className="text-gray-600 mb-8 text-xl">
                    Insert each element into its correct position in the sorted part of the array
                </p>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">

                        {/* Complexity */}
                        <Card title="Complexity">
                            <p className="font-mono text-md">
                                Average: O(n log n) | Worst: O(n²) | Space: O(log n)
                            </p>
                        </Card>


                        {/* How it works */}
                        <Card title="How it Works">
                            <p className="text-gray-600 text-md mb-4">
                                Quick Sort is a divide-and-conquer algorithm that selects a pivot element
                                and partitions the array so that elements smaller than the pivot come before it
                                and elements larger come after it.
                            </p>

                            <ol className="space-y-2 text-md">
                                <li>① Choose a pivot element</li>
                                <li>② Partition the array around the pivot</li>
                                <li>③ Place the pivot in its correct position</li>
                                <li>④ Recursively apply Quick Sort to left and right subarrays</li>
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
                                onLoad={() => loadSteps(fetchSteps)}
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





