export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-bg to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            Hospice of Ukiah
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Community-Supported Hospice Care in Mendocino County
          </p>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            Providing compassionate, professional hospice care with dignity and respect. 
            Our team supports patients and families during life's most challenging moments 
            with medical care, emotional support, and spiritual guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="btn-secondary hover:no-underline inline-block text-center"
            >
              Our Services
            </a>
            <a
              href="/donate"
              className="btn-primary hover:no-underline inline-block text-center"
            >
              Support Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Professional medical care focused on comfort, dignity, and quality of life.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Family Support</h3>
              <p className="text-gray-600">
                Emotional and spiritual support for patients and their loved ones throughout the journey.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Community Focused</h3>
              <p className="text-gray-600">
                Locally supported and committed to serving our Mendocino County community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-neutral-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            Need Support or Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our compassionate team is here to help 24/7. Contact us to learn more about our services 
            or to discuss how we can support you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17074624038"
              className="btn-secondary hover:no-underline inline-block text-center"
            >
              Call (707) 462-4038
            </a>
            <a
              href="/contact"
              className="btn-primary hover:no-underline inline-block text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
