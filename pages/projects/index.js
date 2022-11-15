import ProjectsGrid from "../../components/ProjectsGrid"

export default function Projects() {
  return (
    <section className="w-screen max-w-full flex justify-center items-center py-16 lg:py-96">
      <div className="container">
        <h1 className="font-bold text-2xl mb-4 text-center lg:text-left">
          Selected Projects
        </h1>
        <ProjectsGrid />
      </div>
    </section>
  )
}
