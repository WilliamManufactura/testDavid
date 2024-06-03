import React from 'react';
import useToDo from '@hooks/useToDo';
import ToDoElement from "./components/ToDoElement";

const ToDoListComponent = () => {
    const {
        toDoList,
        inputValue,
        editInputValue,
        editIndex,
        addToDo,
        handleInputChange,
        handleEditInputChange,
        deleteToDo,
        startEdit,
        cancelEdit,
        editToDo
    } = useToDo();

    return (
        <div>
            <h1>ToDo List</h1>
            {toDoList.map((toDo, index) => (
                <ToDoElement
                    key={index}
                    toDo={toDo}
                    isEdited={editIndex === index}
                    index={index}
                    handleEditInputChange={handleEditInputChange}
                    deleteToDo={() => deleteToDo(index)}
                    startEdit={() => startEdit(index)}
                    cancelEdit={cancelEdit}
                    editToDo={editToDo}
                    editInputValue={editInputValue}
                />
            ))}
            <input
                type="text"
                name="element"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={addToDo}>
                Add ToDo
            </button>
        </div>
    );
};

export default ToDoListComponent;
