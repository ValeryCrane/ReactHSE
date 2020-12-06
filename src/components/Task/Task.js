import React from 'react'
import './Task.css';

const Task = props => {
    const completed = props.task.completed ? 'completed' : '';
    return <div className="task">
                <h1 className={completed}>{props.task.name}</h1>
                <p className={completed}>{props.task.description}</p>
                <button onClick={()=>props.click(props.task.id)}>
                    {props.task.completed ? 'return' : 'complete'}
                </button>
            </div>
}

export default Task;