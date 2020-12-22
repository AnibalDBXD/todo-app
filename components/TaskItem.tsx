import Link from "next/link"
import { Task } from "../interfaces";

type Props = {
    task: Task
    date: Date
}

const TaskItem = ({ task, date }: Props) => {
    const Colors = [
        "bg-blue-500",
        "bg-red-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-indigo-500"
    ]
    const LastDigit = date.getMilliseconds().toString().split('').pop();
    const NumberForColor = Math.floor(Number(LastDigit) / 2);

    return (
        <Link href={`/task/${task._id}`}>
            <a className={`${Colors[NumberForColor]} rounded-xl my-1 mx-1 p-2 w-1/3 overflow-hidden xl:w-1/4`}>
                <h1 className="text-white">{task.name}</h1>
                <p>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
            </a>
        </Link>
    )
}

export default TaskItem
