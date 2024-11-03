import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">EduFlow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Courses</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Instructors</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Pricing</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Courses</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Instructors</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Pricing</a>
            <button className="w-full text-left bg-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;