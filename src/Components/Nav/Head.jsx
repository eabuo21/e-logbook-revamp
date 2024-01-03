// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Notice Board", to: "/projects" },
    { name: "KB", to: "/contact" },
    { name: "Home", to: "/resume" },
  ];

  return (
    <Disclosure as="nav" className="bg-secondary_black p-4    ">
      {({ open }) => (
        <>
          <div className="container mx-auto flex items-center justify-between  ">
            {/* Logo */}
            <div className="flex-shrink-0 text-white ">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <div className="my-logo p-2 bg-gradient-to-br from-red  to-violet-950 rounded-[50%] font-bold text-[32px] font-passion text-white">
                  EA
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className=" desktop-navigation      lg:flex lg:flex-row space-x-4 ">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-white hover:text-red font-passion text-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button (hidden on large screens) */}
            <div className="lg:hidden ">
              <Disclosure.Button
                className="text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-6 h-6 transform origin-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ transform: menuOpen ? "rotate(90deg)" : "none" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu (hidden on large screens) */}
          <Transition
            show={menuOpen}
            as={Fragment}
            enter="transition duration-300 ease-in-out transform"
            enterFrom="-translate-y-full"
            enterTo="translate-x-0"
            leave="transition duration-200 ease-in transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Disclosure.Panel className="lg:hidden bg-secondary_black fixed inset-0 z-50 w-auto flex flex-col justify-center items-center gap-4 text-2xl">
              <div className="flex flex-col space-y-4 p-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-white hover:text-gray-300 font-sans text-3xl "
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="close-button text-4xl text-red border-2 border-grey  p-1"
                >
                 Close
                </button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
