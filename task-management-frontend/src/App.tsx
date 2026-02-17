import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskListPage />} />
                    <Route path="/task/:id" element={<TaskDetailPage />} />
                </Routes>
            </BrowserRouter>

            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default App;
