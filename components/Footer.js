export default function Footer() {
  return (
    <footer className="bg-mlr-primary py-6 w-screen max-w-full flex justify-center items-center">
      <div className="container flex  justify-between">
        <div>
          <span className="font-black text-white text-2xl">mlr</span>
        </div>
        <div>
          <span className="text-white text-lg">
            © Marlon Lavanda | All rights reserved.
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/omar-moquete"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="text-mlr-accent w-8 h-8">
              <use href="icons.svg#github"></use>
            </svg>
          </a>
          <a
            href="https://github.com/omar-moquete"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="text-mlr-accent w-8 h-8">
              <use href="icons.svg#linkedin"></use>
            </svg>
          </a>
          <a
            href="https://github.com/omar-moquete"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="text-mlr-accent w-8 h-10">
              <use href="icons.svg#twitter"></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
