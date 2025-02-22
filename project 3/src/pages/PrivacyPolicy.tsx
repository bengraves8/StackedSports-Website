import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-lg text-gray-600 mb-8">
              Stakd.co™, InsiderInbox.co™ & Stacked Sports™ Privacy Policy
            </p>

            <p className="mb-6">
              Stakd.co, InsiderInbox.co, StackedSports.com, and StackedMessenger.com (collectively referred to as the "Site") are owned and operated by Stacked Sports, LLC, an Ohio limited liability company (hereinafter referred to as "Stacked Sports," "we," "us," or "our").
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Overview</h2>
            <p className="mb-6">
              This Privacy Policy ("Policy") explains how we collect, use, disclose, and protect the Personal Information you provide when using the Site. "Personal Information" refers to data that personally identifies you, either alone or in combination with other information we have access to. Examples of Personal Information include your name, address, e-mail address, mobile phone number, and credit card information.
            </p>

            <p className="mb-6">
              This Policy applies solely to the information collected by the Site and does not pertain to data collected by us through any other online or offline means. By visiting or using the Site, you agree to the terms of this Policy and, if you provide us your Personal Information, you consent to the collection, use, and protection of your information as outlined in this Policy. If you disagree with this Policy, please do not provide any Personal Information and refrain from using the Site.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Types of Information We Collect</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-3">Information You Provide Voluntarily</h3>
            <p className="mb-6">
              We collect the Personal Information that you knowingly and voluntarily provide when you use this Site, such as when you register.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Information from your Browser</h3>
            <p className="mb-6">
              We collect information sent to us automatically by your web browser. This typically includes your IP address, your Internet service provider, the name and version of your operating system and browser, the date and time of your visit, and the pages you visit.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">IP Addresses</h3>
            <p className="mb-6">
              An IP address is a unique number assigned to your computer when you connect to the Internet. It helps identify your computer's location in cyberspace for the purpose of delivering the information you request. We may link your IP address to account information that identifies you personally if you have registered with the Site. If we suspect inappropriate or criminal activity or a threat to the Site's security, we may share server logs, which contain users' IP addresses, with the appropriate investigative authorities who could use that information to trace and identify individuals.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Cookies and Similar Technologies</h3>
            <p className="mb-6">
              We use "cookies" and similar web technologies to collect information and support certain features of the Site. These technologies help us understand how visitors use the Site, save user data already in our database, remember settings established on previous visits, and personalize your experience.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Mobile Device Information</h3>
            <p className="mb-6">
              If you access the mobile version of the Site, we may automatically collect certain information about your mobile device, such as the type of device, your device's unique ID, IP address, operating system, and information about how you use our mobile application(s) and the Site.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Google API Services</h3>
            <p className="mb-6">
              Stakd use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">How We Use Personal Information</h2>
            <p className="mb-4">We primarily use the Personal Information we collect through the Site to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide requested information, products, and services</li>
              <li>Understand your needs and interests</li>
              <li>Provide a personalized experience on the Site</li>
              <li>Offer effective customer service</li>
              <li>Improve the Site's content, functionality, and usability</li>
              <li>Contact you with relevant information related to your use of the Site</li>
              <li>Contact you with special offers and other information we believe will be of interest to you</li>
              <li>Invite you to participate in surveys and provide feedback</li>
              <li>Improve our products, services, marketing, and promotional efforts</li>
              <li>Enhance security, credit, or fraud prevention purposes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">SMS Opt-In and Permissions</h2>
            <p className="mb-6">
              By opting in to receive SMS communications from us, you consent to receive text messages, including marketing and promotional messages, from Stacked Sports. You can opt out of receiving these messages at any time by replying "STOP" to any SMS message you receive. Standard message and data rates may apply. We do not sell, rent, or share your opt-in information with any third party.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Children Under the Age of Thirteen</h2>
            <p className="mb-6">
              This Site is not intended for children or minors under the age of thirteen years without the permission of a parent or guardian. If you believe that a child has submitted Personal Information on or through this Site without the consent and supervision of a parent or guardian, please contact us using the information provided in this Policy.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Contact Information</h2>
            <p className="mb-6">
              If you have any questions about this Policy or our privacy practices, please contact us at:<br />
              <a href="mailto:info@stackedsports.com" className="text-primary-500 hover:text-primary-600">
                info@stackedsports.com
              </a>
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Effective Date of this Policy: December 10, 2015<br />
                Most recently updated: February 17, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;