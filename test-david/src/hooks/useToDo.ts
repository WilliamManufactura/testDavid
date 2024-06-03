import { useState } from 'react';

const useToDo = () => {
    const [toDoList, setToDoList] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [editInputValue, setEditInputValue] = useState<string>('');
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const addToDo = () => {
        if (inputValue !== '') {
            setToDoList([...toDoList, inputValue]);
            setInputValue('');
        }
    };

    const editToDo = () => {
        if (editInputValue.trim()) {
            const updatedList = [...toDoList];
            updatedList[editIndex] = editInputValue;
            setToDoList(updatedList);
            setEditIndex(null);
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleEditInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(event.target.value);
    };

    const deleteToDo = (index: number) => {
        const updatedList = [...toDoList];
        updatedList.splice(index, 1);
        setToDoList(updatedList);
    };

    const startEdit = (index: number) => {
        setEditIndex(index);
        setEditInputValue(toDoList[index]);
    };

    const cancelEdit = () => {
        setEditIndex(null);
        setInputValue('');
    };

    return {
        toDoList,
        inputValue,
        editIndex,
        editInputValue,
        addToDo,
        handleInputChange,
        handleEditInputChange,
        deleteToDo,
        startEdit,
        cancelEdit,
        editToDo,
    };
};

export default useToDo;
