import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | DIRECTOR OF PHOTOGRAPHY</title>
      </Head>
      <Container>
        <Navbar />
        <h2>Homepage</h2>
      </Container>
    </Layout>
  );
}
