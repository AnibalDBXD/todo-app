import Link from "next/link"
import { Task } from "../interfaces";

type Props = {
    task: Task
    date: Date
}

const TaskItem = ({ task, date }: Props) => (
    <Link href={`/task/${task._id}`}>
        <a className="bg-red-500 rounded-xl my-1 mx-1 p-2 w-1/3 overflow-hidden xl:w-1/4">
            <h1 className="text-white">{task.name}</h1>
            <p>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        </a>
    </Link>
)

export default TaskItem
