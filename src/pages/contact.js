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
        {/* <div className="grid place-items-center justify-around py-16 text-center font-primary">
          <article className="shadow-gray-20  rounded-sm bg-white p-8 text-sm shadow-md">
            <section>
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={'/images/profile-pic.jpeg'}
                  alt="profile-pic"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="65%"
                />
              </div>
              <div className="mt-2">
                <h2 className="text-xl">Toon Persyn</h2>
                <h3 className="text-gray-500">Director Of Photography</h3>
                <p className="text-gray-500">Mechelen, Belgium</p>
              </div>
            </section>
            <section className="mt-6">
              <p>+32472271589</p>
              <p>info@toonpersyn.be</p>
              <p>BE 0659.774.994</p>
            </section>
            <section className="mt-6 grid grid-flow-col gap-x-3">
              <a
                href="https://www.imdb.com/name/nm8900949/"
                className="hover:text-yellow-500"
                target="_blank"
                rel="noreferrer"
              >
                IMDb
              </a>
              <a
                href="https://vimeo.com/toonpersyn"
                className="hover:text-yellow-500"
                target="_blank"
                rel="noreferrer"
              >
                Vimeo
              </a>
              <a
                href="https://www.instagram.com/toonpersyn/"
                className="hover:text-yellow-500"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/toon-persyn-7009b0149/"
                className="hover:text-yellow-500"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </section>
          </article>
        </div> */}
      </Container>
    </Layout>
  );
}
