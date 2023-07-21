import { useEffect } from 'react';
import './App.css';
import { TodoList, CustomInput } from './components';
import { useTodoList } from './hooks/useTodoList/useTodoList';

const data = [
  { label: "Todo 1", id: 1, resolved: false },
  { label: "Todo 2", id: 2, resolved: false },
  { label: "Todo 3", id: 3, resolved: false },
  { label: "Todo 4", id: 4, resolved: false },
]

function App() {
  const { addTodo, deleteTodo, changeTodoStatus, todos, addMultiple } = useTodoList(data);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const newTodos = [];
        
        for(let i = 0; i < 10 ; i++){
          if(data[i]){
            newTodos.push(data[i].title);
          }
        }

        addMultiple(newTodos);
      })
      .catch(() => console.log("Something went wrong"))
  },[]);

  useEffect(() => console.log("Something changes"), [todos]);

  return (
    <div>
      <CustomInput onSubmit={addTodo} />
      <TodoList list={todos} onDeleteTodo={deleteTodo} onChangeTodoStatus={changeTodoStatus} />
    </div>
  );
}

export default App;
