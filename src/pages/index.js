import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import TileGrid from '../components/TileGrid';

import mockData from './api/mockData';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | DIRECTOR OF PHOTOGRAPHY</title>
      </Head>
      <Container>
        <TileGrid data={mockData} />
      </Container>
    </Layout>
  );
}
