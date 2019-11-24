import React from 'react';

const TaskAdd = ({value, changeHandler, clickHandler}) => {
    return (
        <form className="add-task">
            <input value={value} placeholder="할일을 입력하세요" onChange={changeHandler}/>
            <button onClick={clickHandler}>저장</button>
        </form>
    )
};

export default TaskAdd;