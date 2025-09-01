export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-neutral-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Plan Your Legacy of Compassion
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              Leave a lasting impact on end-of-life care in Mendocino County through planned giving
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#bequest-info"
                className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Learn About Bequests
              </a>
              <a
                href="#contact-advisor"
                className="btn-secondary text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Speak with Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Giving Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
              Ways to Leave Your Legacy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estate gifts account for 9-12% of nonprofit revenue and ensure compassionate care continues for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bequest Option */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Will Bequests</h3>
              <p className="text-gray-600 mb-6">
                Include Hospice of Ukiah in your will to ensure compassionate care continues after your lifetime.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• No impact on current finances</li>
                <li>• Revocable and adjustable</li>
                <li>• Specific dollar amount or percentage</li>
              </ul>
            </div>

            {/* Retirement Assets */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Retirement Assets</h3>
              <p className="text-gray-600 mb-6">
                Name Hospice of Ukiah as beneficiary of IRA, 401(k), or other retirement accounts.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Tax-efficient for your heirs</li>
                <li>• Simple beneficiary form</li>
                <li>• Full or partial designation</li>
              </ul>
            </div>

            {/* Life Insurance */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Designate Hospice of Ukiah as beneficiary of existing or new life insurance policies.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Large impact with small premiums</li>
                <li>• Immediate tax deduction if donated</li>
                <li>• Professional guidance available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Bequest Language */}
      <section id="bequest-info" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
              Sample Bequest Language
            </h2>
            <p className="text-lg text-gray-600">
              Share this language with your attorney or estate planning professional
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h3 className="text-xl font-serif font-bold text-primary mb-6">For Unrestricted Support:</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-primary">
              <p className="text-gray-700 font-mono text-sm leading-relaxed">
                &ldquo;I give, devise and bequeath to Hospice of Ukiah, Inc., a nonprofit organization located in Ukiah, California (Tax ID #68-0248383), [dollar amount/percentage/description of property] for its general charitable purposes.&rdquo;
              </p>
            </div>

            <h3 className="text-xl font-serif font-bold text-primary mb-6">For Specific Programs:</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-secondary">
              <p className="text-gray-700 font-mono text-sm leading-relaxed">
                &ldquo;I give, devise and bequeath to Hospice of Ukiah, Inc., a nonprofit organization located in Ukiah, California (Tax ID #68-0248383), [dollar amount/percentage/description of property] to support [specific program such as &lsquo;direct patient care services&rsquo; or &lsquo;grief support programs&rsquo;].&rdquo;
              </p>
            </div>

            <div className="text-center">
              <a
                href="#contact-advisor"
                className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Professional Guidance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-advisor" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
            Ready to Plan Your Legacy?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you create a lasting impact on hospice care in Mendocino County.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Contact Our Development Team</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>(707) 462-4038</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>hospice.ukiah@gmail.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Estate Planning Resources</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Free consultation available</li>
                  <li>• Attorney referral network</li>
                  <li>• Tax impact analysis</li>
                  <li>• Legacy recognition programs</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                All legacy gift discussions are confidential. There is no obligation to proceed with any planned gift.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
