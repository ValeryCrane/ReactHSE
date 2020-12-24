import React from 'react';
import { Task } from '../Task/Task.js';
import classNames from 'classnames/bind'

import styles from './TaskList.module.scss';

import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks
});

const TaskListComponent = ({tasks, type}) => {
    const header = ( type === 'completed' ? 'Completed:' : 'To be completed:' );
    const filteredTasks = ( type === 'completed' ? tasks.filter(task => task.completed) : 
                                                   tasks.filter(task => !task.completed));
    return(
        <div>
            <h1 className={cx('header')}>{header}</h1>
            <div className={cx('tasks')}>
                {
                   filteredTasks.map(task => 
                        <Task 
                            id={task.id}
                            key={task.id}
                            name={task.name}
                            description={task.description}
                            completed={task.completed}
                        />)
                }
            </div>
        </div>
    )
}

export const TaskList = connect(mapStateToProps)(TaskListComponent);