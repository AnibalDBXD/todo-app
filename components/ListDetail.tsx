import { Task } from '../interfaces'

type ListDetailProps = {
  Task: Task
}

const ListDetail = ({ Task }: ListDetailProps) => (
  <div>
    <h1>Detail for {Task.name}</h1>
    <p>ID: {Task._id}</p>
  </div>
)

export default ListDetail
