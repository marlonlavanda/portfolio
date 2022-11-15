export default function Footer() {
  return (
    <footer className="py-6 w-screen max-w-full flex justify-center items-center">
      <div className="container flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
        <div>
          <span className="font-black text-2xl">mlr</span>
        </div>
        <div>
          <span className="text-sm lg:text-lg">
            © Marlon Lavanda | All rights reserved.
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/omar-moquete"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="w-8 h-8">
              <use href="icons.svg#github"></use>
            </svg>
          </a>
          <a
            href="https://github.com/omar-moquete"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="w-8 h-8">
              <use href="icons.svg#linkedin"></use>
            </svg>
          </a>
          <a
            href="https://github.com/omar-moquete"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="w-8 h-10">
              <use href="icons.svg#twitter"></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
