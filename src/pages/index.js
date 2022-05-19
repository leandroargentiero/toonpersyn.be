import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import TileGrid from '../components/TileGrid';
import FilterButtons from '../components/FilterButtons';

import { Client } from '../utils/prismicHelpers';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  const [projects, setProjects] = useState(data);
  const [categories] = useState([
    'All',
    'Narrative',
    'Commercial',
    'Documentary',
  ]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const filteredProjects = data.filter((p) => p.data.type === filter);
    return filter === 'All' ? setProjects(data) : setProjects(filteredProjects);
  }, [data, filter]);

  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | DIRECTOR OF PHOTOGRAPHY</title>
        <meta
          property="og:image"
          content="https://images.prismic.io/website-toonpersyn/14dcd26b-eab8-49bf-8902-9b397225744a_share_toonpersyn.jpeg?auto=compress,format"
        />
      </Head>
      <Container>
        <FilterButtons
          categories={categories}
          filter={filter}
          handleOnClick={(filter) => setFilter(filter)}
        />
        <TileGrid projects={projects} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await Client().getAllByType('project', {
    orderings: {
      field: 'my.project.date desc',
    },
  });

  return {
    props: {
      data: projects,
    },
    revalidate: 10,
  };
}
