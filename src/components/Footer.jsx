import { Link } from "react-router-dom";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand + Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <h2 className="text-xl font-bold text-white">Transerg</h2>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Leading provider of AI-powered technology solutions. 
            We help businesses leverage artificial intelligence to 
            drive innovation and growth.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaXTwitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">AI Solutions</a></li>
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">Mobile App Development</a></li>
            <li><a href="#" className="hover:text-white">QA and Testing</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Cancellation & Refund</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ImaginaryWeb.in All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
