import React, { useState } from 'react';
import { Calendar, Users, MessageSquare } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  role: string;
  message: string;
}

const RequestDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data: FormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      organization: formData.get('organization') as string,
      role: formData.get('role') as string,
      message: formData.get('message') as string
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd659c1e6-b491-4d57-816d-e92e4f88854c',
          subject: `Demo Request from ${data.firstName} ${data.lastName} - ${data.organization}`,
          from_name: `${data.firstName} ${data.lastName}`,
          to_email: 'info@stackedsports.com,grant@stakd.co',
          message: `
            Name: ${data.firstName} ${data.lastName}
            Email: ${data.email}
            Organization: ${data.organization}
            Role: ${data.role}
            
            Message:
            ${data.message}
          `
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitSuccess(true);
      form.reset();
    } catch (err) {
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your demo request and will be in touch shortly.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-secondary-400 text-black px-6 py-3 rounded-md hover:bg-secondary-500 transition-colors"
            >
              Request Another Demo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <h1 className="text-4xl font-bold mb-6">Request a Demo</h1>
              <p className="text-xl text-gray-600 mb-8">
                See how Stacked Sports can transform your athletic department's engagement strategy.
              </p>
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization*
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="ad">AD</option>
                    <option value="development_professional">Development Professional</option>
                    <option value="coach">Head or Assistant Coach</option>
                    <option value="business_owner">Business Owner</option>
                    <option value="nonprofit_professional">Non-profit Professional</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your current challenges and what you're looking to achieve..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-secondary-400 text-black py-3 px-6 rounded-md hover:bg-secondary-500 transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Free Demo'}
                </button>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-8">Why Choose Stacked Sports?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Demo</h3>
                    <p className="text-gray-600">
                      Get a customized walkthrough of our solutions tailored to your organization's needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Consultation</h3>
                    <p className="text-gray-600">
                      Connect with our team of sports tech experts who understand your unique challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Get dedicated support throughout your journey with Stacked Sports.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-4">What to Expect</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>30-minute personalized demo</li>
                  <li>Q&A session with our experts</li>
                  <li>Custom pricing information</li>
                  <li>Implementation timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;