import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import TileGrid from '../components/TileGrid';
import FilterButtons from '../components/FilterButtons';

import { Client } from '../utils/prismicHelpers';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  const [projects, setProjects] = useState(data);
  const [categories, setCategories] = useState(['All']);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const allCategories = projects.map((project) => project.data.type);
    const filterUniqueCategories = [...new Set(allCategories)];
    setCategories([...categories, ...filterUniqueCategories]);
  }, []);

  const handleFilterClick = (e) => {
    const category = e.target.value;
    setFilter(category);
    const filteredProjects = data.filter((p) => p.data.type === category);

    if (category === 'All') {
      return setProjects(data);
    }

    return setProjects(filteredProjects);
  };

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
          handleFilterClick={handleFilterClick}
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
