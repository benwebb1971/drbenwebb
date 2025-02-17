import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold cursor-pointer">Dr Ben Webb</a>
        </Link>

        {/* Menu Items */}
        <div className="space-x-6">
          <Link href="/about">
            <a className="hover:text-gray-300">About</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-gray-300">Services</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-300">Contact</a>
          </Link>
          <Link href="/resources">
            <a className="hover:text-gray-300">Resources</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
