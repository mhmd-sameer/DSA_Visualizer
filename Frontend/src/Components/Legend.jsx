export default function Legend({ color, label }) {
    return (
        <div className="flex items-center gap-2">
            <span className={`w-4 h-4 rounded ${color}`} />
            {label}
        </div>
    );
}