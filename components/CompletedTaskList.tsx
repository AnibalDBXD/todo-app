import { Task } from "../interfaces"
import TaskList from "./TaskList"

type Props = {
    Tasks: Task[]
}

const CompletedTaskList = ({ Tasks }: Props) => (
    <div>
        <h1 className="font-medium text-center text-xl m-2">Completed Task</h1>
        <TaskList Tasks={Tasks} />
    </div>
)

export default CompletedTaskList
