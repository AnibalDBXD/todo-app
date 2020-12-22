import { Task } from "../interfaces"
import Delete from "./icons/Delete"
import Colors from "../utils/Colors";

const TaskDetail = ({ _id, name, completed, createdDate }: Task) => {
    const date = new Date(createdDate)
    const LastDigit = date.getMilliseconds().toString().split('').pop();
    const NumberForColor = Math.floor(Number(LastDigit) / 2);
    return (
        <div className="flex justify-center content-center">
            <div className={`${Colors[NumberForColor]} rounded-xl my-5 mx-1 p-4 w-1/3 overflow-hidden xl:w-1/4`}>
                <p className="font-light text-gray-300">ID: {_id}</p>
                <div className="flex justify-between my-2">
                    <h1 className="text-white text-lg my-auto">{name}</h1>
                    <div className="my-auto block">
                        <p>
                            {`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
                        </p>
                        <p>{`${date.getHours()}:${date.getMinutes()}`}</p>
                    </div>
                </div>
                <div className="flex justify-between my-2">
                    <form action="">
                        <label htmlFor="completed" className="mr-2">Completed</label>
                        <input className="my-auto" type="checkbox" name="completed" id="completed" />
                    </form>
                    <button className="my-auto h-5 w-5"><Delete /></button>
                </div>
            </div>
        </div>
    )
}

export default TaskDetail
