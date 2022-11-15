export default function Contact() {
  return (
    <div className="bg-mlr-primary dark:bg-white/10 py-10 px-6 w-full max-w-[700px] rounded-xl shadow-md dark:shadow-none">
      <h3 className="text-center text-white">Contact Form</h3>
      <form action="" className="px-6">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input type="text" name="name" className="bg-white" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="lastName" className="text-white">
            Last Name
          </label>
          <input type="text" name="lastName" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input type="email" name="email" />
        </div>
      </form>
    </div>
  )
}
