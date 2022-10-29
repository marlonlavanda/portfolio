export default function HeroHome() {
  return (
    <section className="w-screen max-w-full bg-mlr-primary  h-screen flex justify-center py-12">
      <div className="container flex">
        <div className="w-1/2">
          <p className="text-mlr-accent text-xl font-medium">Hi there!</p>
          <div className="text-6xl font-gravitas pt-4 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-mlr-accent  to-mlr-secondary">
              {"I'm"} Marlon
            </span>
          </div>
          {/* <h1 className="text-6xl font-gravitas pt-4 mb-4 text-mlr-thirdly">
            Marlon Lavanda
          </h1> */}
          <h2 className="text-white text-4xl font-black">Front End Engineer</h2>
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
