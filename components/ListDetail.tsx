import { Task } from '../interfaces'

type ListDetailProps = {
  item: Task
}

const ListDetail = ({ item: Task }: ListDetailProps) => (
  <div>
    <h1>Detail for {Task.name}</h1>
    <p>ID: {Task._id}</p>
  </div>
)

export default ListDetail
