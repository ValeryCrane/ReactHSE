import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../../reducers/index';

import { TaskAdder } from '../TaskAdder/TaskAdder.js';
import { Info } from '../Info/Info.js';

const store = createStore(rootReducer)


function App() {
    return (
        <Provider store={store}>
            <TaskAdder />
            <Info />
        </Provider>
    );
}

export default App;
