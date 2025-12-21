import { useState, useRef, useEffect } from "react";

export default function useVisualizer(initialArray) {

    const [array, setArray] = useState([...initialArray]);
    const [steps, setSteps] = useState([]);
    const [stepIndex, setStepIndex] = useState(0);
    const [explanation, setExplanation] = useState("");

    const [active, setActive] = useState([]);
    const [sorted, setSorted] = useState([]);

    const [sorting, setSorting] = useState(false);
    const [paused, setPaused] = useState(false);

    const [speed, setSpeed] = useState(500);
    const speedRef = useRef(500);

    const pausedRef = useRef(false);
    const stopRef = useRef(false);

    const [input, setInput] = useState(initialArray.join(", "));
    const [pivotIndex, setPivotIndex] = useState(null);


    useEffect(() => {
        pausedRef.current = paused;
    }, [paused]);

    useEffect(() => {
        speedRef.current = speed;
    }, [speed]);

    // 🔹 Pause-aware sleep
    const sleep = (ms) =>
        new Promise(resolve => {
            const start = Date.now();

            function tick() {
                if (stopRef.current) return resolve();
                if (pausedRef.current) return requestAnimationFrame(tick);

                if (Date.now() - start >= ms) resolve();
                else requestAnimationFrame(tick);
            }

            tick();
        });

    // 🔹 Apply one step
    function applyStep(step) {
        if (!step) return;

        const action = step.action?.toLowerCase();

        // 🔹 Always update array snapshot & explanation
        setArray(step.array);
        setExplanation(step.explanation || "");

        // 🔹 Reset transient states by default
        setActive([]);
        setPivotIndex(null);

        // 🔴 COMPARISON / SWAP (all sorting + searching)
        if (action === "compare" || action === "swap" || action === "check") {
            setActive([step.i, step.j].filter(i => i >= 0));
        }

        // 🟡 QUICK SORT: Pivot
        if (action === "pivot") {
            setPivotIndex(step.i);
        }

        // 🟢 SORTED ELEMENT (Bubble / Selection / Insertion / Quick)
        if (action === "sorted") {
            setSorted(prev =>
                prev.includes(step.i) ? prev : [...prev, step.i]
            );
        }

        // 🟢 MERGE SORT: Overwrite step
        if (action === "overwrite") {
            setActive([step.i]);
        }

        // 🔵 SEARCH FOUND (Linear / Binary)
        if (action === "found") {
            setActive([step.i]);
            setSorted([step.i]); // mark found element
        }

        // ⚫ SEARCH NOT FOUND / INVALID
        if (action === "not found" || action === "invalid") {
            setActive([]);
        }

        // ✅ DONE (all algorithms)
        if (action === "done") {
            setActive([]);
            setPivotIndex(null);
            setSorted(step.array.map((_, idx) => idx)); // mark ALL sorted
        }

    }



    // 🔹 Load steps (algorithm-agnostic)
    async function loadSteps(fetchStepsFn) {
        console.log("loadSteps CALLED");

        const data = await fetchStepsFn();
        console.log("steps fetched:", data);

        setSteps(data);
        setStepIndex(0);
        setActive([]);
        setSorted([]);

        console.log("calling applyStep");
        applyStep(data[0]);
    }


    // 🔹 Step navigation
    function nextStep() {
        if (stepIndex >= steps.length - 1) return;
        const next = stepIndex + 1;
        setStepIndex(next);
        applyStep(steps[next]);
    }

    function prevStep() {
        if (stepIndex <= 0) return;

        const prev = stepIndex - 1;

        setArray(steps[0].array);
        setActive([]);
        setSorted([]);
        setExplanation("");

        for (let i = 0; i <= prev; i++) {
            applyStep(steps[i]);
        }

        setStepIndex(prev);
    }

    // 🔹 Auto-play
    async function play() {
        if (!steps.length) return;

        stopRef.current = false;
        setSorting(true);
        setPaused(false);

        let i = stepIndex;

        while (i < steps.length - 1) {
            if (stopRef.current) break;

            if (pausedRef.current) {
                await sleep(50);
                continue;
            }

            i++;
            setStepIndex(i);
            applyStep(steps[i]);

            await sleep(speedRef.current);
        }

        setSorting(false);
    }

    function pause() {
        setPaused(true);
    }

    function reset() {
        stopRef.current = true;
        pausedRef.current = false;
        setPaused(false);
        setSorting(false);

        setSteps([]);
        setStepIndex(0);
        setActive([]);
        setSorted([]);
        setExplanation("");

        setArray([...initialArray]);
    }

    function applyCustomInput() {
        if (sorting) return;

        const values = input
            .split(",")
            .map(v => v.trim())
            .filter(Boolean)
            .map(Number);

        if (values.length === 0 || values.some(isNaN)) {
            alert("Please enter valid comma-separated numbers");
            return;
        }

        setArray(values);
        setSorted([]);
        setActive([]);
    }

    return {
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
        pivotIndex,

        setSpeed,
        setInput,

        loadSteps,
        nextStep,
        prevStep,
        play,
        pause,
        reset,
        applyCustomInput,
    };
}
