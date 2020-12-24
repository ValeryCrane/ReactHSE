import React from 'react';
import Task from '../Task/Task.js';
import classNames from 'classnames/bind'

import styles from './TaskList.module.scss';

const cx = classNames.bind(styles);

const TaskList = (props) => {
    //Just rendering to-do list.
    return <div>
        <h1>{props.header}</h1>
        <div className={cx('tasks', `tasks-${props.theme}`)}>
            {
                props.tasks.map(task => 
                    <Task 
                        task={task} 
                        key={task.id} 
                        click={props.click} 
                        theme={props.theme}
                    />)
            }
        </div>
    </div>
}

export default TaskList;