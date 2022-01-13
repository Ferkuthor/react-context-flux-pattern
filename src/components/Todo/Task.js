import React from 'react'

const Task = (props) => {
    return (
        <div>
            <span>* {props.taskName}</span>
            <button>Complete</button>
        </div>
    )
}

export default Task
