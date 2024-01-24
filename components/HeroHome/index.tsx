// import Link from "next/link"
export default function HeroHome(props) {
  const { text, image } = props
  return (
    <section className="w-screen max-w-full h-auto   md:h-[82vh] flex justify-center">
      <div className="container px-6 flex gap-6 flex-col-reverse lg:flex-row justify-center lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left">
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="max-w-[350px] lg:max-w-[600px]">
            <img
              src={image?.node?.sourceUrl}
              alt={image?.node?.slug}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
