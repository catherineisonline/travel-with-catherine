import { useEffect } from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Blog | Travel with Catherine";
  });
  return (
    <article className="flex flex-col items-center gap-16 col-span-5 md:col-span-4 mb-10 p-2 min-h-screen">
      <h2 className="mt-6 text-black text-4xl text-center uppercase">Contact</h2>
      <ContactForm />
    </article>
  );
};

export default ContactPage;
