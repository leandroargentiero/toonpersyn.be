import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | CONTACT</title>
      </Head>
      <Container>
        <Navbar />
        <h2>Contact Page</h2>
      </Container>
    </Layout>
  );
}
