import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.svg"
            alt="Compassionate hospice care"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image 
              src="/hospice-ukiah-icon.png" 
              alt="Hospice of Ukiah" 
              width={100} 
              height={100}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-8 text-shadow-lg">
            Hospice of Ukiah
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light mb-8 text-shadow-md opacity-95">
            Compassionate End-of-Life Care, Free of Charge
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a
              href="/donate"
              className="btn-primary text-xl px-10 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </a>
            <a
              href="/about"
              className="btn-secondary text-xl px-10 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Our Sacred Mission
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
            We believe every person deserves to face life's final journey with dignity, comfort, 
            and love—regardless of their ability to pay. Through compassionate medical care, 
            emotional support, and community partnership, we honor each life while supporting 
            families through their most challenging moments.
          </p>
        </div>
      </section>

      {/* Why Choose Hospice of Ukiah */}
      <section className="py-24 px-4 bg-neutral-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Why Choose Hospice of Ukiah
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* 100% Free Services */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                100% Free Services
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every family receives complete hospice care at no cost—medical equipment, 
                nursing visits, medications, and 24/7 support. Your financial situation 
                never determines your care.
              </p>
            </div>

            {/* Care Beyond Limits */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                Care Beyond Limits
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team provides not just medical care, but emotional, spiritual, and 
                practical support. We care for the whole family, not just the patient, 
                extending our support through bereavement.
              </p>
            </div>

            {/* Community Funded */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                Community Funded
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every donation stays local, directly funding care for your neighbors. 
                We're supported by people who believe, like you, that compassionate 
                end-of-life care is a community responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Voices from Our Community
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary/5 rounded-2xl p-8 border-l-4 border-primary">
              <blockquote className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                "Hospice of Ukiah gave us the gift of time—time to say goodbye properly, 
                time to share stories, time to love without the burden of medical bills. 
                Their care allowed us to focus on what truly mattered."
              </blockquote>
              <p className="text-lg font-semibold text-primary">— Sarah M., Grateful Family Member</p>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-8 border-l-4 border-secondary">
              <blockquote className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                "The compassion and professionalism of the entire team made an impossible 
                time bearable. They treated my father—and our whole family—with such dignity 
                and grace."
              </blockquote>
              <p className="text-lg font-semibold text-primary">— Michael R., Community Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Call-to-Action Strip */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Your Gift Transforms Lives
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto opacity-95">
            Every donation ensures another family receives compassionate, dignified end-of-life care 
            without financial worry. Your generosity makes miracles possible when they're needed most.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/donate"
              className="bg-white text-primary font-bold text-xl px-12 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Make a Donation
            </a>
            <a
              href="/volunteer"
              className="bg-secondary text-white font-bold text-xl px-12 py-4 rounded-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Volunteer with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
