import { useState } from "react";
import type {Task} from "../types/Task";
import { deleteTask, updateTask } from "../api/taskApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";

interface Props {
    task: Task;
    refresh: () => void;
}

const TaskCard = ({ task, refresh }: Props) => {
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showCompleteModal, setShowCompleteModal] = useState(false);

    const handleToggleComplete = async () => {
        try {
            await updateTask(task.id!, {
                ...task,
                completed: !task.completed,
            });

            toast.success("Task updated");
            refresh();
        } catch {}
        setShowCompleteModal(false);
    };

    const handleDelete = async () => {
        try {
            await deleteTask(task.id!);
            toast.success("Task deleted");
            refresh();
        } catch {}
        setShowDeleteModal(false);
    };

    return (
        <>
            <div className="card">
                <h3 onClick={() => navigate(`/task/${task.id}`)}>
                    {task.title}
                </h3>

                <p>{task.description}</p>

                <p>
                    <strong>Status:</strong>{" "}
                    {task.completed ? "Completed" : "Pending"}
                </p>

                <div className="actions">
                    <button onClick={() => setShowCompleteModal(true)}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>

                    <button className="danger" onClick={() => setShowDeleteModal(true)}>
                        Delete
                    </button>
                </div>
            </div>

            <ConfirmModal
                isOpen={showDeleteModal}
                title="Delete Task"
                message="Are you sure you want to delete this task?"
                onConfirm={handleDelete}
                onCancel={() => setShowDeleteModal(false)}
            />

            <ConfirmModal
                isOpen={showCompleteModal}
                title="Update Status"
                message="Are you sure you want to change the task status?"
                onConfirm={handleToggleComplete}
                onCancel={() => setShowCompleteModal(false)}
            />
        </>
    );
};

export default TaskCard;
