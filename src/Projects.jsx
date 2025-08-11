const latestProjectInfo = [
  {
    name: "Cartoon Podcast",
    date: "2025.05",
  },
  {
    name: "Mind The Game",
  },
  {
    name: "Cozy Leaf Restaurant",
  },
];

const Projects = () => {
  return (
    <section className="h-screen">
      <div className="latestproject grid grid-rows-1 gap-1">
        {latestProjectInfo.map(({ name, date }, index) => (
          <div className="bar border-1 border-black flex" key={index}>
            <p>{name}</p>
            <p>{date}</p>
            <div className="ml-auto">icon</div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;
