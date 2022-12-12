import { useForm, ValidationError } from "@formspree/react"

export default function Contact() {
  const [state, handleSubmit] = useForm("mqkjrozy")
  const formStyles = {
    label: "text-white mb-2",
    input:
      "focus:outline-none  focus:ring-2 focus:ring-mlr-accent rounded-md px-2 py-2 dark:bg-white dark:text-mlr-primary",
    submit:
      "rounded-full px-10 py-2 sm:py2 bg-itd-aqua font-newake text-white text-[25px] sm:text-[18px] md:text-[20px]",
    textarea:
      "focus:outline-none  focus:ring-2 focus:ring-itd-aqua rounded-xl px-3 py-2 dark:bg-white dark:text-mlr-primary",
  }
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div className="bg-mlr-primary dark:bg-white/10 py-16 px-6 w-full max-w-[700px] rounded-xl shadow-md dark:shadow-none">
      <h3 className="text-2xl font-bold text-center text-white mb-6">
        Contact Form
      </h3>
      <form className="px-6" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-6">
          <label htmlFor="name" className={formStyles.label}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={formStyles.input}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="lastName" className={formStyles.label}>
            Last Name
          </label>
          <input
            id="lastName"
            className={formStyles.input}
            type="text"
            name="lastName"
          />
          <ValidationError
            prefix="Last ame"
            field="lastName"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="email" className={formStyles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={formStyles.input}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="email" className={formStyles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="5"
            className={formStyles.textarea}
            style={{ resize: "none" }}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className=" bg-mlr-accent py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
