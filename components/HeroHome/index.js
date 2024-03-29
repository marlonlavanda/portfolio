import Link from "next/link"
export default function HeroHome() {
  return (
    <section className="w-screen max-w-full h-auto   md:h-[82vh] flex justify-center">
      <div className="container px-6 flex gap-6 flex-col-reverse lg:flex-row justify-center lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left">
            <p className="dark:text-mlr-accent text-xl font-medium">
              Hi there!
            </p>
            <div className="text-4xl lg:text-6xl font-gravitas pt-4 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mlr-accent  to-mlr-primary dark:to-mlr-secondary">
                {"I'm"} Marlon
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black">
              Front End Engineer
            </h2>
            <div className="pt-4 ">
              <p className="text-center lg:text-left max-w-full md:max-w-[500px] mx-auto xl:mx-0">
                {"I'm"} a front-end developer with a passion for building
                awesome things for the web using core technologies such as
                HTML5, CSS3, and JavaScript.
              </p>
            </div>
            <div className="flex gap-4 justify-center mt-4 lg:hidden">
              <button className="py-2 px-4 bg-mlr-accent rounded-md">
                <Link href="/projects">Projects</Link>
              </button>
              <button className="py-2 px-4 bg-mlr-accent rounded-md">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-4 lg:pt-8">
              <a
                href="https://github.com/marlonlavanda"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-8 h-8">
                  <use href="icons.svg#github"></use>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/marlon-lavanda/"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-8 h-8">
                  <use href="icons.svg#linkedin"></use>
                </svg>
              </a>
              <img
                src="https://github.com/danielcranney/profileme-dev/blob/main/public/icons/socials/linkedin.svg"
                alt=""
              />
              <a
                href="https://twitter.com/LavandaMarlon"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-8 h-8">
                  <use href="icons.svg#twitter"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="max-w-[350px] lg:max-w-[600px]">
            <img
              src="marlon-composition-website.png"
              alt="marlon-composition-website"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
