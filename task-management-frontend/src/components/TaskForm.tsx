import { useState } from "react";
import { createTask } from "../api/taskApi";
import { toast } from "react-toastify";

interface Props {
    refresh: () => void;
}

const TaskForm = ({ refresh }: Props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createTask({
                title,
                description,
                completed: false,
                dueDate,
            });

            toast.success("Task created successfully");

            setTitle("");
            setDescription("");
            setDueDate("");
            refresh();
        } catch {
            // handled by interceptor
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                required
            />

            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />

            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
