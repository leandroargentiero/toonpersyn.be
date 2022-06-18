import Tile from './Tile';
import { motion } from 'framer-motion';


const TileGrid = ({ projects }) => {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:p-0">
      {projects.map((project, i) => (
        <Tile
          key={project.id}
          imageUrl={project.data.coverimage.url}
          type={project.data.type}
          title={project.data.title}
          uid={project.uid}
          custom={i}
          framerKey={projects}
        />
      ))}
    </section>
  );
};

export default TileGrid;
