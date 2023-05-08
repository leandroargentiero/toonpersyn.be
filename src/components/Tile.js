import { useState } from 'react';
import { PrismicText } from '@prismicio/react';
import Link from 'next/link';
import Image from 'next/image';
import Loader from './Loader';
import { motion } from 'framer-motion';

const tileVariants = {
  hidden: {
    y: 16,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: custom * 0.02,
    },
  }),
};

const Tile = ({
  imageUrl,
  type = 'project-type',
  title = 'project-title',
  uid,
  custom,
  framerKey,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      key={framerKey}
      variants={tileVariants}
      layout
      initial="hidden"
      animate="visible"
      custom={custom}
    >
      <Link href={`/project/${uid}`} passHref>
        <article className="group relative mb-4 md:mb-0">
          <figure className="aspect-h-1 aspect-w-[2.39] relative overflow-hidden bg-gray-50 shadow-sm">
            {!loaded ? (
              <Loader bgColor="bg-gray-50" iconColor="#e5e7eb" size={25} />
            ) : (
              <div className="absolute left-0 top-0 z-10 h-full w-full transition duration-150 ease-in-out xl:group-hover:bg-black/40 xl:group-hover:backdrop-blur-sm" />
            )}
            <Image
              className="absolute left-0 top-0 h-1/3 object-cover"
              src={imageUrl}
              alt="my-image"
              layout="fill"
              onLoadingComplete={() => setLoaded(true)}
            />
          </figure>
          {loaded && (
            <figcaption className="absolute -bottom-8 w-3/4 bg-white px-2 py-3 dark:bg-neutral-900 xl:bottom-0 xl:z-20 xl:flex xl:h-full xl:w-full xl:flex-col xl:justify-center xl:bg-transparent xl:align-middle">
              <div className="xl:hidden xl:text-center xl:group-hover:block xl:group-hover:animate-fadeInUp">
                <h5 className="mb-1 text-xs uppercase text-yellow-500 ">
                  {type}
                </h5>
                <h4 className="font-primary text-sm xl:text-white">
                  <PrismicText field={title} />
                </h4>
              </div>
            </figcaption>
          )}
        </article>
      </Link>
    </motion.div>
  );
};

export default Tile;
