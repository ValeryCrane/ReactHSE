import React from "react";
import classNames from "classnames/bind";

import styles from "./TaskAdder.module.scss";

import { connect } from 'react-redux';

import { handleThemeChange } from '../../actions/theme.js';
import { handleTaskAddition } from '../../actions/tasks.js'

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
    theme: state.theme.theme
});

const mapDispatchToProps = (dispatch) => ({
    dispatchOnTaskAddition: (name, description) => dispatch(handleTaskAddition(name, description)),
    dispatchOnThemeChange: () => dispatch(handleThemeChange())
});

class TaskAdderComponent extends React.Component {
    //State, containing input values.
    state = {
        name: "",
        description: ""
    };

    //Method, that handles change of the name input.
    handleNameChange = (event) => {
        const { value } = event.target;
        this.setState({
            name: value,
            description: this.state.description,
        });
    };

    //Method, that handles change of the name input.
    handleDescriptionChange = (event) => {
        const { value } = event.target;
        this.setState({
            name: this.state.name,
            description: value,
        });
    };

    handleTaskAddition = () => {
        if(this.state.name === "" || this.state.description === "")
            return;
        this.props.dispatchOnTaskAddition(
            this.state.name,
            this.state.description
            );
        this.setState({
            name: "",
            description: ""
        })
    }

    //Render, finally...
    render() {
        return (
            <div className={cx("adder", `adder-${this.props.theme}`)}>
                <h1>Add a task</h1>
                <div
                    className={cx(
                        "input-wrapper",
                        `input-wrapper-${this.props.theme}`
                    )}
                >
                    <input
                        className={cx("input", `input-${this.props.theme}`)}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder="name"
                    />
                    <span className={cx("bar")}></span>
                </div>
                <div
                    className={cx(
                        "input-wrapper",
                        `input-wrapper-${this.props.theme}`
                    )}
                >
                    <input
                        className={cx("input", `input-${this.props.theme}`)}
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        placeholder="description"
                    />
                    <span className={cx("bar")}></span>
                </div>
                <button onClick={this.handleTaskAddition}>Add</button>
                <button
                    onClick={this.props.dispatchOnThemeChange}
                    className={cx("theme")}
                >
                    Change Theme
                </button>
            </div>
        );
    }
}

export const TaskAdder = connect(mapStateToProps, mapDispatchToProps)(TaskAdderComponent);
