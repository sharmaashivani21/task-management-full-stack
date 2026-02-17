import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import type {Task} from "../types/Task";

const TaskListPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const res = await getTasks();
            setTasks(res.data.content); // assuming Page<TaskDTO>
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="container">
            <h1>Task Manager</h1>

            <TaskForm refresh={fetchTasks} />

            {loading && <p className="loading">Loading tasks...</p>}

            {!loading && tasks.length === 0 && (
                <p className="empty">No tasks available</p>
            )}

            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} refresh={fetchTasks} />
            ))}
        </div>
    );
};

export default TaskListPage;
