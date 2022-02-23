import Link from 'next/link';
import { PrismicText, PrismicRichText } from '@prismicio/react';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import ReactPlayer from 'react-player';
import { Client } from '../../utils/prismicHelpers';
import ClipLoader from 'react-spinners/SquareLoader';

const ProjectHeader = ({ title, type, videoUrl }) => {
  const [playerLoaded, setPlayerLoaded] = useState(false);

  return (
    <header className="my-8 lg:my-16">
      <Link href="/">
        <a className="font-primary text-xs hover:text-yellow-500">
          &#8617;Back to overview
        </a>
      </Link>
      <h2 className="mb-2 mt-8 text-xs uppercase text-yellow-500 lg:text-sm">
        {type}
      </h2>
      <h1 className="font-primary text-3xl lg:text-5xl">
        <PrismicText field={title} />
      </h1>
      <section className="relative mt-8 bg-gray-50 pt-[56.25%]">
        {!playerLoaded && (
          <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <ClipLoader color="#e5e7eb" size={30} />
          </div>
        )}
        <ReactPlayer
          className="absolute top-0 left-0"
          url={videoUrl.text}
          width="100%"
          height="100%"
          controls={true}
          onReady={() => setPlayerLoaded(true)}
        />
      </section>
    </header>
  );
};

export default function Project({ project }) {
  return (
    <Layout>
      <Container>
        <article>
          <ProjectHeader
            type={project.data.type}
            title={project.data.title}
            videoUrl={project.data['video-url'][0]}
          />
          <section className="container prose mx-auto max-w-3xl font-primary hover:prose-a:text-yellow-500">
            <PrismicRichText field={project.data.content} />
          </section>
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // params contains the project `uid`.
  // If the route is like /project/abc, then params.uid is abc
  const project = await Client().getByUID('project', params.uid);

  return { props: { project } };
}

export async function getStaticPaths() {
  // Call prismic client
  const allProjects = await Client().getAllByType('project');

  // Get the all paths we want to pre-render based on projects
  const paths = allProjects.map((project) => ({
    params: { uid: project.uid },
  }));

  // We'll pre-render only these paths at build time.
  // Enable statically generating additional pages
  return { paths, fallback: 'blocking' };
}
