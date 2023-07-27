import { useState } from 'react'

export interface formValueI {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export interface errorObjI {
  firstname?: string;
  lastname?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formValue, setFormValue] = useState<formValueI>({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  })
  const [formError, setFormError] = useState<errorObjI>({})
  const [submit, setSubmit] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formValue),
    });
    console.log(response)
    // let result = await response.json();
    alert(response.status);

  }
  const handleValidation = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
    setFormValue({ ...formValue, [e.currentTarget.id]: e.currentTarget.value });
  }

  const validateForm = (value: formValueI) => {
    let errors: errorObjI = {}
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!value.firstname) {
      errors.firstname = 'Please enter your firstname'
    }
    if (!value.lastname) {
      errors.lastname = 'Please enter your lastname'
    }

    if (!value.email) {
      errors.email = 'Please enter your email'
    } else if (!emailRegex.test(value.email)) {
      errors.email = 'Please enter valid email'
    }
    if (!value.message) {
      errors.message = 'Please write a message'
    }

    return errors
  }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="firstname"
            onChange={handleValidation}
            value={formValue.firstname}
          />
          <span className="input-validation-error">{formError.firstname}</span>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lastname"
            type="text"
            onChange={handleValidation}
            value={formValue.lastname}
          />
          <span className="input-validation-error">{formError.lastname}</span>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            onChange={handleValidation}
            value={formValue.email}
          />
          <span className="input-validation-error">{formError.email}</span>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            onChange={handleValidation}
            value={formValue.message}
          />
          <span className="input-validation-error">{formError.message}</span>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-blue-600 hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  )
}

export default ContactForm
