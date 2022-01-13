import React from 'react'
import Task from "./Task";

import AppContext from "../../context/AppContext";

const TaskList = (props) => {

    const { appState } = React.useContext(AppContext);

    if (appState.taskList.lenght === 0) {
        return <p>Add Your first task</p>
    }

    return (
        <div>
            <p> TODO List:</p>

            {appState.taskList.map((task, i) => (
                <Task key={i} taskName={task.name} />
            ))}

        </div>
    )
}

export default TaskList
