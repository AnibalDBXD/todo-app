import ListItem from './ListItem'
import { Task } from '../interfaces'

type Props = {
  items: Task[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item._id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
