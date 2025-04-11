// Footer.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Office Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Office</h3>
          <p>Germany —</p>
          <p>785 15h Street, Office 478</p>
          <p>Berlin, De 81566</p>
          <p className="mt-4">info@email.com</p>
          <p>+1 840 841 25 69</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Socials</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-300">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Dribbble
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-300">
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
          <p className="mb-4">Enter your email address</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="p-2 rounded text-black"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Subscribe
            </button>
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" required />I agree to the{" "}
              <a to="#" className="underline ml-1">
                Privacy Policy
              </a>
              .
            </label>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
