import { Task } from "../interfaces";
import axios from "axios";
import TaskList from "./TaskList";

import config from "../config.json";
import { useState } from "react";

type Props = {
    Tasks: Task[],
};

const CompletedTaskList = ({ Tasks }: Props) => {
    const [CompletedTasks, setCompletedTasks] = useState(Tasks);

    const deleteAll = () => {
        Tasks.forEach((Task) => {
            axios.delete(`${config.URL}/${Task._id}`);
        });
        setCompletedTasks([]);
        alert("Success");
    };

    return (
        <>
            <h1 className="font-medium text-center text-xl m-2">Completed Task</h1>
            <div className="flex justify-center">
                <button className="bg-red-500 rounded-md shadow-sm p-1 px-2 text-white" onClick={deleteAll}>Delete All</button>
            </div>
            <TaskList Tasks={CompletedTasks} />
        </>
    );
};

export default CompletedTaskList;
