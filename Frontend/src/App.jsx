
import LandingPage from "./Pages/LandingPage.jsx";
import InputPanel from "./Components/InputPanel.jsx";
import SortingPage from "./Pages/SortingPage.jsx";
import Algorithms from "./Pages/Algorithms.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BubbleSort from "./Pages/BubbleSort.jsx";
import SelectionSort from "./Pages/SelectionSort.jsx";
import InsertionSort from "./Pages/InsertionSort.jsx";
import LinearSearch from "./Pages/LinearSearch.jsx";
import BinarySearch from "./Pages/BinarySearch.jsx";

export default function App (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Algorithms />} />
                <Route path={"/bubble-sort"} element={<BubbleSort />} />
                <Route path={"/selection-sort"} element={<SelectionSort />} />
                <Route path={"/insertion-sort"} element={<InsertionSort />} />
                <Route path={"/linear-search"} element={<LinearSearch />} />
                <Route path={"/binary-search"} element={<BinarySearch />} />
            </Routes>
        </BrowserRouter>
    );
}