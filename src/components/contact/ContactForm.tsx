// import { useState } from 'react'

const ContactForm = () => {
  // const [formValue, setFormValue] = useState({
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   message: '',
  // })
  // const [formError, setFormError] = useState({})
  // const [submit, setSubmit] = useState(false)

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault()
  //   setFormError(validateForm(formValue))
  // }
  // const handleValidation = async (e: React.SyntheticEvent) => {
  //   // const { name, value } = e.target
  //   const target = e.target as typeof e.target & {
  //     email: { value: string }
  //     password: { value: string }
  //   }
  //   setFormValue({ ...formValue, [name]: value })
  // }

  // const validateForm = (value: Object) => {
  //   let errors = {}
  //   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  //   if (!value.firstname) {
  //     errors.firstname = 'Please enter your firstname'
  //   }
  //   if (!value.lastname) {
  //     errors.lastname = 'Please enter your lastname'
  //   }

  //   if (!value.email) {
  //     errors.email = 'Please enter your email'
  //   } else if (!emailRegex.test(value.email)) {
  //     errors.email = 'Please enter valid email'
  //   }
  //   if (!value.message) {
  //     errors.message = 'Please write a message'
  //   }

  //   return errors
  // }

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
          ></input>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
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
