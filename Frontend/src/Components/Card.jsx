export default function Card({ title, subtitle, children }) {
    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-1">{title}</h3>
            {subtitle && (
                <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
            )}
            {children}
        </div>
    );
}