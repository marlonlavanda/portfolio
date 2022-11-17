import ContactForm from "../../components/forms/Contact"
export default function Contact() {
  return (
    <section className="w-screen max-w-full py-12 md:py-16 xl:py-20 flex justify-center items-center">
      <div className="container px-6 md:px-12 xl:px-20 2xl:px-0 flex flex-col items-center">
        <h1 className="font-bold text-2xl xl:text-4xl  text-center mb-4 md:mb-8">
          {"Let's "}work toguether
        </h1>
        <ContactForm />
      </div>
    </section>
  )
}
