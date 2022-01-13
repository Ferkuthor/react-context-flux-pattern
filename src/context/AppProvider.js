import React, { useState } from 'react'

import AppContext from "./AppContext";

const AppProvider = (props) => {

    const [appState, setAppState] = useState({
        isLoading: false,
        taskList: []
    });

    return (
        <AppContext.Provider value={{
            appState: appState,
            addTask: taskName => setAppState({ ...appState, taskList: [...appState.taskList, { id: appState.taskList.length, name: taskName, completed: false }] }),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
