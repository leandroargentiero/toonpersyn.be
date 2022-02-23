import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import TileGrid from '../components/TileGrid';
import FilterButtons from '../components/FitlerButtons';

import { Client } from '../utils/prismicHelpers';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  const [projects, setProjects] = useState(data);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const allCategories = projects.map((project) => project.data.type);
    const filterUniqueCategories = [...new Set(allCategories)];
    setCategories(['All', ...filterUniqueCategories]);
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
