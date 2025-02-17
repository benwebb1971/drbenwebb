'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-900">Meet Dr. Ben Webb</h1>
        <p className="mt-4 text-lg text-gray-700">
          Neuroscientist | Speaker | Consultant
        </p>
      </header>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/ben-profile.jpg" //
            alt="Dr. Ben Webb"
            width={200}
            height={200}
            className="mx-auto rounded-full shadow-md"
            priority //
          />
          <p className="mt-6 text-lg text-gray-700">
            Dr. Ben Webb is a leading neuroscientist specializing in cognitive
            performance, mental resilience, and decision-making. With over 20
            years of research experience and a passion for making neuroscience
            accessible, he helps professionals, businesses, and organizations
            apply cutting-edge brain science to improve performance and
            wellbeing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Work with Ben</h2>
        <p className="mt-4 text-lg text-gray-700">
          Discover how neuroscience can transform your business, healthcare
          practice, or educational institution.
        </p>
        <div className="mt-6">
          <Link
            href="/speaking-training"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Book a Talk
          </Link>
          <Link
            href="/consulting"
            className="ml-4 px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100"
          >
            Consulting Services
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
