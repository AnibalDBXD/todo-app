import { GetServerSideProps } from "next";
import { Task } from '../../interfaces';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

export type Props = {
  item?: Task
  errors?: string
};

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
      title={`${item ? item.name : 'User Detail'
        } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};
export default OneTask;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  try {
    const res = await fetch(`https://todo-app-api-gamma.herokuapp.com/todo/${id}`);
    const item = await res.json();
    return { props: { item: item.data } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
