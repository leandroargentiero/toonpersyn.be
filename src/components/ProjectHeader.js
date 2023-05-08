import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PrismicText } from '@prismicio/react';
import ClipLoader from 'react-spinners/SquareLoader';
import ReactPlayer from 'react-player';

const ProjectHeader = ({ title, type, videoUrl, thumbnail }) => {
  const [playerLoaded, setPlayerLoaded] = useState(false);

  return (
    <header className="my-8 lg:my-16">
      <Link href="/" className="font-primary text-xs hover:text-yellow-500">
        &#8617;Back to overview
      </Link>
      <h2 className="mb-2 mt-8 font-primary text-xs uppercase tracking-wider text-yellow-500">
        {type}
      </h2>
      <h1 className="font-primary text-2xl uppercase">
        <PrismicText field={title} />
      </h1>
      {videoUrl ? (
        <div className="relative mt-8 bg-gray-50 pt-[56.25%] dark:bg-neutral-800">
          {!playerLoaded && (
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <ClipLoader color="#e5e7eb" size={30} />
            </div>
          )}
          <ReactPlayer
            className="absolute left-0 top-0"
            url={videoUrl?.text}
            width="100%"
            height="100%"
            controls={true}
            onReady={() => setPlayerLoaded(true)}
          />
        </div>
      ) : (
        <div className="relative my-8 h-auto w-full">
          <Image
            className="object-cover"
            src={thumbnail}
            layout="responsive"
            width={2880}
            height={1077}
            alt={title}
          />
        </div>
      )}
    </header>
  );
};

export default ProjectHeader;
