import { Button, TextField } from '@material-ui/core'
import React  from 'react';

export default function TodoForm({todo, handleChange, handleSubmit}){
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="New Todo" 
                name="task"  
                value={todo.task || ""}  
                onChange={handleChange} 
            />
            <Button type="submit">Add todo</Button>
        </form>
    );   
}

