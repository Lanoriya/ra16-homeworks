export function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project, index) =>
        <img key={index} src={project.img} alt={project.img}/>)
      }
    </div>
  )
};