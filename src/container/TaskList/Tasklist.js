import React, { useContext } from 'react';
import {TaskContact} from './TaskListrprovider'

function Tasklist(props) {
    const { tasks } = useContext(TaskContact)
    return (
        <div>
            {
                tasks.map(tasks => {
                    return (
                        <>
                            <h2>{tasks.id}</h2>
                            <h4>{tasks.title}</h4>
                            <p>{tasks.priority}</p>
                        </>
                    )
                })
            }
        </div>
    );
}

export default Tasklist;