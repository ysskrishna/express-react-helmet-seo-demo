import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold text-indigo-600">
                Express React SEO Starter
              </Link>
              <div className="hidden sm:flex space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 transition">
                  Home
                </Link>
                <Link to="/recipes" className="px-3 py-2 rounded-md text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 transition">
                  Recipes
                </Link>
                <Link to="/about" className="px-3 py-2 rounded-md text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 transition">
                  About
                </Link>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className="block px-3 py-2 rounded-md text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }