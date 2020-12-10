import React from "react";
import "./TaskAdder.css";

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
            <div class="taskAdder">
                <h1>Add a task</h1>
                <input
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    placeholder="name"
                />
                <input
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="description"
                />
                <button onClick={this.addATask}>Add</button>
            </div>
        );
    }
}

export default TaskAdder;
