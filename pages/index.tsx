import { useState } from 'react';
import { Task } from '../interfaces';

import { GetStaticProps } from "next";
import config from "../config.json";
import axios from 'axios';

import TaskList from "../components/TaskList";
import Layout from '../components/Layout';
import InputPost from "../components/InputPost";
import CompletedTaskList from '../components/CompletedTaskList';

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
  const IncompletedTask = items.filter((task) => task.completed !== true);

  const CompletedTask = items.filter((task) => task.completed);

  const [Tasks, setTasks] = useState(IncompletedTask);

  if (errors) (
    <Layout title="Error! | TODO-APP">
      <h1>Error!: {errors}</h1>
    </Layout>
  );
  return (
    <Layout title="Home | TODO-APP">
      <InputPost Tasks={Tasks} setTasks={setTasks} />
      <TaskList Tasks={IncompletedTask} />
      <hr />
      <CompletedTaskList Tasks={CompletedTask} />
    </Layout>
  );
};

export default IndexPage;
