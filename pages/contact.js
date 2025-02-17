import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Implement backend API for form submission
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contact | Dr. Ben Webb</title>
        <meta
          name="description"
          content="Get in touch with Dr. Ben Webb for neuroscience consulting and training inquiries."
        />
      </Head>

      <div className="max-w-3xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Have questions or want to book a consultation? Fill out the form
          below, and we’ll get back to you as soon as possible.
        </p>

        {submitted ? (
          <p className="mt-6 text-green-600 text-lg">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 bg-white p-6 shadow-md rounded-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
