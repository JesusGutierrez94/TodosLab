import { useState } from "react";

let currentId = 99999;

export const useTodoList = (initialTodos) => {
    const [todos, setTodos] = useState([...initialTodos]);

    const addTodo = (label) => {
        setTodos([...todos, { label, resolved: false, id: currentId }]);
        currentId++;
    }

    const addMultiple = (labels) => setTodos([
        ...todos, 
        ...labels.map(label => { 
            const newTodo = { label, resolved: false, id: currentId };
            currentId++;
            return newTodo; 
        })
    ]) 

    const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

    const changeTodoStatus = (index) => setTodos(() => {
        const newTodos = [...todos];
        newTodos[index] = { ...newTodos[index] ,resolved: !newTodos[index].resolved};
        return newTodos;    
    }); 

    return {
        addTodo,
        deleteTodo,
        changeTodoStatus,
        todos,
        addMultiple
    };

}