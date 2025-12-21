import AlgorithmCard from "./AlgorithmCard.jsx";

export default function Section({ title, items }) {
    return (
        <div className="mb-14">

            <div className="flex items-center gap-3 mb-6">
                <div className="bg-violet-600 text-white p-2 rounded-xl">
                    {`</>`}
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <AlgorithmCard key={index} {...item} />
                ))}
            </div>

        </div>
    );
}
