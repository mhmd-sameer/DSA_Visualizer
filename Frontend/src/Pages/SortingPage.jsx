import { useState } from "react";
import { bubbleSort } from "../services/api";
import InputPanel from "../components/InputPanel";
import Visualization from "../Components/VisualizationControls.jsx";
import Explanation from "../components/Explanation";

export default function SortingPage() {
    const [steps, setSteps] = useState([]);
    const [index, setIndex] = useState(0);
    const [array, setArray] = useState([]);
    const [active, setActive] = useState([]);
    const [explanation, setExplanation] = useState("");

    const start = async (arr) => {
        const res = await bubbleSort(arr);
        setSteps(res.data);
        setIndex(0);
    };

    const next = () => {
        if (index < steps.length) {
            const step = steps[index];
            setArray(step.array);
            setActive([step.i, step.j].filter(i => i >= 0));
            setExplanation(step.explanation);
            setIndex(index + 1);
        }
    };

    return (
        <div>
            <InputPanel onSubmit={start} />
            <Visualization array={array} active={active} />
            <button onClick={next}>Next</button>
            <Explanation text={explanation} />
        </div>
    );
}
