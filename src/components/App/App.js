import React from "react";
import "./App.css";
import TodoList from "../TodoList/TodoList.js";
import TaskAdder from "../TaskAdder/TaskAdder.js";

class App extends React.Component {

    //State, containing the last task id and the list of tasks.
    state = {
        lastid: 0,
        tasks: [],
    };

    //This method makes task with certain id completed.
    markAsCompleted = (id) => {
        let newState = {
            ...this.state,
        };

        const idx = newState.tasks.findIndex((task) => task.id === id);
        newState.tasks[idx].completed ^= true;

        if (newState.tasks[idx].completed)
            newState.tasks.push(newState.tasks.splice(idx, 1)[0]);
        else newState.tasks.unshift(newState.tasks.splice(idx, 1)[0]);

        console.log(this.state);

        console.log("test");
        this.setState(newState);
    };

    //This method adds a task to the list.
    addATask = (name, description) => {
        let newState = {
            lastid: this.state.lastid + 1,
            tasks: [
                {
                    id: this.state.lastid,
                    name: name,
                    description: description,
                    completed: false,
                },
                ...this.state.tasks,
            ],
        };

        console.log("test");
        this.setState(newState);
    };

    //This method renders whole app.
    render() {
        return (
            <div>
                <TaskAdder addATask={this.addATask} />
                <TodoList
                    tasks={this.state.tasks}
                    click={this.markAsCompleted}
                />
                {this.state.tasks.length === 0 ? (
                    <div class="noTasks">Add your first task!</div>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default App;
