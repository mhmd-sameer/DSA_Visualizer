import Section from "../Components/Section.jsx";

export default function Algorithms() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/auth";
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* NAVBAR */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-violet-600 text-white p-2 rounded-xl text-lg">
                            {"</>"}
                        </div>
                        <h2 className="text-xl font-bold">DSA Visualizer</h2>
                    </div>

                    <button onClick={logout} className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            </header>

            {/* CONTENT */}
            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* PAGE TITLE */}
                <h1 className="text-3xl font-bold mb-2">
                    Choose an Algorithm
                </h1>
                <p className="text-gray-600 mb-10">
                    Select any algorithm to see its visualization and explanation
                </p>

                {/* SORTING SECTION */}
                <Section
                    title="Sorting Algorithms"
                    items={[
                        {
                            name: "Bubble Sort",
                            desc: "Compares adjacent elements and swaps them if they are in wrong order",
                            path: "/bubble-sort",
                        },
                        {
                            name: "Selection Sort",
                            desc: "Finds the minimum element and places it at the beginning",
                            path: "/selection-sort",
                        },
                        {
                            name: "Insertion Sort",
                            desc: "Builds the final sorted array one item at a time",
                            path: "/insertion-sort",
                        },
                        {
                            name: "Merge Sort",
                            desc: "Divides array into halves, sorts them and merges them back",
                            path: "/merge-sort",
                        },
                        {
                            name: "Quick Sort",
                            desc: "Picks a pivot and partitions array around it",
                            path: "/quick-sort",
                        },
                    ]}
                />

                {/* SEARCHING SECTION */}
                <Section
                    title="Searching Algorithms"
                    items={[
                        {
                            name: "Linear Search",
                            desc: "Searches for an element by checking each element",
                            path: "/linear-search",
                        },
                        {
                            name: "Binary Search",
                            desc: "Repeatedly divides the search interval in half",
                            path: "/binary-search",
                        },
                    ]}
                />

                {/* LINEAR DATA STRUCTURE */}
                <Section
                    title="Linear Data Structure"
                    items={[
                        {
                            name: "Stack",
                            desc: "LIFO (Last In First Out) data structure",
                            path: "/stack",
                        },
                        {
                            name: "Queue",
                            desc: "FIFO (First In First Out) data structure",
                            path: "/queue",
                        },
                        {
                            name: "Linked List",
                            desc: "Linear collection of data elements stored at non-contiguous locations",
                            path: "/linked-list",
                        },
                    ]}
                />

                {/* NON LINEAR DATA STRUCTURE*/}
                <Section
                    title="Non-Linear Data Structure"
                    items={[
                        {
                            name: "Binary Tree",
                            desc: "Tree data structure where each node has at most two children",
                            path: "/binary-tree",
                        },
                        {
                            name: "Binary Search Tree",
                            desc: "Binary tree where left child is smaller and right child is larger",
                            path: "/binary-search-tree",
                        },
                        {
                            name: "Graph BFS",
                            desc: "Traverses graph level by level using breadth-first approach",
                            path: "/graph-bfs",
                        },
                        {
                            name: "Graph DFS",
                            desc: "Traverses graph by exploring as far as possible along each branch",
                            path: "/graph-dfs",
                        },
                    ]}
                />

            </main>
        </div>
    );
}
