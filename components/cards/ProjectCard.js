export default function ProjectCard() {
  return (
    <article className="rounded-xl shadow-md dark:bg-white/10 p-2">
      <div>
        <img
          src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="py-6">
        <h3 className="text-center">Project title</h3>
      </div>
    </article>
  )
}
