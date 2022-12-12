export default function ProjectCard({ details }) {
  return (
    <article className="rounded-xl shadow-md dark:bg-white/10 p-2">
      <div>
        <img src={details.projectImage.url} alt="" className="rounded-lg" />
      </div>
      <div className="py-6">
        <div className="flex gap-2 justify-center">
          <a
            href={details.projectLink}
            className="flex gap-2 items-center"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-xl xl:text-2xl font-bold hover:cursor-pointer">
              {details.title}
            </span>
            <span className="text-mlr-primary dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </a>
          <h3 className="text-center text-xl xl:text-2xl font-bold"></h3>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {details?.technologies?.map((tech, index) => (
            <div
              key={index}
              className="bg-mlr-primary/10 dark:bg-white/10 px-2 rounded-full"
            >
              <span className="text-mlr-primary dark:text-white text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
