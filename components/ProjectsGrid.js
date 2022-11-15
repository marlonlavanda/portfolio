import ProjectCard from "./cards/ProjectCard"

export default function ProjectsGrid() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
      {[...Array(4)].map((project, index) => {
        return <ProjectCard key={index} />
      })}
    </div>
  )
}
