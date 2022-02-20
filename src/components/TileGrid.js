import Tile from './Tile';

const TileGrid = ({ data }) => {
  return (
    <section className="grid gap-y-8 gap-x-3 md:grid-cols-2 xl:grid-cols-3 xl:p-0">
      {data.map((project, i) => (
        <Tile
          key={i}
          imageUrl={project.image}
          type={project.type}
          title={project.title}
        />
      ))}
    </section>
  );
};

export default TileGrid;
