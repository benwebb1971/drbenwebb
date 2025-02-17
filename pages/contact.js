'use client'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-900">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-700">
          Interested in a keynote, training, or consulting? Let’s talk.
        </p>
      </header>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Send a Message
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-100 text-center">
        <p>
          &copy; {new Date().getFullYear()} Dr. Ben Webb. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <Link
            href="https://www.linkedin.com/in/drbenwebb"
            className="hover:text-blue-400"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.youtube.com/@drbenwebb"
            className="hover:text-red-400"
          >
            YouTube
          </Link>
        </div>
      </footer>
    </div>
  )
}
