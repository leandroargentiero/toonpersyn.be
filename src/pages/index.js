import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import TileGrid from '../components/TileGrid';

import { mockData } from './../utils/mockData';

import { Client } from '../utils/prismicHelpers';
import * as prismic from '@prismicio/client';

import { RichText } from 'prismic-reactjs';

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
  const projects = await Client().get('');

  console.log(projects);

  return {
    props: {
      allProjects: projects.results,
    },
  };
}
