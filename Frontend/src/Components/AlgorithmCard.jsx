import {useNavigate} from "react-router-dom";

export default function AlgorithmCard({ name, desc, path }) {
    const navigate = useNavigate();
    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2">{name}</h3>
            <p className="text-gray-600 mb-6">{desc}</p>

            <button onClick={() => navigate(path)} className="w-full py-2 rounded-lg text-white font-semibold
        bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90">
                View Visualization
            </button>
        </div>
    );
}
