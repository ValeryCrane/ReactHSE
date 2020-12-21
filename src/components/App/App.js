import React from "react";
import classNames from 'classnames/bind'

import TaskList from "../TaskList/TaskList.js";
import TaskAdder from "../TaskAdder/TaskAdder.js";

import styles from "./App.module.scss";

const cx = classNames.bind(styles);

class App extends React.Component {

    //State, containing the last task id and the list of tasks.
    state = {
        theme: 'light',
        lastid: 0,
        newCount: 0,
        comletedCount: 0,
        tasks: []
    };

    //This method makes task with certain id completed.
    markAsCompleted = (id) => {
        
        let taskArray = this.state.tasks.map(task => ({...task}));
        let newCompletedCount = this.state.comletedCount;

        const idx = taskArray.findIndex((task) => task.id === id);
        if(taskArray[idx].completed) newCompletedCount--;
        else newCompletedCount++;
        taskArray[idx].completed ^= true;

        if (taskArray[idx].completed)
            taskArray.push(taskArray.splice(idx, 1)[0]);
        else taskArray.unshift(taskArray.splice(idx, 1)[0]);

        console.log(this.state);

        this.setState({
            ...this.state,
            tasks: taskArray,
            comletedCount: newCompletedCount
        });
    };

    //This method adds a task to the list.
    addATask = (name, description) => {
        let newState = {
            ...this.state,
            newCount: this.state.newCount + 1,
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
        this.setState(newState);
    };

    //This method сhanges the theme.
    changeTheme = () => {
        const newTheme = (this.state.theme === 'light' ? 'dark' : 'light');
        this.setState({
            ...this.state,
            theme: newTheme
        });
    }

    //This method renders whole app.
    render() {
        return (
            <div className={cx('app', `app-${this.state.theme}`)}>
                <TaskAdder 
                    className={cx('adder')}
                    addATask={this.addATask} 
                    theme={this.state.theme}
                    changeTheme={this.changeTheme}
                />

                <div className={cx('info')}>
                    {this.state.newCount !== this.state.comletedCount ?
                    <TaskList
                        tasks={this.state.tasks.filter(task => !task.completed)}
                        click={this.markAsCompleted}
                        header="Complete those:"
                        theme={this.state.theme}
                    />
                    :
                    ""
                    }
                    {this.state.comletedCount !== 0 ?
                    <TaskList
                        tasks={this.state.tasks.filter(task => task.completed)}
                        click={this.markAsCompleted}
                        header="Completed tasks:"
                        theme={this.state.theme}
                    />
                    :
                    ""
                    }
                    {this.state.tasks.length === 0 ? (
                        <h1 className={cx('no-tasks')}>Add your first task!</h1>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    }
}

export default App;
