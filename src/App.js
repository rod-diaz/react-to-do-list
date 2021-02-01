import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

export default function App() {

  const [todo, setTodo] = useState({});
  const handleChange = ({ target }) => {
      const { name, value } = target;
      setTodo((prev) => ({
          ...prev,
          id: uuidv4(), 
          [name]: value,
          completed: false
      }));
  }

  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  
  const handleSubmit = (event) => {
      event.preventDefault();
      if(!todo.task){
        return;
      }
      setTodos((prev) => [todo, ...prev]);
      setTodo({});
  }

  const handleClick = (todoIdToToggle) => {
    setTodos((prev) =>
      prev.map(todo => {
        if(todo.id === todoIdToToggle){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;  
      })
    );
  }

  const handleDelete = (todoIdToRemove) => {
    setTodos((prev) => 
      prev.filter(
        (todo) => todo.id !== todoIdToRemove 
      ));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }}  variant="h1">
        React Todo
      </Typography>
      <TodoForm 
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList 
        todos={todos}  
        handleClick={handleClick} 
        handleDelete={handleDelete}
      />
    </div>
  );
}