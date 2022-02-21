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

export async function getStaticProps({ params }) {
  const projects = await Client().getAllByType('project', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      allProjects: projects,
    },
  };
}
