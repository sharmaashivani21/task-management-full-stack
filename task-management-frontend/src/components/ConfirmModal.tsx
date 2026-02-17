import "./ConfirmModal.css";

interface Props {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal = ({
                          isOpen,
                          title,
                          message,
                          onConfirm,
                          onCancel,
                      }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>{title}</h3>
                <p>{message}</p>

                <div className="modal-actions">
                    <button className="btn-secondary" onClick={onCancel}>
                        No
                    </button>
                    <button className="btn-danger" onClick={onConfirm}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
