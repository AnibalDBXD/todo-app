import { Task } from '../interfaces';

import { GetStaticProps } from "next";
import config from "../config.json";
import axios from 'axios';

import { FormEvent, useRef } from 'react';

import Link from 'next/link';
import Layout from '../components/Layout';
import InputPost from "../components/InputPost";

export type Props = {
  items?: Task[]
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
  if (errors) (
    <Layout title="Error! | Next.js + TypeScript">
      <h1>Error!: {errors}</h1>
    </Layout>
  )
  return (
    <Layout title="Home | Next.js + TypeScript">
      <InputPost />
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

export default IndexPage;
