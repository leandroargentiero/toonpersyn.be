import { useState } from 'react';
import Link from 'next/link';
import { PrismicText } from '@prismicio/react';
import ClipLoader from 'react-spinners/SquareLoader';
import ReactPlayer from 'react-player';

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
      <section className="relative mt-8 bg-gray-50 pt-[56.25%] dark:bg-neutral-800">
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

export default ProjectHeader;
