
import LandingPage from "./Pages/LandingPage.jsx";
import InputPanel from "./Components/InputPanel.jsx";
import Algorithms from "./Pages/Algorithms.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BubbleSort from "./Pages/Sorting/BubbleSort.jsx";
import SelectionSort from "./Pages/Sorting/SelectionSort.jsx";
import InsertionSort from "./Pages/Sorting/InsertionSort.jsx";
import LinearSearch from "./Pages/Searching/LinearSearch.jsx";
import BinarySearch from "./Pages/Searching/BinarySearch.jsx";
import MergeSort from "./Pages/Sorting/MergeSort.jsx";
import QuickSort from "./Pages/Sorting/QuickSort.jsx";
import Stack from "./Pages/Linear/Stack.jsx";

export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Algorithms />} />
                <Route path={"/bubble-sort"} element={<BubbleSort />} />
                <Route path={"/selection-sort"} element={<SelectionSort />} />
                <Route path={"/insertion-sort"} element={<InsertionSort />} />
                <Route path={"/merge-sort"} element={<MergeSort />} />
                <Route path={"/quick-sort"} element={<QuickSort />} />
                <Route path={"/linear-search"} element={<LinearSearch />} />
                <Route path={"/binary-search"} element={<BinarySearch />} />
                <Route path={"/stack"} element={<Stack />} />
            </Routes>
        </BrowserRouter>
    );
}