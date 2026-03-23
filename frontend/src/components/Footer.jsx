import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300 mt-12 -mb-6 md:mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">SupportSys</h2>
            <p className="text-sm">
              Manage your support tickets efficiently with our modern dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/Dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/create-ticket" className="hover:text-white">
                  Create Ticket
                </Link>
              </li>
              <li>
                <Link to="/ticket-list" className="hover:text-white">
                  Ticket List
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <p className="text-sm">support@example.com</p>
            <p className="text-sm">+91 XXXXXXXXXX</p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="text-center text-sm">
          © {new Date().getFullYear()} SupportSys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
