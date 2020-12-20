import { Task } from '../interfaces'

type ListDetailProps = {
  item: Task
}

const ListDetail = ({ item }: ListDetailProps) => (
  <div>
    <h1>Detail for {item.name}</h1>
    <p>ID: {item._id}</p>
  </div>
)

export default ListDetail
