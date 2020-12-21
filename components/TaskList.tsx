
import Link from 'next/link';
import { Task } from "../interfaces";

type Props = {
    Tasks: Task[]
}
const TaskList = ({ Tasks }: Props) => {
    return (
        <ul>
            {Tasks.map((task) => (
                <Link key={task._id} href={`/task/${task._id}`}>
                    <li>
                        <a>{task.name}</a>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default TaskList
