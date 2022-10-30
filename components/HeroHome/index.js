export default function HeroHome() {
  return (
    <section className="w-screen max-w-full h-[85vh] bg-mlr-primary flex justify-center">
      <div className="container flex items-center">
        <div className="w-1/2">
          <div>
            <p className="text-mlr-accent text-xl font-medium">Hi there!</p>
            <div className="text-6xl font-gravitas pt-4 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mlr-accent  to-mlr-secondary">
                {"I'm"} Marlon
              </span>
            </div>
            <h2 className="text-white text-4xl font-black">
              Front End Engineer
            </h2>
            <div className="pt-4">
              <p className="text-white max-w-[500px]">
                {"I'm"} a front-end developer with a passion for building
                awesome things for the web using core technologies such as
                HTML5, CSS3, and JavaScript.
              </p>
            </div>
            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/omar-moquete"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="text-white w-8 h-8">
                  <use href="icons.svg#github"></use>
                </svg>
              </a>
              <a
                href="https://github.com/omar-moquete"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="text-white w-8 h-8">
                  <use href="icons.svg#linkedin"></use>
                </svg>
              </a>
              <a
                href="https://github.com/omar-moquete"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="text-white w-8 h-8">
                  <use href="icons.svg#twitter"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center ">
          <div>
            <img
              src="marlon-composition-website.png"
              alt="marlon-composition-website"
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
