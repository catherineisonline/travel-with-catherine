import React, { SyntheticEvent, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import OK from "../../assets/images/ok.png";
import { errorObjI, formValueI } from "../../types/interfaces";
import { validateForm } from "../../helpers/validateForm";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const userId = import.meta.env.VITE_USER_ID;
const serverUrl = import.meta.env.VITE_SERVER_URL;
const captchaKey = import.meta.env.VITE_CAPTCHA_K;

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState<formValueI>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState<errorObjI>({});
  const [submit, setSubmit] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleEmail = async (formVal: HTMLFormElement | null): Promise<boolean> => {
    try {
      const response = await emailjs.sendForm(serviceId, templateId, formVal!, userId);
      if (response.text !== "OK") {
        throw new Error(response.text);
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      form.current?.reset();
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, [e.currentTarget.id]: e.currentTarget.value });
  };

  const verifyCaptcha = async (): Promise<boolean> => {
    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }
      return true;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error in Captcha:", error);
      }
      return false;
    }
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const errors = await validateForm(formValue);
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      setLoading(false);
      return;
    }
    setFormError({});

    if (!token) return setLoading(false);
    const isVerified = await verifyCaptcha();
    if (!isVerified) return setLoading(false);
    let formVal = form?.current;
    setLoading(true);
    const isEmailSent = await handleEmail(formVal);
    if (!isEmailSent) return setLoading(false);

    setSubmit(true);
    setFormValue({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className="flex flex-col items-center align-middle">
          <img
            className="w-50 h-50"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY29xOWJiZ2FhMXgxeGR4Nmh2MG1lNjFmMzN5NTB0ZWJmOG41dnEwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/FAgpqNvSeUQSmrOewI/giphy.gif"
            alt=""
            aria-hidden="true"
          />
        </div>
      ) : submit ? (
        <article className="flex flex-col items-center gap-2 mt-20 w-90 max-w-lg">
          <img max-w-full="true" src={OK} alt="" aria-hidden="true" />
          <h2 className="text-black text-2xl uppercase tracking-wide">Thank you!</h2>
          <p className="text-black tracking-wide">Your message has been sent successfully</p>
          <p className="block mb-2 text-black text-center tracking-wide">
            In order for me to answer you back via email, please make sure to provide your real email. You can also
            contact me on socials which you can find in the side menu.
          </p>
          <button
            type="button"
            onClick={() => setSubmit(false)}
            className="bg-black hover:bg-blue-400 shadow px-4 py-2 rounded focus:shadow-outline focus:outline-none font-bold text-white smooth-transition">
            Send again
          </button>
        </article>
      ) : (
        <form onSubmit={handleSubmit} ref={form} id="recaptcha" className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6 px-3 w-full">
            <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="firstname">
              First Name
            </label>
            <input
              className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full text-gray-700 leading-tight appearance-none"
              type="text"
              id="firstname"
              onChange={handleChange}
              value={formValue.firstname}
              name="firstname"
              placeholder="Your name"
            />
            {formError.firstname && <span className="text-red-600 input-validation-error">{formError.firstname}</span>}
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 px-3 w-full">
            <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full text-gray-700 leading-tight appearance-none"
              id="lastname"
              type="text"
              onChange={handleChange}
              value={formValue.lastname}
              name="lastname"
              placeholder="Your last name"
            />
            {formError.lastname && <span className="text-red-600 input-validation-error">{formError.lastname}</span>}
          </div>

          <div className="flex flex-wrap -mx-3 mb-6 px-3 w-full">
            <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="email">
              E-mail
            </label>
            <input
              className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full text-gray-700 leading-tight appearance-none"
              id="email"
              type="email"
              onChange={handleChange}
              value={formValue.email}
              name="email"
              placeholder="Email address"
            />
            {formError.email && <span className="text-red-600 input-validation-error">{formError.email}</span>}
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 px-3 w-full">
            <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="message">
              Message
            </label>
            <textarea
              className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full h-48 text-gray-700 leading-tight appearance-none no-resize resize-none"
              id="message"
              onChange={handleChange}
              value={formValue.message}
              name="message"
              placeholder="A message with at least 5 characters"
            />
            {formError.message && <span className="text-red-600 input-validation-error">{formError.message}</span>}
          </div>

          <ReCAPTCHA
            onChange={(token) => setToken(token)}
            className="flex flex-wrap mb-6 g-recaptcha"
            sitekey={captchaKey}
          />

          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="bg-blue-600 hover:bg-blue-400 shadow px-4 py-2 rounded focus:shadow-outline focus:outline-none font-bold text-white smooth-transition cursor-pointer"
                type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};

export default ContactForm;
