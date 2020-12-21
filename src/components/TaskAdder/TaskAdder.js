import React from "react";
import classNames from "classnames/bind";

import styles from "./TaskAdder.module.scss";

const cx = classNames.bind(styles);

class TaskAdder extends React.Component {
    //State, containing input values.
    state = {
        name: "",
        description: "",
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

    //Method, that clears all inputs, after adding a task.
    addATask = () => {
        if (!(this.state.description && this.state.name)) return;
        this.props.addATask(this.state.name, this.state.description);
        this.setState({
            name: "",
            description: "",
        });
    };

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
                <button onClick={this.addATask}>Add</button>
                <button
                    onClick={this.props.changeTheme}
                    className={cx("theme")}
                >
                    Change Theme
                </button>
            </div>
        );
    }
}

export default TaskAdder;
