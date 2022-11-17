import ProjectsGrid from "../../components/ProjectsGrid"

export default function Projects() {
  return (
    <section className="w-screen max-w-full flex justify-center items-center py-12 md:py-16 xl:py-20">
      <div className="container px-6 md:px-12 xl:px-20 2xl:px-0">
        <h1 className="font-bold text-2xl mb-4 text-center lg:text-left">
          Selected Projects
        </h1>
        <ProjectsGrid />
      </div>
    </section>
  )
}
