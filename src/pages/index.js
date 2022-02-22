import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import TileGrid from '../components/TileGrid';

import { Client } from '../utils/prismicHelpers';

export default function Home({ allProjects }) {
  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | DIRECTOR OF PHOTOGRAPHY</title>
      </Head>
      <Container>
        <TileGrid data={allProjects} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjects = await Client().getAllByType('project', {
    orderings: {
      field: 'my.project.date desc',
    },
  });

  return {
    props: {
      allProjects: allProjects,
    },
  };
}
