import ProjectsGrid from "../../components/ProjectsGrid"

export default function Projects() {
  return (
    <section className="w-screen max-w-full flex justify-center items-center">
      <div className="container px-6 lg:px-0">
        <h1 className="font-bold text-2xl mb-4">Selected Projects</h1>
        <ProjectsGrid />
      </div>
    </section>
  )
}
