import Algorithms from "./Pages/Algorithms.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* SORTING */
import BubbleSort from "./Pages/Sorting/BubbleSort.jsx";
import SelectionSort from "./Pages/Sorting/SelectionSort.jsx";
import InsertionSort from "./Pages/Sorting/InsertionSort.jsx";
import MergeSort from "./Pages/Sorting/MergeSort.jsx";
import QuickSort from "./Pages/Sorting/QuickSort.jsx";

/* SEARCHING */
import LinearSearch from "./Pages/Searching/LinearSearch.jsx";
import BinarySearch from "./Pages/Searching/BinarySearch.jsx";

/* LINEAR DS */
import Stack from "./Pages/Linear/Stack.jsx";
import Queue from "./Pages/Linear/Queue.jsx";
import LinkedList from "./Pages/Linear/LinkedList.jsx";

/* NON-LINEAR DS */
import BinaryTree from "./Pages/NonLinear/BinaryTree.jsx";
import BinarySearchTree from "./Pages/NonLinear/BinarySearchTree.jsx";
import GraphBFS from "./Pages/NonLinear/GraphBFS.jsx";
import GraphDFS from "./Pages/NonLinear/GraphDFS.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* LANDING */}
                <Route path="/" element={<LandingPage />} />

                {/* ALGORITHMS DASHBOARD */}
                <Route path="/algorithms" element={<Algorithms />} />

                {/* SORTING */}
                <Route path="/algorithms/bubble-sort" element={<BubbleSort />} />
                <Route path="/algorithms/selection-sort" element={<SelectionSort />} />
                <Route path="/algorithms/insertion-sort" element={<InsertionSort />} />
                <Route path="/algorithms/merge-sort" element={<MergeSort />} />
                <Route path="/algorithms/quick-sort" element={<QuickSort />} />

                {/* SEARCHING */}
                <Route path="/algorithms/linear-search" element={<LinearSearch />} />
                <Route path="/algorithms/binary-search" element={<BinarySearch />} />

                {/* LINEAR DATA STRUCTURES */}
                <Route path="/algorithms/stack" element={<Stack />} />
                <Route path="/algorithms/queue" element={<Queue />} />
                <Route path="/algorithms/linked-list" element={<LinkedList />} />

                {/* NON-LINEAR DATA STRUCTURES */}
                <Route path="/algorithms/binary-tree" element={<BinaryTree />} />
                <Route path="/algorithms/binary-search-tree" element={<BinarySearchTree />} />
                <Route path="/algorithms/graph-bfs" element={<GraphBFS />} />
                <Route path="/algorithms/graph-dfs" element={<GraphDFS />} />

                {/* FALLBACK */}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>
    );
}
