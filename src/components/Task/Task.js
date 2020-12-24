import React from "react";
import classNames from 'classnames/bind';

import styles from "./Task.module.scss";

import { connect } from 'react-redux';
import { handleTaskCompletion, handleTaskRemoval } from '../../actions/tasks.js';

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
    theme: state.theme.theme
});

const mapDispatchToProps = (dispatch) => ({
    dispatchOnTaskCompletion: (id) => dispatch(handleTaskCompletion(id)),
    dispatchOnTaskRemoval: (id) => dispatch(handleTaskRemoval(id))
});


const TaskComponent = ({id, name, description, completed, theme, dispatchOnTaskCompletion, dispatchOnTaskRemoval}) => {
    return (
        <div className={cx('task', `task-${theme}`)}>
            <h1>{name}</h1>
            <p>{description}</p>
            <button onClick={() => dispatchOnTaskCompletion(id)}>
                {completed ? "return" : "complete"}
            </button>
            <button onClick={() => dispatchOnTaskRemoval(id)}>
                delete
            </button>
        </div>
    );
};

export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent);
