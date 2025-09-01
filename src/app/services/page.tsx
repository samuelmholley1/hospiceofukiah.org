import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-bg to-white relative">
        {/* Background image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/pexel downloads/pexels-shvets-production-7176325.jpg"
            alt="Professional healthcare team"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Hospice of Ukiah provides two main programs of care to our community: 
            Hospice Care for those facing end-of-life, and Palliative Care for those 
            managing chronic serious illness. All services are provided by our 
            interdisciplinary team and are completely free of charge.
          </p>
        </div>
      </section>

      {/* Free Services Highlight */}
      <section className="py-8 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              All Services Provided Free of Charge
            </h2>
            <p className="text-lg text-gray-700">
              No Insurance Required • Community Funded • No Cost to Families
            </p>
          </div>
        </div>
      </section>

      {/* Hospice Care Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                Hospice Care
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our hospice program supports patients with terminal or life-limiting 
                  illnesses <strong>regardless of prognosis</strong>. Unlike traditional hospices, 
                  we do <strong>not</strong> require a doctor&apos;s estimate of 6 months left – 
                  we believe in providing comfort care as long as it&apos;s needed. Patients can 
                  even continue curative treatments like chemotherapy or dialysis while receiving 
                  hospice support.
                </p>
                
                <p>
                  Hospice care focuses on quality of life: managing pain and symptoms, 
                  providing emotional and spiritual support, and helping families care for their 
                  loved ones at home. Our team includes nurses, social workers, a chaplain, and 
                  trained volunteers who create a circle of care around the patient and family. 
                  We offer 24/7 on-call assistance for any urgent needs, and we coordinate with 
                  your physicians (the patient keeps their own primary doctor who oversees medical orders).
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pexel downloads/pexels-kampus-7551646.jpg"
                  alt="Compassionate hospice care team providing comfort"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Hospice Services */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Key Hospice Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Pain & Symptom Management</h4>
                <p className="text-gray-600">Professional nursing care to ensure comfort and dignity</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Emotional Support</h4>
                <p className="text-gray-600">Social workers and volunteers provide counseling</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Spiritual Support</h4>
                <p className="text-gray-600">Chaplain services for spiritual comfort</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6V5a2 2 0 114 0v1H8zm.707 6.293a1 1 0 00-1.414 1.414L8.586 15l-1.293 1.293a1 1 0 101.414 1.414L10 16.414l1.293 1.293a1 1 0 001.414-1.414L11.414 15l1.293-1.293a1 1 0 00-1.414-1.414L10 13.586l-1.293-1.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Respite Care</h4>
                <p className="text-gray-600">Trained volunteers to relieve caregivers</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">24/7 Phone Support</h4>
                <p className="text-gray-600">On-call assistance for crises or questions</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Bereavement Follow-up</h4>
                <p className="text-gray-600">Support for family after patient passes</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pexel downloads/pexels-ron-lach-8527647.jpg"
                  alt="Family caregivers receiving support and education"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Can family caregivers handle it?
                </h3>
                <p className="text-lg text-gray-700">
                  Most people prefer to remain at home if they can. We make that possible by 
                  educating and supporting family caregivers every step of the way. Our respite 
                  volunteers can visit to give caregivers breaks, and we help arrange supplies 
                  or equipment through community resources. With hospice, families are not alone – 
                  expert help is just a phone call away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Palliative Care Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pexel downloads/pexels-shkrabaanthony-7345467.jpg"
                  alt="Palliative care support for chronic illness"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                Palliative Care
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our Palliative Care program is for those with serious chronic illnesses who 
                  may not be on hospice. This could include advanced COPD, heart failure, 
                  dementia, cancer patients in treatment, etc. Palliative care is about 
                  improving quality of life by managing symptoms and stress <strong>at any stage</strong> of illness, not just the final stage.
                </p>
                
                <p>
                  Our team will consult with you (often with an RN or social worker visiting) 
                  to suggest comfort measures, coordinate resources like home health or medical 
                  equipment, and provide emotional/spiritual counseling as needed. You do <strong>not</strong> have to be dying to receive support.
                </p>
                
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Example Case</h3>
                  <p className="italic">
                    For example, we have provided palliative care to seniors with congestive heart failure 
                    who need help coordinating care and managing symptoms over many months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Impact Section */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-8">Making a Difference in Our Community</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-lg text-gray-700">Phone support available</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-lg text-gray-700">Free services, no insurance required</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-lg text-gray-700">Years serving Mendocino County</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Like our hospice program, palliative care through Hospice of Ukiah is free 
                  and does not require insurance. You can receive palliative support while still 
                  seeing your regular doctors and pursuing any therapies. We added this program to 
                  fill the gap for patients who need help but aren&apos;t ready or eligible for hospice.
                </p>
                
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">How to Access Palliative Care</h3>
                  <p>
                    Usually, a physician referral is helpful, but you can also call us directly to 
                    discuss if palliative care is right for you or your loved one.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pexel downloads/pexels-pavel-danilyuk-6753450.jpg"
                  alt="Community impact and healthcare professionals collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">
            Areas We Serve
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Hospice of Ukiah serves patients throughout inland Mendocino County, including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Ukiah Area</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Ukiah</li>
                <li>Redwood Valley</li>
                <li>Calpella</li>
                <li>Potter Valley</li>
                <li>Hopland</li>
              </ul>
            </div>
            
            <div className="bg-neutral-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Anderson Valley</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Boonville</li>
                <li>Philo</li>
                <li>Navarro</li>
                <li>Yorkville</li>
              </ul>
            </div>
            
            <div className="bg-neutral-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Northern Areas</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Willits</li>
                <li>Brooktrails</li>
                <li>Surrounding rural areas</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-600 italic">
            If you are in Mendocino County outside this area, call us and we can direct you to other resources as needed.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Unsure if You Qualify?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            If you&apos;re unsure whether you or a family member qualify for our services, 
            <strong>give us a call</strong> at (707) 462-4038. We&apos;re here to listen and help 
            figure out the next steps – even if that means referring you to other programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17074624038"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Call (707) 462-4038
            </a>
            <a
              href="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Contact Us Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
