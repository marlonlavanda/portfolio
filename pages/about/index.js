export default function About() {
  return (
    <section className="w-screen max-w-full h-full lg:h-[90vh] xl:h-screen py-12 lg:py-0 md:py-16 xl:py-20 flex justify-center items-center">
      <div className="container px-6 md:px-12 xl:px-20 2xl:px-0 flex flex-col items-center">
        <div>
          <img src="https://fakeimg.pl/1536x644/1A3257/f0e7ec/" alt="" />
        </div>
        <div className="mt-8 xl:max-w-6xl">
          <div className="mb-4">
            <h3 className="font-bold text-2xl">Who Am I?</h3>
            <p className="text-lg">
              Born in Ecuador, raised in Spain, currently living in The UK. I
              work as a Front End Engineer at Jet Design and Marketing, a design
              agency that make things happen and my main mission is to build
              user experiences with code.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-2xl">Especialidades</h3>
            <p className="text-lg">
              Soy un apasionado por las tecnologías Web, enseño programación con
              JavaScript y Solidity. Web3 Builder & Ethereum Blockchain
              Developer. JavaScript, Vue, React, NextJS, NuxtJS, TypeScript,
              Node, GitHub.
            </p>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl">Career</h3>
            <p className="text-lg">
              Desarrollador FrontEnd con más de 20 años de experiencia, creando
              mi primera página web en el 2001, Actualmente Learning Engineer en
              Platzi.com, Soy uno de los líderes de la comunidad de “Meta
              Developers Circles” en Bogotá, Colombia, Nombrado Microsoft Most
              Valuable Professional en el 2021 y mejor conocido como @gndx en
              redes sociales. He impartido más de 300 conferencias y Workshops a
              lo largo de Latinoamérica, en las principales comunidades,
              ciudades y países.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
