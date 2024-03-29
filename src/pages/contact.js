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
        <div className="ml-auto h-[60vh] max-w-xs font-primary text-sm">
          <section className="w-auto pt-36 text-right">
            <p>+32472271589</p>
            <p>info@toonpersyn.be</p>
            <p>Mechelen, Belgium</p>
            <p>BTW/VAT: BE 1001.446.905</p>
            <br />
            <p>
              Rookie member of the{' '}
              <a
                href=" http://www.sbcine.be/"
                target="_blank"
                className="underline hover:no-underline"
              >
                SBC
              </a>
            </p>
          </section>
          <section className="mt-6 grid auto-cols-max grid-flow-col justify-end gap-x-2">
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
          </section>
        </div>
      </Container>
    </Layout>
  );
}
