import { Link } from 'react-router-dom';

export const Footer = () => {
  const handleNavClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between gap-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-orange-500">Orange</span>
            <span className="text-white">Cab</span>
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            Delivering safe, reliable, and premium cab services across Guwahati and the Northeast. 
            From city rides to curated outstation tours, we make every journey comfortable and hassle-free.
          </p>
          <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-12 md:gap-16">
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => handleNavClick('/about-us')} className="hover:text-orange-500 text-left">Our Story</button></li>
              <li><button onClick={() => handleNavClick('/#services')} className="hover:text-orange-500 text-left">Services</button></li>
              <li><button onClick={() => handleNavClick('/#features')} className="hover:text-orange-500 text-left">Fleet</button></li>
              <li><button onClick={() => handleNavClick('/#tours')} className="hover:text-orange-500 text-left">Tours</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bookings</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => handleNavClick('/#services')} className="hover:text-orange-500 text-left">City Cab Booking</button></li>
              <li><button onClick={() => handleNavClick('/#outstation')} className="hover:text-orange-500 text-left">Outstation Cab Booking</button></li>
              <li><button onClick={() => handleNavClick('/#tours')} className="hover:text-orange-500 text-left">Tour Packages</button></li>
              <li><button onClick={() => handleNavClick('/#contact')} className="hover:text-orange-500 text-left">Finance FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => handleNavClick('/#contact')} className="hover:text-orange-500 text-left">Contact Us</button></li>
              <li><Link to="/terms-and-conditions" className="hover:text-orange-500">Terms & Conditions</Link></li>
              <li><a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2025 Orange Cab. All rights reserved.
      </div>
    </footer>
  );
};