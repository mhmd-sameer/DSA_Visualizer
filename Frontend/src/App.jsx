import Algorithms from "./Pages/Algorithms.jsx";
import Auth from "./Pages/Auth.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BubbleSort from "./Pages/Sorting/BubbleSort.jsx";
import SelectionSort from "./Pages/Sorting/SelectionSort.jsx";
import InsertionSort from "./Pages/Sorting/InsertionSort.jsx";
import LinearSearch from "./Pages/Searching/LinearSearch.jsx";
import BinarySearch from "./Pages/Searching/BinarySearch.jsx";
import MergeSort from "./Pages/Sorting/MergeSort.jsx";
import QuickSort from "./Pages/Sorting/QuickSort.jsx";

import Stack from "./Pages/Linear/Stack.jsx";
import Queue from "./Pages/Linear/Queue.jsx";
import LinkedList from "./Pages/Linear/LinkedList.jsx";

import BinaryTree from "./Pages/NonLinear/BinaryTree.jsx";
import BinarySearchTree from "./Pages/NonLinear/BinarySearchTree.jsx";
import GraphBFS from "./Pages/NonLinear/GraphBFS.jsx";
import GraphDFS from "./Pages/NonLinear/GraphDFS.jsx";

/* 🔐 Route Guard */
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/auth" replace />;
};

export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* PUBLIC ROUTES */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />} />

                {/* PROTECTED DASHBOARD */}
                <Route
                    path="/algorithms"
                    element={
                        <PrivateRoute>
                            <Algorithms />
                        </PrivateRoute>
                    }
                />

                {/* SORTING */}
                <Route path="/algorithms/bubble-sort" element={<PrivateRoute><BubbleSort /></PrivateRoute>} />
                <Route path="/algorithms/selection-sort" element={<PrivateRoute><SelectionSort /></PrivateRoute>} />
                <Route path="/algorithms/insertion-sort" element={<PrivateRoute><InsertionSort /></PrivateRoute>} />
                <Route path="/algorithms/merge-sort" element={<PrivateRoute><MergeSort /></PrivateRoute>} />
                <Route path="/algorithms/quick-sort" element={<PrivateRoute><QuickSort /></PrivateRoute>} />

                {/* SEARCHING */}
                <Route path="/algorithms/linear-search" element={<PrivateRoute><LinearSearch /></PrivateRoute>} />
                <Route path="/algorithms/binary-search" element={<PrivateRoute><BinarySearch /></PrivateRoute>} />

                {/* LINEAR DS */}
                <Route path="/algorithms/stack" element={<PrivateRoute><Stack /></PrivateRoute>} />
                <Route path="/algorithms/queue" element={<PrivateRoute><Queue /></PrivateRoute>} />
                <Route path="/algorithms/linked-list" element={<PrivateRoute><LinkedList /></PrivateRoute>} />

                {/* NON-LINEAR DS */}
                <Route path="/algorithms/binary-tree" element={<PrivateRoute><BinaryTree /></PrivateRoute>} />
                <Route path="/algorithms/binary-search-tree" element={<PrivateRoute><BinarySearchTree /></PrivateRoute>} />
                <Route path="/algorithms/graph-bfs" element={<PrivateRoute><GraphBFS /></PrivateRoute>} />
                <Route path="/algorithms/graph-dfs" element={<PrivateRoute><GraphDFS /></PrivateRoute>} />

                {/* FALLBACK */}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>
    );
}
