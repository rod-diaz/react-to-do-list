import { Checkbox, IconButton, ListItem,  Typography} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React  from 'react';

export default function Todo({ todo, handleClick, handleDelete }){
    return (
        <ListItem style={{  display: "flex" }}>
            <Checkbox 
                checked={todo.completed}
                onClick={() => handleClick(todo.id)}
            />
            <Typography
                variant="body1" 
                style={{  
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={() => handleDelete(todo.id)}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}