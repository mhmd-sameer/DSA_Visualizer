import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QueueView from "../../Components/QueueView";
import Explanation from "../../Components/Explanation";

export default function Queue() {
  const [queue, setQueue] = useState([10, 20, 30, 40]);
  const [value, setValue] = useState("");
  const [highlight, setHighlight] = useState(0);
  const [explanation, setExplanation] = useState("Front element is 10");

  const navigate = useNavigate();

    // ENQUEUE
  const enqueue = () => {
    if (!value) return;

    const newQueue = [...queue, Number(value)];
    setQueue(newQueue);
    setHighlight(newQueue.length - 1);
    setExplanation(`Enqueued ${value} to rear of queue`);
    setValue("");
  };

    // DEQUEUE
  const dequeue = () => {
    if (queue.length === 0) {
        setExplanation("Queue is empty");
        return;
    }

    const removed = queue[0];
    const newQueue = queue.slice(1);
    setQueue(newQueue);
    setHighlight(0);
    setExplanation(`Dequeued ${removed} from front of queue`);
  };

    // PEEK
  const peek = () => {
    if (queue.length === 0) {
        setExplanation("Queue is empty");
        return;
    }
    setHighlight(0);
    setExplanation(`Front element is ${queue[0]}`);
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
            <h1 className="text-4xl font-bold">Queue</h1>
            <p className="text-gray-600 mt-2">
            FIFO (First In First Out) data structure
        </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

            {/* LEFT COLUMN */}
            <div className="space-y-6">

            <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Complexity</h3>
            <p className="font-mono text-md">
            Time: O(1) for enqueue/dequeue | Space: O(n)
            </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-4">How it Works</h3>
            <p className="text-gray-600 mb-4">
            Queue is a linear data structure that follows FIFO (First In First Out).
    Elements are added at the rear and removed from the front.
            </p>

            <ol className="space-y-2 text-md">
            <li>① Enqueue: Add element to rear</li>
            <li>② Dequeue: Remove element from front</li>
            <li>③ Peek: View front element</li>
            <li>④ IsEmpty: Check if queue is empty</li>
            </ol>
            </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow">

            <h3 className="font-semibold text-lg mb-4">Visualization</h3>

            <div className="flex items-center gap-3 mb-6">
            <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Enter value"
    className="border rounded-lg px-3 py-2 w-40"
            />

            <button
    onClick={enqueue}
    className="bg-black text-white px-4 py-2 rounded-lg"
            >
            + Enqueue
            </button>

            <button
    onClick={dequeue}
    className="border px-4 py-2 rounded-lg"
            >
                  − Dequeue
            </button>

            <button
    onClick={peek}
    className="border px-4 py-2 rounded-lg"
            >
                  👁 Peek
            </button>
            </div>

            <QueueView queue={queue} highlight={highlight} />

            <div className="mt-6 text-md text-gray-600 border-t pt-4">
            Size: {queue.length} | Operations: Enqueue, Dequeue, Peek
            </div>
            </div>

            <Explanation explanation={explanation} />
            </div>
            </div>
            </div>
            </div>
  );
}
