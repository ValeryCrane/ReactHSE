import { NEW_TASK, REMOVE_TASK, CHANGE_TASK } from '../actions/tasks.js';

const initialState = {
    all: 0,
    completed: 0,
    maxId: 0,
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type){

        case NEW_TASK: {
            console.log(state);
            return {
                ...state,
                all: state.all + 1,
                maxId: state.maxId + 1,
                tasks:[
                    ...state.tasks,
                    {
                        id: state.all,
                        name: action.payload.name,
                        description: action.payload.description,
                        completed: false
                    }
                ]
            }
        }

        case CHANGE_TASK: {

            let taskArray = state.tasks.map(task => ({...task}));
            let newCompletedCount = state.completed;

            const idx = taskArray.findIndex((task) => task.id === action.payload);
            if(taskArray[idx].completed) newCompletedCount--;
            else newCompletedCount++;
            taskArray[idx].completed ^= true;

            if (taskArray[idx].completed)
                taskArray.push(taskArray.splice(idx, 1)[0]);
            else taskArray.unshift(taskArray.splice(idx, 1)[0]);

            return {
                ...state,
                completed: newCompletedCount,
                tasks: taskArray
            }
        }

        case REMOVE_TASK: {

            console.log(state);

            let taskArray = state.tasks.map(task => ({...task}));
            let newCompletedCount = state.completed;
            let newAllCount = state.all;

            const idx = taskArray.findIndex((task) => task.id === action.payload);
            if(taskArray[idx].completed) newCompletedCount--;
            taskArray.splice(idx, 1);
            newAllCount--;

            return {
                ...state,
                completed: newCompletedCount,
                all: newAllCount,
                tasks: taskArray
            }
        }

        default:
            return state;
    }
}