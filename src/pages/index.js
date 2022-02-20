import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import TileGrid from '../components/TileGrid';

const mockData = [
  {
    title: 'FC United - City Pirates',
    type: 'Documentary',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Pistone Ventinove',
    type: 'Commercial',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Les Hommes',
    type: 'Fashion',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Visit Ghent - Lovedown',
    type: 'Commercial',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Radio Willy',
    type: 'Commercial',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'Guestworkers',
    type: 'Shortfilm',
    image: 'https://source.unsplash.com/random',
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | DIRECTOR OF PHOTOGRAPHY</title>
      </Head>
      <Container>
        <Navbar />
        <TileGrid data={mockData} />
      </Container>
    </Layout>
  );
}
