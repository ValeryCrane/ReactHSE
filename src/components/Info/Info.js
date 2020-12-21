import React from 'react';
import classNames from 'classnames/bind'
import { TaskList } from '../TaskList/TaskList.js'

import styles from "./Info.module.scss";

import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
    all: state.tasks.all,
    completed: state.tasks.completed
});

const InfoComponent = ({theme, all, completed}) => {
    return (
        <div className={cx('info', `info-${theme}`)}>
            {
                all !== completed ?
                <TaskList type="non-completed"/> : ""
            }
            {
                completed !== 0 ?
                <TaskList type="completed"/> : ""
            }
            { 
                all === 0 ? 
                <h1>Add your first task!</h1> : ""
            }
        </div>
    )
}

export const Info = connect(mapStateToProps)(InfoComponent);