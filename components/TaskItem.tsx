import Link from "next/link";
import { Task } from "../interfaces";
import Colors from "../utils/Colors";

type Props = {
    task: Task
    date: Date
};

const TaskItem = ({ task, date }: Props) => {
    const LastDigit = date.getMilliseconds().toString().split('').pop();
    const NumberForColor = Math.floor(Number(LastDigit) / 2);

    return (
        <Link href={`/task/${task._id}`}>
            <a className={`${Colors[NumberForColor]} rounded-xl my-1 mx-1 p-2 w-1/3 overflow-hidden xl:w-1/4`}>
                <h1 className="text-white">{task.name}</h1>
                <p>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
            </a>
        </Link>
    );
};

export default TaskItem;
