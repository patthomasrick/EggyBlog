import { NAME, SUBTITLE } from "../components/config";
import Layout from "../components/layout";

export default function HomePage() {
  return (
    <>
      <Layout title={NAME} subtitle={SUBTITLE}>
        <p>Develop. Preview. Ship. 🚀</p>
      </Layout>
    </>
  );
}
