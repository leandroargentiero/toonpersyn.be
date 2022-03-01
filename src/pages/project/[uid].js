import Head from 'next/head';
import { Client } from '../../utils/prismicHelpers';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import ProjectHeader from '../../components/ProjectHeader';
import ProjectBody from '../../components/ProjectBody';

export default function Project({ project }) {
  return (
    <Layout>
      <Head>
        <title>TOON PERSYN | {project.data.title[0].text}</title>
        <meta property="og:image" content={project.data.coverimage.url} />
      </Head>
      <Container>
        <article>
          <ProjectHeader
            type={project.data.type}
            title={project.data.title}
            videoUrl={project.data['video-url'][0]}
          />
          <ProjectBody content={project.data.content} />
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // params contains the project `uid`.
  // If the route is like /project/abc, then params.uid is abc
  const project = await Client().getByUID('project', params.uid);

  return { props: { project }, revalidate: 10 };
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
