export default function Explanation({ explanation }) {
    return (
        <div className="bg-white border rounded-xl p-4 text-gray-800 text-lg leading-relaxed">
            {explanation
                ? explanation
                : "Click Next or Play to see how Bubble Sort works step by step."}
        </div>
    );
}
