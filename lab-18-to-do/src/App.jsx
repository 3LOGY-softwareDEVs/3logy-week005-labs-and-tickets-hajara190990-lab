import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Toggle complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filtered todos
  const getFilteredTodos = () => {
    if (filter === 'active') return todos.filter((t) => !t.completed);
    if (filter === 'completed') return todos.filter((t) => t.completed);
    return todos;
  };

  const activeCount = todos.filter((t) => !t.completed).length;

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div className="App">
      <h1>📝 React Todo List</h1>

      {/* Input section */}
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new todo..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
          All
        </button>
        <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
          Active
        </button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
          Completed
        </button>
      </div>

      {/* Todo list */}
      <ul className="todo-list">
        {getFilteredTodos().length === 0 ? (
          <p>No todos to display</p>
        ) : (
          getFilteredTodos().map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>

      {/* Footer */}
      <div className="footer">
        <p>{activeCount} items left</p>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default App;
