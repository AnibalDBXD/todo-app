import Link from 'next/link'

import { Task } from '../interfaces'

type Props = {
  data: Task
}

const ListItem = ({ data }: Props) => (
  <Link href="/task/[id]" as={`/task/${data._id}`}>
    <a>
      {data._id}: {data.name}
    </a>
  </Link>
)

export default ListItem;
