'use client';

import { useState } from 'react';

export default function Donate() {
  const [activeTab, setActiveTab] = useState('online');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Donate
          </h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-secondary mb-8">
              Your Support Brings Comfort and Dignity to Our Neighbors
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hospice of Ukiah&apos;s services are completely <strong>free of charge</strong> to patients 
              and families, which is only possible thanks to generous community support. Thank you for 
              considering a donation. Every gift, no matter the size, makes a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Why Donate?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>When you donate to Hospice of Ukiah, you ensure that:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  A patient can receive expert nursing care and pain relief in their own home, 
                  without worrying about costs.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  A family has a supportive team to call 24/7 during one of the toughest times 
                  of their lives.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  Grieving community members have counseling and support groups at no charge 
                  to help them heal.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Our small staff and volunteers get the supplies and training they need to 
                  care for others.
                </li>
              </ul>
              
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
                <p className="text-gray-800">
                  We receive no insurance reimbursements or government funding – <strong>every dollar 
                  comes from people like you</strong> who believe in our mission. We operate on a lean 
                  budget, so your contribution directly funds care for those in need.
                </p>
              </div>
            </div>
            
            <div className="bg-accent/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Your Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">$500</div>
                  <p className="text-gray-700">
                    Could cover the cost of a month&apos;s worth of nursing visits and medical 
                    supplies for one patient
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">$240</div>
                  <p className="text-gray-700">
                    A $20/month donation provides a full hospice kit for a patient each year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Ways to Give
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-sm">
            {[
              { id: 'online', label: 'Online Donation' },
              { id: 'check', label: 'By Check' },
              { id: 'other', label: 'Other Ways' },
              { id: 'planned', label: 'Planned Giving' },
              { id: 'memorial', label: 'Memorial Gifts' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 m-1 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl p-8 shadow-lg min-h-[400px]">
            {activeTab === 'online' && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Online Donation (One-Time or Monthly)</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Use our secure form to make an online donation by credit card or bank transfer. 
                      You can make a one-time gift or set up a monthly donation.
                    </p>
                    <p>
                      Monthly giving helps us plan ahead and provides steady support – a $20/month 
                      donation adds up to providing a full hospice kit for a patient each year!
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded-r-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Secure Processing</h4>
                      <p className="text-green-700 text-sm">
                        Your online donation is processed securely via <strong>Donorbox</strong> and 
                        <strong> Stripe</strong> – we do not store your payment information. You&apos;ll 
                        receive an email confirmation immediately after donating.
                      </p>
                    </div>
                  </div>
                  
                  {/* Donation Form */}
                  <div className="bg-neutral-bg rounded-lg p-6">
                    <h4 className="text-xl font-bold text-primary mb-4 text-center">Make a Donation</h4>
                    
                    {/* Demo Donation Form - In production, replace with actual Donorbox embed */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Donation Type
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input type="radio" name="type" value="one-time" defaultChecked className="mr-2" />
                            One-time
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="type" value="monthly" className="mr-2" />
                            Monthly
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Amount
                        </label>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          {['$25', '$50', '$100'].map((amount) => (
                            <button
                              key={amount}
                              className="py-2 px-4 border border-gray-300 rounded-md hover:bg-primary hover:text-white hover:border-primary transition-colors"
                            >
                              {amount}
                            </button>
                          ))}
                        </div>
                        <input
                          type="number"
                          placeholder="Other amount"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div className="text-center">
                        <a
                          href="https://donorbox.org/hospice-of-ukiah"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent/90 transition-colors inline-block"
                        >
                          Donate via Donorbox
                        </a>
                        <p className="text-xs text-gray-500 mt-2">
                          Opens secure donation form in new window
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'check' && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Donate by Check</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      If you prefer to donate by mail, you can send a check payable to 
                      <strong> Hospice of Ukiah</strong> to our office address.
                    </p>
                    <p>
                      Please include your return address so we can send you a thank-you letter 
                      and receipt for your tax-deductible donation.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">Mailing Address</h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-semibold">Hospice of Ukiah</p>
                      <p>620 S. Dora St. Suite 101</p>
                      <p>Ukiah, CA 95482</p>
                    </div>
                    
                    <div className="mt-6 p-4 bg-white rounded border">
                      <h5 className="font-semibold text-gray-800 mb-2">Make Check Payable To:</h5>
                      <p className="text-lg font-mono bg-gray-50 p-2 rounded">Hospice of Ukiah</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'other' && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Other Ways to Give</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-secondary/5 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-secondary mb-3">Stock Gifts & IRA Rollovers</h4>
                      <p className="text-gray-700">
                        We gratefully accept gifts of stock, IRA charitable rollovers, and 
                        donor-advised fund grants. Please contact us for transfer instructions.
                      </p>
                    </div>
                    
                    <div className="bg-accent/5 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-accent mb-3">Employer Matching</h4>
                      <p className="text-gray-700">
                        If your employer offers matching gifts, our Tax ID is <strong>68-0248383</strong> 
                        (Mendocino County Hospice of Ukiah, Inc.). Let us know and we will coordinate 
                        any necessary paperwork.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">Need Help?</h4>
                    <p className="text-gray-700 mb-4">
                      Our team is happy to help coordinate any type of donation. Contact us for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Stock transfer instructions</li>
                      <li>Employer matching forms</li>
                      <li>Donor-advised fund grants</li>
                      <li>Questions about tax benefits</li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="tel:+17074624038"
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block"
                      >
                        Call (707) 462-4038
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'planned' && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Planned Giving (Legacy Gifts)</h3>
                <div className="space-y-8">
                  <div className="text-lg text-gray-700 leading-relaxed">
                    <p className="mb-6">
                      Consider leaving a legacy of compassion by including Hospice of Ukiah in your 
                      estate plans. <strong>Bequests</strong> (gifts in your will or trust), or naming 
                      us as a beneficiary of a life insurance policy or retirement account, will help 
                      ensure that free hospice care remains available for future generations.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-accent/10 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-accent mb-3">Types of Legacy Gifts</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-accent mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Bequests in your will or trust
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-accent mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Life insurance beneficiary
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-accent mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Retirement account beneficiary
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 rounded-r-lg p-4">
                        <h5 className="font-semibold text-green-800 mb-2">Tax Advantages</h5>
                        <p className="text-green-700 text-sm">
                          There can be significant tax advantages to these gifts. Consult your 
                          financial advisor for details specific to your situation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-primary mb-4">Let Us Know</h4>
                      <p className="text-gray-700 mb-4">
                        If you&apos;ve included Hospice of Ukiah in your plans, please let us know so 
                        we can thank you and ensure your wishes are understood.
                      </p>
                      <p className="text-gray-700 mb-6">
                        Contact us for sample bequest language or to discuss your legacy gift intentions.
                      </p>
                      
                      <div className="bg-white rounded border p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Sample Bequest Language:</h5>
                        <p className="text-sm font-mono bg-gray-50 p-3 rounded">
                          &ldquo;I give to Mendocino County Hospice of Ukiah, Inc., Tax ID 68-0248383, 
                          the sum of $_____ (or ___% of my estate) to be used for its general purposes.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'memorial' && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Memorial or Honor Gifts</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      You can dedicate your donation in memory or honor of someone special. These 
                      meaningful gifts are a beautiful way to celebrate a life or honor someone 
                      who is important to you.
                    </p>
                    
                    <p>
                      If you provide contact information, we can send a letter to notify their 
                      next-of-kin of your thoughtful gift (amounts are not mentioned in these 
                      notifications).
                    </p>
                    
                    <p>
                      Many families request memorial gifts to hospice in lieu of flowers at funeral 
                      services. We are deeply honored by these tributes and the trust families place 
                      in our mission.
                    </p>
                  </div>
                  
                  <div className="bg-neutral-bg rounded-lg p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">How Memorial Gifts Work</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Make Your Donation</h5>
                          <p className="text-sm text-gray-600">
                            Specify that it&apos;s in memory or honor of someone
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Provide Contact Info</h5>
                          <p className="text-sm text-gray-600">
                            Give us the family&apos;s address (optional)
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">We Send Notification</h5>
                          <p className="text-sm text-gray-600">
                            Family receives a thoughtful letter about your gift
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recognition and Tax Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Recognition and Tax Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Tax-Deductible Status</h3>
                <p className="text-green-700">
                  Hospice of Ukiah is a registered <strong>501(c)(3) nonprofit</strong> organization 
                  (Tax ID: 68-0248383). Your donations are tax-deductible as allowed by law.
                </p>
                <p className="text-green-700 mt-3">
                  All donors receive a written acknowledgment for their records immediately after 
                  donating.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Donor Recognition</h3>
                <p className="text-blue-700">
                  We publish an annual report recognizing our donors by giving levels, unless you 
                  prefer to remain anonymous.
                </p>
                <p className="text-blue-700 mt-3">
                  We do not publicly list donation amounts or any personal information without 
                  your explicit permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-neutral-bg">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-gray-800 mb-6">
            &ldquo;We chose to donate part of our estate to Hospice of Ukiah because we saw 
            first-hand how important their work is. We want to ensure they can continue this 
            care for others.&rdquo;
          </blockquote>
          <p className="text-lg text-gray-600">— The Smith Family, Hospice of Ukiah Supporters</p>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            Thank You
          </h2>
          <p className="text-xl leading-relaxed text-green-100">
            <strong>Thank you</strong> for your support. You are truly a partner in our mission. 
            Together, we ensure that our friends and neighbors can face the end of life with 
            comfort, dignity, and love.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17074624038"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Call Us: (707) 462-4038
            </a>
            <a
              href="mailto:hospice.ukiah@gmail.com"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 border border-white/30"
            >
              Email Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
