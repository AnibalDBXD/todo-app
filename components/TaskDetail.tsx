import { Task } from "../interfaces"

const TaskDetail = ({ _id, name, completed, createdDate }: Task) => {
    return (
        <div>
            {name}
        </div>
    )
}

export default TaskDetail
