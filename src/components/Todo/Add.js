import React, { useState } from 'react'
import AppContext from "../../context/AppContext";

const Add = () => {

    // Context
    const { addTask } = React.useContext(AppContext);

    // TaskName Input
    const [taskName, setTaskName] = useState("");
    const onChangeTaskName = ({ target }) => {
        setTaskName(target.value);
    }

    // On Add 
    const onClickAdd = () => {
        addTask(taskName);
        setTaskName("");
    }

    return (
        <div>
            <input placeholder="Add new task" value={taskName} onChange={onChangeTaskName} />
            <button onClick={onClickAdd}> Add  </button>
        </div>
    )
}



export default Add
