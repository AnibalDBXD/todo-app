import { Task } from '../interfaces';

import { GetStaticProps } from "next";
import config from "../config.json";
import axios from 'axios';

import Link from 'next/link';
import Layout from '../components/Layout';
import InputPost from "../components/InputPost";
import { useState } from 'react';

type Props = {
  items: Task[]
  errors?: string
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const items = (await axios.get(config.URL)).data.data;
    return {
      props: { items }
    }
  } catch (errors) {
    return { props: { errors } }
  }
}

const IndexPage = ({ items, errors }: Props) => {

  const [Tasks, setTasks] = useState(items);

  if (errors) (
    <Layout title="Error! | Next.js + TypeScript">
      <h1>Error!: {errors}</h1>
    </Layout>
  )
  return (
    <Layout title="Home | Next.js + TypeScript">
      <InputPost Tasks={Tasks} setTasks={setTasks} />
      <ul>
        {Tasks.map((task) => (
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

export default IndexPage;
