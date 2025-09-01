import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-bg to-white relative">
        {/* Background image */}
        <div className="absolute inset-0 opacity-75">
          <Image
            src="/pexel downloads/pexels-kampus-8949831.jpg"
            alt="Community healthcare support"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            About Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For over 45 years, Hospice of Ukiah has been providing compassionate, 
            community-supported hospice care to families throughout Mendocino County.
          </p>
        </div>
      </section>

      {/* Cicely Saunders Quote */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-8 md:p-12">
            <svg className="w-12 h-12 text-primary mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <blockquote className="text-xl md:text-2xl italic text-gray-800 text-center mb-6 leading-relaxed">
              &ldquo;You matter... to the last moment of your life, and we will do all we can, 
              not only to help you die peacefully, but also to live until you die.&rdquo;
            </blockquote>
            <cite className="text-lg text-primary font-semibold text-center block">
              — Dr. Cicely Saunders, founder of modern hospice
            </cite>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Our History
          </h2>
          
          {/* Timeline */}
          <div className="space-y-12">
            {/* 1980 - Founding */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">1980</span>
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">The Beginning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hospice of Ukiah began when a group of community members, guided by Dr. William Lamers 
                  of Hospice of Marin, came together to bring hospice care to Mendocino County. 
                  Our founders envisioned a service that would truly serve everyone in need.
                </p>
              </div>
            </div>

            {/* 1990s - Volunteer Hospice */}
            <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">1990s</span>
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Choosing Community Over Bureaucracy</h3>
                <p className="text-gray-700 leading-relaxed">
                  About 30 years ago, we made the deliberate choice not to become a Medicare-funded hospice. 
                  This decision allows us to care for patients who still seek treatment or who live longer than 
                  six months, refusing to turn anyone away based on arbitrary timelines or funding limitations.
                </p>
              </div>
            </div>

            {/* 2000s - Expanded Services */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">2000s</span>
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Expanding Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  We expanded our services to include Palliative Care for those with serious chronic illnesses, 
                  not just the terminally ill. This allowed us to provide comfort and support to even more 
                  community members facing health challenges.
                </p>
              </div>
            </div>

            {/* Today */}
            <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Today</span>
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Continuing the Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  For over 45 years, Hospice of Ukiah has helped hundreds of patients live their final chapters 
                  in comfort and dignity, surrounded by family and friends. Supported solely by donations and 
                  our Thrift & Gift Store (currently closed, pending board evaluation), we remain a true community hospice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Today */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            Who We Are Today
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hospice of Ukiah is a 501(c)(3) nonprofit, community-supported hospice that provides 
                completely free services to anyone in need. We are one of the few remaining independent, 
                volunteer-based hospices in California.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, our all-volunteer board and a small dedicated staff continue Dr. Werra&apos;s mission 
                of compassionate care. We currently serve approximately 20 patients at any given time, 
                providing round-the-clock support to families throughout our service area.
              </p>
              <div className="bg-neutral-bg rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Our Service Area</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Ukiah</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Anderson Valley</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Willits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>All of inland Mendocino County</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pexel downloads/pexels-kampus-7551633.jpg"
                  alt="Our dedicated team providing compassionate care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Community Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-bg rounded-lg p-6 text-center">
              <div className="relative aspect-square rounded-full overflow-hidden mx-auto mb-4 w-20 h-20">
                <Image
                  src="/pexel downloads/pexels-hanafi-mellek-886604527-32166712.jpg"
                  alt="Community volunteers"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">45+ Years</h3>
              <p className="text-gray-700">Serving our community with compassion</p>
            </div>
            
            <div className="bg-neutral-bg rounded-lg p-6 text-center">
              <div className="relative aspect-square rounded-full overflow-hidden mx-auto mb-4 w-20 h-20">
                <Image
                  src="/pexel downloads/pexels-tima-miroshnichenko-8376243.jpg"
                  alt="Professional healthcare"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">100% Free</h3>
              <p className="text-gray-700">All services provided at no cost</p>
            </div>
            
            <div className="bg-neutral-bg rounded-lg p-6 text-center">
              <div className="relative aspect-square rounded-full overflow-hidden mx-auto mb-4 w-20 h-20">
                <Image
                  src="/pexel downloads/pexels-olly-3768131.jpg"
                  alt="Healthcare collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">24/7 Support</h3>
              <p className="text-gray-700">Always available when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            Our Team
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pexel downloads/pexels-jsme-mila-523821574-18271866.jpg"
                  alt="Our interdisciplinary healthcare team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our interdisciplinary team includes registered nurses, social workers, 
                a chaplain, and trained volunteers who work together to provide comprehensive 
                care for patients and families.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">Medical Team</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Registered Nurses</li>
                    <li>• Medical Director</li>
                    <li>• Social Workers</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">Support Team</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Chaplain</li>
                    <li>• Trained Volunteers</li>
                    <li>• Board Members</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Staff */}
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Professional Staff</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">DH</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-1">Diane Hunt, LVN</h4>
              <p className="text-secondary font-semibold mb-2">Clinical Supervisor</p>
              <p className="text-sm text-gray-600">Oversees patient care coordination</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">JN</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-1">Judy Nelson, RN</h4>
              <p className="text-secondary font-semibold mb-2">Nurse Coordinator</p>
              <p className="text-sm text-gray-600">Anderson Valley</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-1">Shelley Stickels, LVN</h4>
              <p className="text-secondary font-semibold mb-2">Nurse Coordinator</p>
              <p className="text-sm text-gray-600">Ukiah area</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-1">Cristina Simpson, MSW</h4>
              <p className="text-secondary font-semibold mb-2">Social Worker</p>
              <p className="text-sm text-gray-600">Ukiah area</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-1">Susan Bridge-Mount, LMFT</h4>
              <p className="text-secondary font-semibold mb-2">Social Worker</p>
              <p className="text-sm text-gray-600">Anderson Valley</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-1">Shari Albertz</h4>
              <p className="text-secondary font-semibold mb-2">Chaplain</p>
              <p className="text-sm text-gray-600">Spiritual care coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Compassionate Care */}
            <div className="bg-neutral-bg rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/pexel downloads/pexels-shvets-production-8900025.jpg"
                  alt="Compassionate care and comfort"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Compassionate Care
                </h3>
                <p className="text-gray-700">
                  We treat every patient and family with dignity, respect, and unconditional compassion.
                </p>
              </div>
            </div>

            {/* Holistic Approach */}
            <div className="bg-neutral-bg rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/pexel downloads/pexels-shkrabaanthony-7345456.jpg"
                  alt="Holistic healthcare approach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Holistic Approach
                </h3>
                <p className="text-gray-700">
                  We care for the whole person, addressing emotional and spiritual needs alongside physical care.
                </p>
              </div>
            </div>

            {/* Community Support */}
            <div className="bg-neutral-bg rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/pexel downloads/pexels-hannah-barata-776560167-27865295.jpg"
                  alt="Community support and collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Community Support
                </h3>
                <p className="text-gray-700">
                  We support the entire family through difficult times, providing guidance and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Whether through volunteering, donations, or simply spreading awareness, 
            you can help us continue serving our community for the next 45 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Become a Volunteer
            </a>
            <a
              href="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
