import axios from "axios";
import { toast } from "react-toastify";

const API = axios.create({
    baseURL: "http://localhost:8080/api/tasks",
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            toast.error("Server not reachable. Check backend.");
        } else {
            toast.error(error.response.data?.message || "Unexpected error occurred");
        }
        return Promise.reject(error);
    }
);

export const getTasks = () => API.get("");
export const getTaskById = (id: number) => API.get(`/${id}`);
export const createTask = (task: { title: string; description: string; completed: boolean; dueDate: string }) => API.post("", task);
export const updateTask = (id: number, task: {
    id?: number;
    title: string;
    description?: string;
    completed: boolean;
    dueDate?: string
}) => API.put(`/${id}`, task);
export const deleteTask = (id: number) => API.delete(`/${id}`);
