import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import Container from '../components/Container';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | CONTACT</title>
      </Head>
      <Container>
        <div className="flex h-[60vh] flex-col justify-evenly font-primary text-sm">
          <section className="content mt-6 grid grid-rows-3 justify-items-start gap-y-2 md:gap-y-0">
            <h4 className="mb-2 font-bold uppercase">Details</h4>
            <p>+32472271589</p>
            <p>info@toonpersyn.be</p>
            <p>BE 0659.774.994</p>
          </section>
          <section className="mt-6 grid grid-rows-3 justify-items-end gap-y-2">
            <h4 className="mb-2 inline-block font-bold uppercase">socials</h4>
            <a
              href="https://www.imdb.com/name/nm8900949/"
              className="underline hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              IMDb
            </a>
            <a
              href="https://vimeo.com/toonpersyn"
              className="underline hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              Vimeo
            </a>
            <a
              href="https://www.instagram.com/toonpersyn/"
              className="underline hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/toon-persyn-7009b0149/"
              className="underline hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
