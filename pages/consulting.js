'use client'
import Link from 'next/link'

export default function Consulting() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-blue-900">Meet Dr. Ben Webb</h1>
        <p className="mt-4 text-lg text-gray-700">
          Neuroscientist | Speaker | Consultant
        </p>
      </header>

      {/* Consulting Section */}

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
