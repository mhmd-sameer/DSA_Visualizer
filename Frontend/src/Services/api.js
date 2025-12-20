import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/algorithm",
});

export const bubbleSort = (array) =>
    API.post("/bubble-sort", array);

export const selectionSort = (array) =>
    API.post("/selection-sort", array);

export const insertionSort = (array) =>
    API.post("/insertion-sort", array);

export const linearSearch = (data) =>
    API.post("/linear-search", data);

export const binarySearch = (data) =>
    API.post("/binary-search", data);
