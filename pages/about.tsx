import Layout from '../components/Layout';

import Github from "../components/icons/Github"

const AboutPage = () => (
  <Layout title="About | TODO-APP">
    <div className="flex justify-center">
      <ul className="text-center">
        <li className="py-5 font-semibold text-xl">
          <a href="https://github.com/AnibalDBXD/todo-app" target="about_blank">
            <Github />
            <br />
            Code
          </a>
        </li>
        <li className="py-5 font-semibold text-xl">
          <a href="https://github.com/9gustin/todo-app-api" target="about_blank">
            <Github />
            <br />
            API
            </a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default AboutPage;
