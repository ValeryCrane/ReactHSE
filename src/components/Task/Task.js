import React from "react";
import classNames from 'classnames/bind'

import styles from "./Task.module.scss";

const cx = classNames.bind(styles);

const Task = (props) => {
    //Creating a task competion indicator text.
    const completed = props.task.completed ? "completed" : "";
    return (
        <div className={cx('task', `task-${props.theme}`)}>
            <h1 className={completed}>{props.task.name}</h1>
            <p className={completed}>{props.task.description}</p>
            <button onClick={() => props.click(props.task.id)}>
                {props.task.completed ? "return" : "complete"}
            </button>
        </div>
    );
};

export default Task;
