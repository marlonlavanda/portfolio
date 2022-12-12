import ProjectCard from "./cards/ProjectCard"

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects &&
        projects.map((project, index) => {
          return <ProjectCard details={project} key={index} />
        })}
    </div>
  )
}
