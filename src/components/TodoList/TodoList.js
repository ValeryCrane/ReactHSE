import React from 'react';
import './TodoList.css';
import Task from '../Task/Task.js';

const Todolist = (props) => {
    return <div className="TodoList">
        {
            props.tasks.map(task => <Task task={task} key={task.id} click={props.click}/>)
        }
    </div>
}

export default Todolist;