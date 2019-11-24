import React from 'react';

const TaskDisplay = ({tasks, deleteHandler}) => {
    return tasks.map((task) => {
        return (
            <div key={task.id} className="task">
                <p>{task.todo}</p>
                <button onClick={() => deleteHandler(task.id)}>삭제</button>
            </div>
        )
    });
};

export default TaskDisplay;