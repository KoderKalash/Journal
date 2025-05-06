import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlignRight, X, ChevronDown } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  // if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <nav className="flex justify-between items-center px-5 py-4 bg-[var(--primary-color)] text-[var(--secondary-color)] sticky top-0 w-full shadow-sm z-50">
      {/* Left Section */}
      <div className="flex items-center gap-5">
        <Link to="/" className="flex items-center gap-2">
          <img src="/" alt="logo" className="w-6 h-6" />
          <h1 className="text-xl font-bold">Journal</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          {["about", "templates", "blog", "pricing"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="hover:bg-[var(--shadow-color)] font-semibold p-1.5 rounded-md flex items-center gap-1 capitalize"
            >
              {item}
              {(item !== "pricing") && <ChevronDown className="w-3 h-3" />}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section - Auth */}
      <div className="hidden md:flex items-center gap-3">
        {isAuthenticated && (
          <div className="flex items-center gap-2 pr-2">
            <img
              src={user.picture}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover border border-gray-300"
            />
            <div className="text-sm">
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        )}

        <div className="w-px h-6 bg-[var(--shadow-color)]" />

        {isAuthenticated ? (
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition duration-200"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition duration-200"
          >
            Log In
          </button>
        )}



        {/* <Link to="/signup">
          <button className="bg-[var(--secondary-color)] text-[var(--primary-color)] text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:opacity-90 transition duration-200">
            Sign Up
          </button>
        </Link> */}
      </div>

      {/* Hamburger Menu Icon */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <AlignRight className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-60 bg-[var(--primary-color)] flex flex-col gap-3 p-4 rounded-md shadow-lg z-50 md:hidden">
          {["about", "templates", "blog", "pricing"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="hover:bg-[var(--shadow-color)] font-semibold p-2 rounded-md capitalize"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="border-t pt-3 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                  />
                  <div className="text-sm">
                    <h2 className="font-semibold">{user.name}</h2>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout({ logoutParams: { returnTo: window.location.origin } });
                    setOpen(false);
                  }}
                  className="text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    loginWithRedirect();
                    setOpen(false);
                  }}
                  className="text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition"
                >
                  Log In
                </button>
                {/* <Link to="/signup">
                  <button
                    className="bg-[var(--secondary-color)] text-[var(--primary-color)] text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:opacity-90 transition"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </button>
                </Link> */}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
