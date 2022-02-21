import Layout from '../../components/Layout';
import Container from '../../components/Container';
import ReactPlayer from 'react-player';

const data = {
  type: 'Documentary',
  title: 'Pistone Ventinove',
  videoUrl: 'https://vimeo.com/661131865',
};

const ProjectHeader = () => {
  return (
    <header className="my-8 lg:my-16">
      <h2 className="mb-2 text-xs uppercase text-yellow-500 lg:text-sm">
        {data.type}
      </h2>
      <h1 className="font-primary text-3xl lg:text-5xl">{data.title}</h1>
      <section className="relative mt-8 pt-[56.25%]">
        <ReactPlayer
          className="absolute top-0 left-0"
          url={data.videoUrl}
          width="100%"
          height="100%"
          controls="true"
        />
      </section>
    </header>
  );
};

export default function Project() {
  return (
    <Layout>
      <Container>
        <article>
          <ProjectHeader
            type={data.type}
            title={data.title}
            videoUrl={data.videoUrl}
          />
          <section className="container mx-auto max-w-3xl font-primary text-base lg:text-xl">
            <p>Starting off 2022 with a project close to my heart.</p>
            <p>
              Friends of mine asked for a video for the release of their new
              premium olive oil brand @pistoneventinove, but during filming we
              felt like there was more to it. Good food doesnt only mean good
              quality or good taste. It also means producing it the natural way
              and not having everything available every fucking time of the year
              just because you want it to. It means slowing down this crazy life
              were living in and trying to maintain quality through tradition
              and seasonal harvest.
            </p>
            <p>
              Shot and directed by me on @reddigitalcinema and @kodak_shootfilm
              Super8. Masterfully edited by @fausto.fazzari Seamlessly produced
              by @mait.tv With the help from @leandroargentiero ,
              @charlotteannedeclercq and @franco.argentiero
            </p>
          </section>
        </article>
      </Container>
    </Layout>
  );
}
