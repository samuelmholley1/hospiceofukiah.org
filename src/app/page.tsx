import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - WCAG-Compliant & Conversion Optimized */}
      <section className="relative min-h-[80vh] lg:min-h-[80vh] flex items-center">
        {/* Background Image - Right-aligned focal point */}
        <Image
          src="/redwood_clapsed_hands.png"
          alt="Clasped hands among redwood trees, symbolizing compassionate hospice support in nature."
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top"
        />
        
        {/* WCAG-Compliant Overlay - Further brightened for better image visibility */}
        <div className="absolute inset-0 bg-black/35 lg:bg-black/30"></div>
        
        {/* Safe Text Area - LEFT 55% ALLOWED */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="w-[55%] px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 pl-12 sm:pl-16 lg:pl-20 xl:pl-24 2xl:pl-28">
            
            {/* Content Layout - Text Only */}
            <div className="flex flex-col items-start gap-6">
              
              {/* Text and Buttons Column */}
              <div className="w-full text-left">
                {/* MASSIVE Headline for 15" Mac */}
                <h1 className="text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-serif font-bold text-white mb-6 leading-tight" 
                    style={{
                      color: '#ffffff',
                      textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                      lineHeight: '0.95'
                    }}>
                  Dignity. Comfort.<br />Peace of Mind.
                </h1>
                
                {/* MASSIVE Sub-headline */}
                <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif font-light text-white mb-10 max-w-prose" 
                   style={{
                     color: '#ffffff',
                     textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                     lineHeight: '1.2'
                   }}>
                  Hospice of Ukiah provides compassionate, free end-of-life care for every neighbor in central Mendocino County. <span className="font-medium">Your legacy can keep that promise alive.</span>
                </p>
                
                {/* Small Buttons Relative to Massive Text */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href="/donate"
                    className="hero-button-override font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 text-center relative group w-fit"
                    aria-label="Donate now—keeps care free"
                    title="100% of gifts stay local"
                  >
                    Donate Now
                    {/* Microcopy tooltip */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      100% of gifts stay local
                    </span>
                  </a>
                  <a
                    href="/legacy"
                    className="hero-button-secondary-override font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-secondary/50 text-center w-fit"
                    aria-label="Plan your legacy gift to ensure lasting impact"
                  >
                    Plan Your Legacy
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT 45% COMPLETELY EMPTY - RESERVED FOR IMAGE */}
          <div className="w-[45%] h-full"></div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Logo - Blended with background */}
            <div className="flex-shrink-0">
              <Image
                src="/hospice-ukiah-icon.png"
                alt="Hospice of Ukiah Logo"
                width={180}
                height={180}
                className="drop-shadow-sm rounded-2xl"
                style={{
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                  mixBlendMode: 'multiply',
                  opacity: 0.85,
                  borderRadius: '16px'
                }}
                priority
              />
            </div>
            
            {/* Text Content - Centered with logo */}
            <div className="flex-1 text-center lg:text-left lg:pt-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                Hospice of Ukiah
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light">
                Serving Central Mendocino County with compassionate, professional end-of-life care since our founding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto mb-8">
            <span className="font-medium">The Mission of Hospice of Ukiah is to provide end of life and comfort care, free of charge, to everyone in our community who needs it.</span>
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Hospice of Ukiah is based on the belief that people with terminal or long time debilitating illness can live and die comfortably among family and friends in familiar surroundings. We provide support and professional care for the physical, emotional, and spiritual needs of clients and their families.
          </p>
        </div>
      </section>

      {/* Do You Qualify Section */}
      <section className="py-24 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Do You Qualify for Our Hospice Program?
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg text-gray-700">Do you have one or more caregiver(s) providing you with 24-hour care?</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg text-gray-700">Do you have a primary physician responsible for your care who will make a referral?</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg text-gray-700">Do you live in the geographical area we serve?*</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg text-gray-700">Are you (or a designated person) able to participate in the decision making process?</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <p className="text-xl font-semibold text-primary mb-2">
                If you can answer YES to these questions, then you qualify for services with our program.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                *Areas Served: Anderson Valley, Calpella, Hopland, Potter Valley, Redwood Valley, Talmage, Ukiah and Willits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Hospice of Ukiah */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Why Choose Hospice of Ukiah?
          </h2>
          
          {/* Key Benefits List */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>There is no requirement for a prognosis of death.</strong></p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>You may continue to receive life extending treatment</strong> (such as Chemo, Dialysis, etc.)</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>We do not require or accept Medicare, Medi-Cal, or private insurance.</strong></p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>You can go to the Hospital or Emergency Room</strong> as circumstances require.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>Signing a DNR or POLST is recommended but not required.</strong></p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>24 hour on-call help via phone.</strong></p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>You will receive professional, compassionate care.</strong></p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700"><strong>All Hospice of Ukiah services are completely free.**</strong></p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-gray-600 italic">
                  ** Funding for Hospice of Ukiah services comes solely from Donations, Bequests and Planned Giving, Fundraising, and Grants.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* 100% Free Services */}
            <div className="bg-neutral-bg rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
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
            <div className="bg-neutral-bg rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
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
            <div className="bg-neutral-bg rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
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
                We&apos;re supported by people who believe, like you, that compassionate 
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
                &ldquo;Hospice of Ukiah gave us the gift of time—time to say goodbye properly, 
                time to share stories, time to love without the burden of medical bills. 
                Their care allowed us to focus on what truly mattered.&rdquo;
              </blockquote>
              <p className="text-lg font-semibold text-primary">— Sarah M., Grateful Family Member</p>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-8 border-l-4 border-secondary">
              <blockquote className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                &ldquo;The compassion and professionalism of the entire team made an impossible 
                time bearable. They treated my father—and our whole family—with such dignity 
                and grace.&rdquo;
              </blockquote>
              <p className="text-lg font-semibold text-primary">— Michael R., Community Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Administrative Office */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Administrative Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700">620 S Dora St, Suite 101</p>
                    <p className="text-gray-700">Ukiah, CA 95482</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:7074624038" className="text-primary hover:text-primary/80 font-semibold">(707) 462-4038</a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:hospice.ukiah@gmail.com" className="text-primary hover:text-primary/80 font-semibold">hospice.ukiah@gmail.com</a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-semibold">Hours:</p>
                    <p className="text-gray-700">Monday – Thursday: 9:30 a.m. – 4:00 p.m.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">FAX: (707) 222-6136</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Tax ID# 68-0248383</p>
                </div>
              </div>
            </div>

            {/* Service Areas & Additional Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="text-gray-700">• Anderson Valley</div>
                <div className="text-gray-700">• Calpella</div>
                <div className="text-gray-700">• Hopland</div>
                <div className="text-gray-700">• Potter Valley</div>
                <div className="text-gray-700">• Redwood Valley</div>
                <div className="text-gray-700">• Talmage</div>
                <div className="text-gray-700">• Ukiah</div>
                <div className="text-gray-700">• Willits</div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">24/7 Support Available</h4>
                  <p className="text-gray-700">Call our main number for on-call assistance anytime, day or night.</p>
                </div>
                
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Thrift & Gift Store</h4>
                  <p className="text-gray-700">Temporarily Closed</p>
                  <p className="text-sm text-gray-600 mt-1">Please check back for reopening updates</p>
                </div>
              </div>
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
            without financial worry. Your generosity makes miracles possible when they&apos;re needed most.
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
