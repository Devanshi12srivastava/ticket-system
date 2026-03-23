import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 shadow-md sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-blue-900 -ml-40">SupportSys</h1>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/Dashboard"
              className="text-blue-900 font-semibold text-lg hover:text-blue-800">
            
              Dashboard
            </Link>
            <Link
              to="/create-ticket"
              className="text-blue-900 font-semibold text-lg hover:text-blue-800">
            
              Create Ticket
            </Link>
            <Link
              to="/ticket-list"
              className="text-blue-900 font-semibold text-lg hover:text-blue-800">
            
              Ticket List
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <Link
            to="/Dashboard"
            className="block py-2 text-gray-700 hover:text-blue-600">
          
            Dashboard
          </Link>
          <Link
            to="/create-ticket"
            className="block py-2 text-gray-700 hover:text-blue-600">
          
            Create Tickets
          </Link>
          <Link
            to="/Ticket-list"
            className="block py-2 text-gray-700 hover:text-blue-600">
          
            Ticket List
          </Link>
        </div>
      )}
    </nav>
  );
}
