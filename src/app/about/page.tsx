import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-bg to-white relative">
        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/pexel downloads/pexels-kampus-8949831.jpg"
            alt="Community healthcare support"
            fill
            className="object-cover"
          />
        </div>
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            Who We Are Today
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                    <span>Surrounding rural areas</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-bg rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">45+</div>
                  <div className="text-gray-700">Years of Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">~20</div>
                  <div className="text-gray-700">Current Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-gray-700">Community Funded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">0</div>
                  <div className="text-gray-700">Cost to Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">
            Our Team
          </h2>

          {/* Staff */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Professional Staff</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Staff Members */}
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
                  <span className="text-white font-bold text-xl">KS</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">Kim Shepard</h4>
                <p className="text-secondary font-semibold mb-2">Office Manager</p>
                <p className="text-sm text-gray-600">Administrative coordination</p>
              </div>
            </div>

            {/* Medical Advisors */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-primary mb-6 text-center">Volunteer Medical Advisors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">JR</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-1">Dr. Joann Rosenfeld</h4>
                  <p className="text-secondary font-semibold">Volunteer Medical Advisor</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">JJ</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-1">Dr. Jay Joseph</h4>
                  <p className="text-secondary font-semibold">Volunteer Medical Advisor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Board of Directors */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Board of Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">KS</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">Kimberly Smith</h4>
                <p className="text-secondary font-semibold">President (Board Chair)</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">BL</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">Brian Locatelli</h4>
                <p className="text-secondary font-semibold">Vice President</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">JJ</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">Dr. Jay Joseph</h4>
                <p className="text-secondary font-semibold">Treasurer</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">SB</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">Susan Bridge-Mount</h4>
                <p className="text-secondary font-semibold">Secretary</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">MD</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">Mark Davis</h4>
                <p className="text-secondary font-semibold">Board Member</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">KR</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">Kerry Randall</h4>
                <p className="text-secondary font-semibold">Board Member</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                *Our board and advisors ensure we stay true to our mission and sustain our services for the community.*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Care in Action */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
            Our Care in Action
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional Care */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/pexel downloads/pexels-kampus-7551683.jpg"
                  alt="Professional medical care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Professional Medical Care
                </h3>
                <p className="text-gray-700">
                  Our skilled medical team provides comprehensive care with dignity and expertise.
                </p>
              </div>
            </div>

            {/* Emotional Support */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/pexel downloads/pexels-shkrabaanthony-7345461.jpg"
                  alt="Emotional and spiritual support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Emotional & Spiritual Support
                </h3>
                <p className="text-gray-700">
                  We care for the whole person, addressing emotional and spiritual needs alongside physical care.
                </p>
              </div>
            </div>

            {/* Family Support */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/pexel downloads/pexels-tima-miroshnichenko-8376243.jpg"
                  alt="Family support and guidance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Family Support
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
            Have Questions?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We&apos;re here to help you understand our services and how we can support 
            you and your family during difficult times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="tel:+17074624038"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Call (707) 462-4038
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
