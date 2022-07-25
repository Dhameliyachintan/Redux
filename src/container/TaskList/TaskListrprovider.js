import React, { createContext, useState } from 'react';

export const TaskContact = createContext()

function TaskListrprovider(props) {
    const [tasks, setTaskList] = useState([
        { title: "Tsak 01", priority: "Medium", id: 1 },
        { title: "Tsak 01", priority: "Medium", id: 1 }
    ])
    return (
        <TaskContact.Provider value={{ tasks }}>
            {props.children}
        </TaskContact.Provider>)
}

export default TaskListrprovider;