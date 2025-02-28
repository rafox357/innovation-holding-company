import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link href="/">
          <a className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-0">My Website</a>
        </Link>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:space-x-4">
            <li className="w-full sm:w-auto text-center mb-2 sm:mb-0">
              <Link href="/about">
                <a className="text-white hover:text-gray-300 block sm:inline-block py-1">About</a>
              </Link>
            </li>
            <li className="w-full sm:w-auto text-center">
              <Link href="/contact">
                <a className="text-white hover:text-gray-300 block sm:inline-block py-1">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

