import { useState } from 'react';
import { Task } from '../interfaces';

import { GetStaticProps } from "next";
import config from "../config.json";
import axios from 'axios';

import TaskList from "../components/TaskList";
import Layout from '../components/Layout';
import InputPost from "../components/InputPost";

type Props = {
  items: Task[]
  errors?: string
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const items = (await axios.get(config.URL)).data.data;
    return {
      props: { items }
    };
  } catch (errors) {
    return { props: { errors } }
  };
};

const IndexPage = ({ items, errors }: Props) => {

  const [Tasks, setTasks] = useState(items);

  if (errors) (
    <Layout title="Error! | Next.js + TypeScript">
      <h1>Error!: {errors}</h1>
    </Layout>
  );
  return (
    <Layout title="Home | Next.js + TypeScript">
      <InputPost Tasks={Tasks} setTasks={setTasks} />
      <TaskList Tasks={Tasks} />
    </Layout>
  );
};

export default IndexPage;
