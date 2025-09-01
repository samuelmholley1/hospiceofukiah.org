import Image from 'next/image';

export default function GriefSupport() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-bg to-white relative">
        {/* Background image */}
        <div className="absolute inset-0 opacity-75">
          <Image
            src="/pexel downloads/pexels-diva-plavalaguna-6150657.jpg"
            alt="Peaceful support and healing"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Grief & Spiritual Support
          </h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-secondary mb-6">
              Support for Grieving Hearts – You are not alone
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hospice of Ukiah offers bereavement and spiritual support to anyone in the community 
              coping with the loss of a loved one or the emotional/spiritual challenges of serious illness.
            </p>
          </div>
        </div>
      </section>

      {/* Grief Support Groups Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Grief Support Groups
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Our free grief support groups are open to <strong>anyone</strong> experiencing a loss – 
                you do not need to have had a family member in our hospice to attend. All are 
                welcome, whether your loss was recent or years ago, and whether it was a family 
                member, friend, or any beloved person.
              </p>
              
              <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">What to Expect</h3>
                <p>
                  These groups provide a safe, confidential space to share and learn coping skills. 
                  They are facilitated by caring professionals or trained volunteers.
                </p>
              </div>
              
              <p>
                We typically offer a weekly support group in Ukiah (for example, every Thursday at 6pm) 
                and in Anderson Valley (monthly). <em>(Note: Please call for current schedule as times may vary.)</em>
              </p>
              
              <p>
                There is no cost to attend and no commitment required – come as often as you 
                need. Many people find comfort in knowing their feelings are normal and in 
                hearing how others navigate life after loss.
              </p>
              
              <div className="bg-accent/10 rounded-lg p-6 my-8">
                <blockquote className="text-xl italic text-gray-800 text-center">
                  &ldquo;You are safe to express whatever you feel – grief has no timetable or judgment here.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-bg rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-4">Group Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Open to anyone experiencing loss</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Completely free of charge</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">No commitment required</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Safe, confidential environment</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-secondary/20">
                  <h4 className="font-semibold text-primary mb-2">Current Schedule</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Ukiah:</strong> Thursdays at 6:00 PM</p>
                    <p><strong>Anderson Valley:</strong> Monthly</p>
                    <p className="italic">Call for current dates and locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Counseling Section */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Individual Counseling & Spiritual Support
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                For those who prefer one-on-one support, or whose schedule doesn&apos;t allow 
                group attendance, Hospice of Ukiah provides individual grief counseling. We are 
                fortunate to have a <strong>Chaplain on staff</strong> who is trained in 
                non-denominational spiritual care and grief support.
              </p>
              
              <p>
                Our Chaplain (or a trained counselor) can meet with you privately to talk 
                through your grief journey, offer coping strategies, or simply provide a 
                listening ear and spiritual encouragement. This service is available to anyone 
                in the community at no charge.
              </p>
              
              <p>
                We understand that grief is not just sadness – it can involve anger, guilt, 
                confusion, even relief. Talking with someone outside your immediate circle can 
                be very healing.
              </p>
              
              <p>
                To arrange a one-on-one session with our Chaplain or bereavement counselor, 
                please call our office. Even a single conversation can make a difference.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Chaplain Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">One-on-One Counseling</h4>
                    <p className="text-gray-600">Private grief support sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Spiritual Care</h4>
                    <p className="text-gray-600">Non-denominational spiritual support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Crisis Support</h4>
                    <p className="text-gray-600">Available for urgent spiritual needs</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-neutral-bg rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong>No faith affiliation is required</strong> to receive spiritual support – 
                  our Chaplain respects all beliefs and backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continued Support & Resources */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Continued Support & Resources
          </h2>
          
          <div className="space-y-8">
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                We follow families of our hospice patients for at least a year after the 
                loss, offering check-in calls, grief literature, and support. But our resources 
                extend to the wider community:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-bg rounded-lg p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Additional Resources</h3>
                <p className="text-gray-700 text-center">
                  We can refer you to additional grief resources including books, online support, 
                  and specialized groups for widows and other specific losses.
                </p>
              </div>
              
              <div className="bg-neutral-bg rounded-lg p-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Remembrance Events</h3>
                <p className="text-gray-700 text-center">
                  We periodically hold remembrance events, such as a candlelight memorial around 
                  the holidays, where anyone can honor their loved ones.
                </p>
              </div>
              
              <div className="bg-neutral-bg rounded-lg p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Illness Support</h3>
                <p className="text-gray-700 text-center">
                  If you need spiritual support during a loved one&apos;s illness (even if they 
                  are not on our service), our Chaplain may be available to visit and provide comfort.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-8 mt-12">
              <p className="text-xl text-gray-800 text-center">
                The journey of grief can be long and changing; our message is that <strong>you do 
                not have to walk it alone</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            <strong>To inquire about current grief support group times or to speak with our Chaplain, 
            call (707) 462-4038 or email us.</strong> We&apos;ll get back to you with the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17074624038"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Call (707) 462-4038
            </a>
            <a
              href="mailto:hospice.ukiah@gmail.com"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Email Us
            </a>
          </div>
          <p className="text-sm text-green-200 mt-6 max-w-2xl mx-auto">
            Remember: No faith affiliation is required to receive spiritual support – 
            our Chaplain respects all beliefs and backgrounds.
          </p>
        </div>
      </section>
    </div>
  );
}
