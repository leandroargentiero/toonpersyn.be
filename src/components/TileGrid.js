import Tile from './Tile';

const TileGrid = ({ projects }) => {
  return (
    <section className="grid gap-y-8 gap-x-3 md:grid-cols-2 xl:grid-cols-3 xl:p-0">
      {projects.map((project, i) => (
        <Tile
          key={project.id}
          imageUrl={project.data.coverimage.url}
          type={project.data.type}
          title={project.data.title}
          uid={project.uid}
          i={i}
        />
      ))}
    </section>
  );
};

export default TileGrid;
