import { Task } from "../interfaces";
import TaskItem from "./TaskItem"

type Props = {
    Tasks: Task[]
}
const TaskList = ({ Tasks }: Props) => {
    return (
        <div className="flex flex-wrap overflow-hidden p-5 justify-center">
            {Tasks.map((task) => {
                const date = new Date(task.createdDate)
                return (
                    <TaskItem key={task._id} task={task} date={date} />
                )
            })}
        </div>
    )
}

export default TaskList
