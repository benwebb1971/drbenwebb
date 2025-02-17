'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-900">
          Unlock the Power of Neuroscience for Performance & Wellbeing
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Expert consulting, training, and resources to help you apply
          neuroscience to business, healthcare, and education.
        </p>
        <div className="mt-6">
          <Link
            href="/speaking-training"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Explore Training & Speaking
          </Link>

          <Link
            href="/about"
            className="ml-4 px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100"
          >
            Learn More About Ben
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Meet Dr. Ben Webb
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Neuroscientist, Speaker, and Consultant with 20+ years of experience
            in cognitive resilience, leadership, and brain health.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-16 bg-white px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            How I Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 border rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Corporate Training</h3>
              <p className="mt-2 text-gray-600">
                Neuroscience-driven training for workplace performance and
                leadership.
              </p>
              <Link
                href="/corporate"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="p-6 border rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Consulting</h3>
              <p className="mt-2 text-gray-600">
                Bespoke neuroscience-backed solutions for organizations and
                leaders.
              </p>
              <Link
                href="/consulting"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="p-6 border rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Resources</h3>
              <p className="mt-2 text-gray-600">
                Explore my YouTube, blog, and online courses on brain health.
              </p>
              <Link
                href="/resources"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-100 text-center">
        <p>
          &copy; {new Date().getFullYear()} Dr. Ben Webb. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <Link
            href="https://www.linkedin.com/in/dr-ben-webb-65856443/"
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
