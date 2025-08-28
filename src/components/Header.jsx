import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.jpg"; 


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-xl font-bold text-purple-600">ImaginaryWeb</h1>
            <p className="text-sm text-gray-600 -mt-1">
              Where Tomorrow's Fun Meets Modern Tech!
            </p>
          </div>
        </div>

        {/* Middle: Navigation (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/about" className="hover:text-purple-600">AboutUs</Link>
          <Link to="/blog" className="hover:text-purple-600">Blog</Link>
          <Link to="/services" className="hover:text-purple-600">Services</Link>
          <Link to="/use-cases" className="hover:text-purple-600">Use Cases</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        </nav>

        {/* Right: CTA Button (hidden on mobile) */}
        <div className="hidden md:block">
          <Link
            to="/get-started"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <Link to="/" className="block text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-purple-600">AboutUs</Link>
          <Link to="/blog" className="block text-gray-700 hover:text-purple-600">Blog</Link>
          <Link to="/services" className="block text-gray-700 hover:text-purple-600">Services</Link>
          <Link to="/use-cases" className="block text-gray-700 hover:text-purple-600">Use Cases</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-purple-600">Contact</Link>
          <Link
            to="/get-started"
            className="block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition text-center"
          >
            Get Started →
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
