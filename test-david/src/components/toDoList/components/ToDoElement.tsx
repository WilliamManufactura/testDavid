import React from "react";

const ToDoElement = ({ toDo, isEdited, handleEditInputChange, deleteToDo, startEdit, cancelEdit, editToDo, editInputValue }) => {
    return (
        <div>
            {isEdited ? (
                <div>
                    <input
                        type="text"
                        value={editInputValue}
                        onChange={handleEditInputChange}
                    />
                    <button onClick={editToDo}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            ) : (
                <div>
                    {toDo}
                    <button onClick={deleteToDo}>Delete</button>
                    <button onClick={startEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default ToDoElement;
