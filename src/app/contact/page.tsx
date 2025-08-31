'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, we'll just show a success message
    // In production, this would send data to a server or email service
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-6">
            We&apos;ve received your message and appreciate you reaching out to us.
          </p>
          <p className="text-gray-600 mb-8">
            We aim to respond to messages within 1-2 business days. Thank you for contacting Hospice of Ukiah.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-bg to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We&apos;re here to answer your questions or provide assistance. Please reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <svg className="w-8 h-8 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Administrative Office
                </h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div className="text-gray-700">
                      <p>620 S. Dora St, Suite 101</p>
                      <p>Ukiah, CA 95482</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <div className="text-gray-700">
                      <p className="font-semibold">Office Hours:</p>
                      <p>Monday – Thursday</p>
                      <p>9:30 a.m. – 4:00 p.m.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Phone:</p>
                      <a 
                        href="tel:+17074624038" 
                        className="text-primary hover:text-primary/80 font-medium text-xl"
                      >
                        (707) 462-4038
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Fax:</p>
                      <p className="text-gray-700">(707) 222-6136</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Email:</p>
                      <a 
                        href="mailto:hospice.ukiah@gmail.com" 
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        hospice.ukiah@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Section */}
              <div className="bg-neutral-bg rounded-xl p-6">
                <h4 className="text-xl font-bold text-primary mb-4">Find Us</h4>
                <div className="text-center">
                  <a
                    href="https://maps.google.com?q=620+S.+Dora+St,+Suite+101,+Ukiah,+CA+95482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Referrals */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Service Referrals</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you are a physician or healthcare provider referring a patient, please call our office 
            or fax a referral form to the number above. We will respond promptly.
          </p>
        </div>
      </section>

      {/* Response Time & Emergency Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-l-4 border-green-400 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Response Time</h3>
              <p className="text-green-700">
                We aim to respond to messages within <strong>1-2 business days</strong>. If you have 
                an urgent need outside office hours, please call and our on-call staff will assist you.
              </p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-red-800 mb-3">24/7 Emergency Support</h3>
              <p className="text-red-700 mb-3">
                <strong>24/7 Hospice Nurse On-Call:</strong>
              </p>
              <a 
                href="tel:+17074624038" 
                className="text-red-800 hover:text-red-600 font-bold text-xl"
              >
                (707) 462-4038
              </a>
              <p className="text-red-700 text-sm mt-2">
                After hours, your call will be answered by our answering service who can page the on-call nurse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-xl leading-relaxed text-white/90">
            Whether you have a question about our services, need grief support, or want to explore 
            volunteering or donating, we&apos;d love to hear from you. Our compassionate team is here 
            to help in any way we can.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17074624038"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Call Now: (707) 462-4038
            </a>
            <a
              href="mailto:hospice.ukiah@gmail.com"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
