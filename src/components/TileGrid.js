import Tile from './Tile';

const TileGrid = ({ data: allProjects }) => {
  console.log(allProjects);
  return (
    <section className="grid gap-y-8 gap-x-3 md:grid-cols-2 xl:grid-cols-3 xl:p-0">
      {allProjects.map((project, i) => (
        <Tile
          key={project.id}
          imageUrl={project.data.coverimage.url}
          type={project.data.type}
          title={project.data.title[0].text}
          uid={project.uid}
        />
      ))}
    </section>
  );
};

export default TileGrid;
