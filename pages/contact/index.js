import ContactForm from "../../components/forms/Contact"
export default function Contact() {
  return (
    <section className="w-screen max-w-full h-[80vh] flex justify-center items-center">
      <div className="container flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-4 text-center">
          {"Let's "}work toguether
        </h1>
        <ContactForm />
      </div>
    </section>
  )
}
