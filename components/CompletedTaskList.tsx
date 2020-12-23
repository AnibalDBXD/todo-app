import { Task } from "../interfaces"
import TaskList from "./TaskList"

type Props = {
    Tasks: Task[]
}

const CompletedTaskList = ({ Tasks }: Props) => {
    const CompletedTasks = Tasks.filter((Task) => Task.completed);
    return (
        <div>
            <h1 className="font-medium text-center text-xl m-2">Completed Task</h1>
            <TaskList Tasks={CompletedTasks} />
        </div>
    )
}

export default CompletedTaskList
