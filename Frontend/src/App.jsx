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

                {/* PUBLIC ROUTE */}
                <Route path={"/"} element={<LandingPage />} />
                <Route path="/auth" element={<Auth />} />

                {/* PROTECTED ROUTES */}
                <Route path="/algorithms" element={
                    <PrivateRoute>
                        <Algorithms />
                    </PrivateRoute>
                } />

                <Route path="/bubble-sort" element={<PrivateRoute><BubbleSort /></PrivateRoute>} />
                <Route path="/selection-sort" element={<PrivateRoute><SelectionSort /></PrivateRoute>} />
                <Route path="/insertion-sort" element={<PrivateRoute><InsertionSort /></PrivateRoute>} />
                <Route path="/merge-sort" element={<PrivateRoute><MergeSort /></PrivateRoute>} />
                <Route path="/quick-sort" element={<PrivateRoute><QuickSort /></PrivateRoute>} />

                <Route path="/linear-search" element={<PrivateRoute><LinearSearch /></PrivateRoute>} />
                <Route path="/binary-search" element={<PrivateRoute><BinarySearch /></PrivateRoute>} />

                <Route path="/stack" element={<PrivateRoute><Stack /></PrivateRoute>} />
                <Route path="/queue" element={<PrivateRoute><Queue /></PrivateRoute>} />
                <Route path="/linked-list" element={<PrivateRoute><LinkedList /></PrivateRoute>} />

                <Route path="/binary-tree" element={<PrivateRoute><BinaryTree /></PrivateRoute>} />
                <Route path="/binary-search-tree" element={<PrivateRoute><BinarySearchTree /></PrivateRoute>} />

                <Route path="/graph-bfs" element={<PrivateRoute><GraphBFS /></PrivateRoute>} />
                <Route path="/graph-dfs" element={<PrivateRoute><GraphDFS /></PrivateRoute>} />

                {/* FALLBACK */}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>
    );
}
