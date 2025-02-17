import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">Dr Ben Webb</span>
        </Link>

        {/* Menu Items */}
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
