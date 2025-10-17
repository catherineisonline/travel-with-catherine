import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import OK from "../../assets/images/ok.png";
import { errorObjI, formValueI } from "../../types/interfaces";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const userId = import.meta.env.VITE_USER_ID;
const serverUrl = import.meta.env.VITE_SERVER_URL;
const captchaSecret = import.meta.env.VITE_CAPTCHA_S;
const captchaKey = import.meta.env.VITE_CAPTCHA_K;

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState<formValueI>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState<errorObjI>({});
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setLoading(true);
    let token = captchaRef.current?.getValue();
    let formVal = form.current;
    formVal?.current?.reset();
    captchaRef.current?.reset();
    if (Object.keys(validateForm(formValue)).length > 0) {
      setLoading(false);
      return null;
    } else {
      await verifyToken(token!);
      emailjs.sendForm(serviceId, templateId, formVal!, userId).then(
        (result) => {
          if (result.text === "OK") {
            setSubmit(true);
            setFormValue({
              firstname: "",
              lastname: "",
              email: "",
              message: "",
            });
          }
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  const validateForm = (value: formValueI) => {
    let errors: errorObjI = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.firstname) {
      errors.firstname = "Please enter your name";
    } else if (value.firstname.length < 3) {
      errors.firstname = "Please enter a valid name";
    } else if (Number(value.firstname)) {
      errors.firstname = "Please enter a valid name";
    }
    if (!value.lastname) {
      errors.lastname = "Please enter your lastname";
    } else if (value.lastname.length < 4) {
      errors.lastname = "Please enter a valid lastname";
    } else if (Number(value.lastname)) {
      errors.lastname = "Please enter a valid lastname";
    }
    if (!value.email) {
      errors.email = "Please enter your email";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Please enter valid email";
    }
    if (!value.message) {
      errors.message = "Please write a message";
    } else if (value.message.length < 5) {
      errors.message = "Please enter at least 5 characters";
    }

    return errors;
  };
  const handleValidation = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, [e.currentTarget.id]: e.currentTarget.value });
  };

  const verifyToken = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        body: JSON.stringify({
          secret: captchaSecret,
          token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.response === "Successful") {
        return true;
      } else return false;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error while verifying reCAPTCHA:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
      return false;
    }
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
      ) : submit && Object.keys(formError).length === 0 ? (
        <article className="flex flex-col items-center gap-2 mt-20 w-90 max-w-lg">
          <img max-w-full="true" src={OK} alt="" aria-hidden="true" />
          <h2 className="text-black text-2xl uppercase tracking-wide">Thank you!</h2>
          <p className="text-black tracking-wide">Your message has been sent successfully</p>
          <p className="block mb-2 text-black text-center tracking-wide">
            In order for me to answer you back via email, please make sure to provide your real email. You can also
            contact me on socials which you can find in the side menu.
          </p>
          <button
            onClick={() => setSubmit(false)}
            className="bg-black hover:bg-blue-400 shadow px-4 py-2 rounded focus:shadow-outline focus:outline-none font-bold text-white smooth-transition">
            Send again
          </button>
        </article>
      ) : (
        <form ref={form} id="recaptcha" className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="mb-6 md:mb-0 px-3 w-full md:w-1/2">
              <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="firstname">
                First Name
              </label>
              <input
                className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full text-gray-700 leading-tight appearance-none"
                type="text"
                id="firstname"
                onChange={handleValidation}
                value={formValue.firstname}
                name="firstname"
              />
              <span className="text-red-600 input-validation-error">{formError.firstname}</span>
            </div>
            <div className="mb-6 md:mb-0 px-3 w-full md:w-1/2">
              <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full text-gray-700 leading-tight appearance-none"
                id="lastname"
                type="text"
                onChange={handleValidation}
                value={formValue.lastname}
                name="lastname"
              />
              <span className="text-red-600 input-validation-error">{formError.lastname}</span>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="px-3 w-full">
              <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="email">
                E-mail
              </label>
              <input
                className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full text-gray-700 leading-tight appearance-none"
                id="email"
                type="email"
                onChange={handleValidation}
                value={formValue.email}
                name="email"
              />
              <span className="text-red-600 input-validation-error">{formError.email}</span>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="px-3 w-full">
              <label className="block mb-2 text-gray-700 text-xs uppercase tracking-wide" htmlFor="message">
                Message
              </label>
              <textarea
                className="block bg-gray-200 focus:bg-white mb-3 px-4 py-3 border border-gray-200 focus:border-gray-500 rounded focus:outline-none w-full h-48 text-gray-700 leading-tight appearance-none no-resize resize-none"
                id="message"
                onChange={handleValidation}
                value={formValue.message}
                name="message"
              />
              <span className="text-red-600 input-validation-error">{formError.message}</span>
            </div>
          </div>

          <ReCAPTCHA className="flex flex-wrap mb-6 g-recaptcha" sitekey={captchaKey} ref={captchaRef} />

          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="bg-blue-600 hover:bg-blue-400 shadow px-4 py-2 rounded focus:shadow-outline focus:outline-none font-bold text-white smooth-transition cursor-pointer"
                type="submit">
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};

export default ContactForm;
