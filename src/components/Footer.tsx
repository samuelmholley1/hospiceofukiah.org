import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Hospice of Ukiah
            </h3>
            <p className="text-green-100 leading-relaxed">
              Community-Supported Hospice Care in Mendocino County
            </p>
            <div className="space-y-2 text-sm text-green-100">
              <p>Tax ID # 68-0248383</p>
              <p>© 2025 Hospice of Ukiah, Inc.</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-green-100">
              <div className="flex items-start space-x-3">
                <svg 
                  className="w-5 h-5 mt-0.5 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <div>
                  <p>620 S Dora St, Suite 101</p>
                  <p>Ukiah, CA 95482</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg 
                  className="w-5 h-5 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" 
                  />
                </svg>
                <a 
                  href="tel:+17074624038" 
                  className="hover:text-white transition-colors duration-200"
                >
                  (707) 462-4038
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg 
                  className="w-5 h-5 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" 
                  />
                  <path 
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" 
                  />
                </svg>
                <a 
                  href="mailto:hospice.ukiah@gmail.com" 
                  className="hover:text-white transition-colors duration-200"
                >
                  hospice.ukiah@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Additional Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/hospiceofukiah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" 
                  />
                </svg>
              </a>
            </div>
            
            {/* Quick Links */}
            <div className="pt-4">
              <div className="space-y-2">
                <Link 
                  href="/volunteer" 
                  className="block text-green-100 hover:text-white transition-colors duration-200"
                >
                  Volunteer Opportunities
                </Link>
                <Link 
                  href="/donate" 
                  className="block text-green-100 hover:text-white transition-colors duration-200"
                >
                  Make a Donation
                </Link>
                <Link 
                  href="/grief-support" 
                  className="block text-green-100 hover:text-white transition-colors duration-200"
                >
                  Grief Support Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-green-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-green-100">
              Providing compassionate hospice care to our community since our founding.
            </p>
            <p className="text-sm text-green-100">
              Website by{' '}
              <a 
                href="https://github.com/samuelholley1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Samuel Holley
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
