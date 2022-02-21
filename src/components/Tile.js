import { PrismicText } from '@prismicio/react';
import Link from 'next/link';
import Image from 'next/image';

const Tile = ({
  imageUrl,
  type = 'project-type',
  title = 'project-title',
  uid,
}) => {
  return (
    <Link href={`/project/${uid}`}>
      <a>
        <article className="group relative mb-4">
          <figure className="relative aspect-[2.39/1] overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 z-10 h-full w-full transition duration-150 ease-in-out xl:group-hover:bg-black/40 xl:group-hover:backdrop-blur-sm" />
            <Image
              className="absolute top-0 left-0 h-1/3 object-cover"
              src={imageUrl}
              alt="my-image"
              layout="fill"
            />
          </figure>
          <figcaption className="absolute -bottom-8 w-3/4 bg-white px-2 py-3 xl:bottom-0 xl:z-20 xl:flex xl:h-full xl:w-full xl:flex-col xl:justify-center xl:bg-transparent xl:align-middle">
            <div className="xl:hidden xl:text-center xl:group-hover:block xl:group-hover:animate-fadeInUp">
              <h5 className="mb-1 font-primary text-xs uppercase text-yellow-500 ">
                {type}
              </h5>
              <h4 className="font-primary text-sm xl:text-white">
                <PrismicText field={title} />
              </h4>
            </div>
          </figcaption>
        </article>
      </a>
    </Link>
  );
};

export default Tile;
