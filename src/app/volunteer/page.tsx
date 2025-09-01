'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, we'll just show a success message
    // In production, this would send data to a server or email service
    console.log('Volunteer form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-6">
            We&apos;ve received your volunteer interest form and deeply appreciate your willingness to help our community.
          </p>
          <p className="text-gray-600 mb-8">
            We will get in touch with you within a few days. Thank you for your heart to serve!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-bg to-white relative">
        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/pexel downloads/pexels-vlada-karpovich-5790718.jpg"
            alt="Volunteer helping in community"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Volunteer with Us
          </h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-secondary mb-8">
              Become a Hospice of Ukiah Volunteer – Make a Difference in Someone&apos;s Life
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Volunteers are the lifeblood of our hospice. As a volunteer, you can bring comfort, help, 
              and hope to neighbors in need. Whether you have just a few hours a month or several hours 
              a week, your contribution can be life-changing for a family (and deeply rewarding for you).
            </p>
          </div>
        </div>
      </section>

      {/* Current Volunteer Needs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Current Volunteer Needs
          </h2>
          
          <div className="space-y-12">
            {/* Respite Care Volunteers */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Respite Care Volunteers
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Spend time with hospice patients to give their family caregivers a much-needed break. 
                You might read to a patient, listen to their stories, or simply sit with them so their 
                loved one can run an errand or rest. Training is provided, and you will always have 
                support from our team. This role typically involves 2-4 hours per week (flexible).
              </p>
            </div>

            {/* Thrift & Gift Store Volunteers */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Thrift & Gift Store Volunteers
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Help our fundraising efforts by volunteering at our Thrift & Gift store. Tasks include 
                sorting donations, pricing items, arranging displays, or customer service. <strong>Note: 
                The store is currently on pause as we reorganize, but we are gathering a list of interested 
                volunteers so we can hit the ground running when it reopens!</strong>
              </p>
            </div>

            {/* Board Members / Committee Volunteers */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Board Members / Committee Volunteers
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join our Board of Directors or a special project committee to guide the hospice&apos;s 
                mission. Board members typically contribute ~4 hours per month to attend meetings and 
                provide oversight. We welcome individuals with skills in nonprofit governance, finance, 
                fundraising, or community advocacy. (Board positions are unpaid volunteer roles.)
              </p>
            </div>

            {/* Other Skills */}
            <div className="bg-neutral-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Other Skills
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Have a special skill to offer? Volunteers have helped with office work, event planning, 
                graphic design, gardening for patients, and more. Let us know how you&apos;d like to 
                contribute – we likely have a place for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Why Volunteer?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Volunteering with a hospice is a profound way to give back. You have the chance to:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Provide comfort and companionship to someone in their final days.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Support caregivers who may be exhausted and in need of relief.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Connect with your community on a deep, meaningful level.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gain training and experience in caregiving, listening, and empathy.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Honor life and learn about living from those at the end of life.
                </li>
              </ul>
              
              <p>
                Our volunteers often tell us that they <em>receive</em> far more than they give.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <blockquote className="text-xl italic text-gray-800 mb-4">
                &ldquo;The small acts – holding a hand, listening – felt huge in the lives of these 
                families, and it enriched my life too.&rdquo;
              </blockquote>
              <p className="text-sm text-gray-600 text-right">— Hospice of Ukiah Volunteer</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            How to Join Our Volunteer Team
          </h2>
          
          <div className="mb-12">
            <p className="text-lg text-gray-700 text-center mb-8">Getting started is easy:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Contact Us</h3>
                <p className="text-gray-700">
                  Use the form below to let us know you&apos;re interested, or call our Volunteer 
                  Coordinator at (707) 462-4038.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Meet & Greet</h3>
                <p className="text-gray-700">
                  We&apos;ll reach out to discuss your interests and schedule. We want to find the 
                  best fit for you.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Training</h3>
                <p className="text-gray-700">
                  All hospice volunteers undergo a basic orientation and training program. Don&apos;t 
                  worry – we&apos;ll teach you everything you need.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Start Volunteering</h3>
                <p className="text-gray-700">
                  Once ready, we&apos;ll match you with a role and schedule that works for you. Even 
                  a few hours a month can make a huge impact!
                </p>
              </div>
            </div>
          </div>
          
          {/* Important Requirements */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Requirements:</h3>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                You must be 18 or older for direct patient volunteering. (Teens can still help with 
                fundraising or the thrift store under supervision – inquire if interested.)
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                All volunteers will be required to pass a background check and have COVID-19 vaccination 
                (per current health guidelines) to ensure patient safety.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteer Sign-Up Form */}
      <section className="py-20 px-4 bg-neutral-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
            Volunteer Sign-Up Form
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Areas of Interest (Check all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Patient Care',
                    'Thrift Store',
                    'Board/Committee',
                    'Other'
                  ].map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange(interest)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about any special skills, availability, or questions you have..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Volunteer Interest Form
              </button>
            </form>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800 text-center">
                We will get in touch with you within a few days after receiving your interest form. 
                Thank you for your willingness to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Questions Before Applying?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            If you have any questions before applying, feel free to call us. We love talking to potential volunteers!
          </p>
          <a
            href="tel:+17074624038"
            className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Call Our Volunteer Coordinator: (707) 462-4038
          </a>
        </div>
      </section>
    </div>
  );
}
