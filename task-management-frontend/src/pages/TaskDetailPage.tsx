import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../api/taskApi";
import type {Task} from "../types/Task";

const TaskDetailPage = () => {
    const { id } = useParams();
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getTaskById(Number(id))
                .then((res) => setTask(res.data))
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!task) return <p>Task not found</p>;

    return (
        <div className="container">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            <p>Due: {task.dueDate?.substring(0, 10)}</p>
        </div>
    );
};

export default TaskDetailPage;
