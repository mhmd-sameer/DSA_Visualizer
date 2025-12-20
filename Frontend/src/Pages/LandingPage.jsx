export default function LandingPage (){
    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <section className="flex flex-col justify-center items-center min-h-[75vh] bg-gradient-to-l from-pink-600 to-violet-700 text-white text-center">

                {/* Icon */}
                <div className="mb-6 bg-white/20 p-5 rounded-2xl">
                    <span className="text-4xl font-bold font-sans">{`</>`}</span>
                </div>

                <h1 className="text-6xl font-bold mb-6">
                    Master DSA Visually
                </h1>

                <p className="text-xl max-w-2xl mb-8">
                    Learn Data Structures and Algorithms through interactive visualizations.
                    <br />
                    See how algorithms work step-by-step in real-time.
                </p>

                <button className="bg-white text-violet-700 font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
                    Get Started ✨
                </button>
            </section>

            {/* FEATURES SECTION */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl">
                        <div className="mb-4 text-violet-600 text-2xl">📚</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Comprehensive Coverage
                        </h3>
                        <p className="text-gray-600">
                            Covers all major data structures and algorithms step-by-step.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl">
                        <div className="mb-4 text-pink-600 text-2xl">⚡</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Real-Time Visualization
                        </h3>
                        <p className="text-gray-600">
                            Watch algorithms execute visually in real time.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl">
                        <div className="mb-4 text-purple-600 text-2xl">⌨️</div>
                        <h3 className="text-xl font-semibold mb-2">
                            Custom Input
                        </h3>
                        <p className="text-gray-600">
                            Try algorithms with your own input values.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

