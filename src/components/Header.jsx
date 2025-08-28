import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" /> {/* Replace with your logo */}
          <div>
            <h1 className="text-xl font-bold text-purple-600">Transerg</h1>
            <p className="text-sm text-gray-600 -mt-1">
              Where Tomorrow's Fun Meets Modern Tech!
            </p>
          </div>
        </div>

        {/* Middle: Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/about" className="hover:text-purple-600">AboutUs</Link>
          <Link to="/blog" className="hover:text-purple-600">Blog</Link>
          <Link to="/services" className="hover:text-purple-600">Services</Link>
          <Link to="/use-cases" className="hover:text-purple-600">Use Cases</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        </nav>

        {/* Right: CTA Button */}
        <div>
          <Link
            to="/get-started"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
