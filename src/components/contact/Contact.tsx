import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center p-5 mt-2 gap-16">
    <h2 className="text-4xl text-center uppercase text-black mt-6">Contact</h2>
      <ContactForm />
    </article>
  )
}

export default Contact
