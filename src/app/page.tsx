import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.svg"
            alt="Hospice nurse with patient"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <Image 
              src="/hospice-ukiah-icon.png" 
              alt="Hospice of Ukiah" 
              width={80} 
              height={80}
              className="rounded-xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg">
            Hospice of Ukiah
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-shadow-md">
            Compassionate End-of-Life Care, Free of Charge
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-shadow-sm">
            Providing comfort, dignity, and support to our community&apos;s families since 1980.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
            <a
              href="#about"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement/About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 max-w-4xl mx-auto leading-relaxed">
              &ldquo;The Mission of Hospice of Ukiah is to provide end-of-life and comfort care, 
              free of charge, to everyone in our community who needs it.&rdquo;
            </p>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                We are a volunteer-supported, community hospice serving inland Mendocino County. 
                Our team helps patients live and die with comfort and dignity among their loved ones, 
                without cost or barriers.
              </p>
              <p>
                Since 1980, we have been committed to ensuring that no one in our community 
                faces the end of life alone or without proper care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features Section */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Why Choose Hospice of Ukiah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path d="M12 12h.01v.01H12V12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">100% Free Services</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                All hospice and palliative services are provided free of charge, so families 
                can focus on care, not costs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">Care Beyond Limits</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                No 6-month terminal requirement. Continue treatments like chemo or dialysis 
                while receiving our support.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">Community Funded</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We rely solely on community donations, grants, and volunteers – no Medicare 
                or insurance needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do You Qualify Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            Do You Qualify for Our Hospice Program?
          </h2>
          <div className="bg-neutral-bg rounded-xl p-8 shadow-lg">
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">24/7 Caregiver available?</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Primary physician willing to refer?</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Living in our service area (Ukiah, Anderson Valley, Willits, etc.)?</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Able to participate in care decisions (you or via proxy)?</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-accent">
              <p className="text-lg font-semibold text-primary mb-2">
                If YES to these, you likely qualify for our program!
              </p>
              <p className="text-gray-700 mb-4">
                Contact us to discuss enrollment and learn how we can support you and your family.
              </p>
              <a
                href="/contact"
                className="btn-primary hover:no-underline inline-block"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact/Testimonial Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/10 to-primary/10 relative">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">
            Making a Difference in Our Community
          </h2>
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <svg className="w-12 h-12 text-secondary mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <blockquote className="text-xl md:text-2xl italic text-gray-800 mb-6 leading-relaxed">
              &ldquo;We couldn&apos;t have cared for Dad at home without Hospice of Ukiah. 
              Their nurses and volunteers were a blessing during the most difficult time of our lives.&rdquo;
            </blockquote>
            <cite className="text-lg text-primary font-semibold">
              — Local Family
            </cite>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your support ensures no one in our community faces the end of life alone. 
            Whether through donations or volunteering, you can help us continue our mission 
            of providing compassionate care to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
