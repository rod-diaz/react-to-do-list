import { List } from '@material-ui/core';
import React  from 'react';
import Todo from './Todo'

export default function TodoList({ todos, handleClick, handleDelete}){
    
    return (
        <List>
            { todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    handleClick={handleClick} 
                    handleDelete={handleDelete} 
                />
            ))}     
        </List>
    );
}