'use client'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-900">
          Speaking, Training & Consulting
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Science-backed neuroscience solutions for businesses, healthcare, and
          education.
        </p>
      </header>

      {/* Service Categories */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            How I Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 border rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Corporate Training</h3>
              <p className="mt-2 text-gray-600">
                Neuroscience-driven workshops for leadership, productivity, and
                workplace resilience.
              </p>
              <Link
                href="/corporate"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="p-6 border rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">
                Healthcare & Mental Health
              </h3>
              <p className="mt-2 text-gray-600">
                Training for clinicians, therapists, and healthcare
                professionals on cognitive resilience.
              </p>
              <Link
                href="/healthcare"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="p-6 border rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Education & Learning</h3>
              <p className="mt-2 text-gray-600">
                Neuroscience-backed strategies for schools, universities, and
                educators.
              </p>
              <Link
                href="/education"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Book a Session</h2>
        <p className="mt-4 text-lg text-gray-700">
          Get in touch to schedule a keynote, workshop, or consulting session.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Contact Me
          </Link>
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
