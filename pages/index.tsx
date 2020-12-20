import { GetStaticProps } from "next";
import { Task } from '../interfaces';
import Link from 'next/link';
import Layout from '../components/Layout';

export type Props = {
  items?: Task[]
  errors?: string
}

const IndexPage = ({ items, errors }: Props) => {
  if (errors) (
    <Layout title="Error! | Next.js + TypeScript">
      <h1>Error!: {errors}</h1>
    </Layout>
  )
  return (
    <Layout title="Home | Next.js + TypeScript">
      <ul>
        {items?.map((task) => (
          <Link key={task._id} href={`/task/${task._id}`}>
            <li>
              <a>{task.name}</a>
            </li>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`https://todo-app-api-gamma.herokuapp.com/todo/`);
    const items = await res.json();
    return { props: { items: items.data } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
export default IndexPage
