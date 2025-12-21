import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
    baseURL: `${API_BASE_URL}/api/algorithm`,
});

export const bubbleSort = (array) =>
    API.post("/bubble-sort", array);

export const selectionSort = (array) =>
    API.post("/selection-sort", array);

export const insertionSort = (array) =>
    API.post("/insertion-sort", array);

export const mergeSort = (data) =>
    API.post("/merge-sort", data);

export const quickSort = (data) =>
    API.post("/quick-sort", data);

export const linearSearch = (data) =>
    API.post("/linear-search", data);

export const binarySearch = (data) =>
    API.post("/binary-search", data);

