import { Task } from '../../interfaces';

import { GetServerSideProps } from "next";
import axios from "axios";
import config from "../../config.json";


import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

export type Props = {
  item?: Task
  errors?: string
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  try {
    const item = (await axios.get(`${config.URL}/${id}`)).data.data;
    console.log(item);
    return {
      props: { item }
    }
  } catch (errors) {
    return { props: { errors } }
  }
}

const OneTask = ({ item, errors }: Props) => {
  if (errors) (
    <Layout title="Error | Next.js + TypeScript Example">
      <p>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </p>
    </Layout>
  );
  return (
    <Layout
      title={`${item ? item.name : 'Task Detail'
        } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default OneTask;
