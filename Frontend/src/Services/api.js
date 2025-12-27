import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
    baseURL: `${API_BASE_URL}/api/algorithms`,
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

export const stackPush = (data) =>
    API.post("/stack/push", data);

export const stackPop = (data) =>
    API.post("/stack/pop", data);

export const stackPeek = (data) =>
    API.post("/stack/peek", data);

export const queueEnqueue = (data) =>
    API.post("/queue/enqueue", data);

export const queueDequeue = (data) =>
    API.post("/queue/dequeue", data);

export const insertAtHead = (data) =>
    API.post("/linked-list/insert-head", data);

export const insertAtTail = (data) =>
    API.post("/linked-list/insert-tail", data);

export const deleteNode = (data) =>
    API.post("/linked-list/delete", data);

export const searchNode = (data) =>
    API.post("/linked-list/search", data);

export const inorderTraversal = () =>
    API.get("/binary-tree/inorder");

export const preorderTraversal = () =>
    API.get("/binary-tree/preorder");

export const postorderTraversal = () =>
    API.get("/binary-tree/postorder");

export const bstInsert = (data) =>
    API.post("/bst/insert", data);

export const bstSearch = (data) =>
    API.post("/bst/search", data);

export const bfsTraversal = (data) =>
    API.post("/graph/bfs", data);

export const dfsTraversal = (data) =>
    API.post("/graph/dfs", data);



export const loginUser = (data) =>
    API.post("/api/auth/login", data);

export const signupUser = (data) =>
    API.post("/api/auth/signup", data);

