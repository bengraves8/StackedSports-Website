import React from 'react';
import { ArrowRight, MessageSquare, Mail, MessageCircle, Globe, Calendar, Users, Brain, BarChart2, Target, Shield, Trophy, Star } from 'lucide-react';
import StakdLogo from '../components/logos/StakdLogo';
import InsiderInboxLogo from '../components/logos/InsiderInboxLogo';
import RecruitSuiteLogo from '../components/logos/RecruitSuiteLogo';

const Products = () => {
  return (
    <div className="py-20">
      {/* Products Header */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-600">
            Innovative solutions designed to transform how organizations engage with their stakeholders.
          </p>
        </div>
      </section>

      {/* Insider Inbox Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <InsiderInboxLogo className="w-12 h-12" />
                  <h2 className="text-3xl font-bold ml-4">Insider Inbox</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  A personalized communication platform designed to enhance donor engagement for athletic programs through exclusive, behind-the-scenes content.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <Calendar className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Turnkey Communication Strategy</h3>
                      <p className="text-gray-600">AI-driven scheduling based on your team's competition schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Collaborative Platform</h3>
                      <p className="text-gray-600">Seamless collaboration between coaches, staff, and development personnel</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <Brain className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">AI-Powered Engagement</h3>
                      <p className="text-gray-600">Smart response suggestions tailored to your program's goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <BarChart2 className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Performance Analytics</h3>
                      <p className="text-gray-600">Measure campaign success and increase supporter lifetime value</p>
                    </div>
                  </div>
                </div>
                <a href="https://insiderinbox.co" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors font-medium">
                  Learn More About Insider Inbox <ArrowRight className="ml-2" />
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://insiderinbox.co/wp-content/uploads/2025/02/OSU-Lax-image.png"
                  alt="Insider Inbox Interface"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakd Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="https://insiderinbox.co/wp-content/uploads/2024/08/mockup-of-an-imac-placed-on-a-colorful-background-m33284.png"
                  alt="Stakd Dashboard"
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <StakdLogo className="w-12 h-12" />
                  <h2 className="text-3xl font-bold ml-4">Stakd</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  A communication platform tailored for <strong>small businesses</strong>, <strong>non-profits</strong>, and <strong>sports ticketing departments</strong> to enhance audience engagement.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <MessageSquare className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Bulk SMS and MMS Messaging</h3>
                      <p className="text-gray-600">Efficiently manage mass communications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Integration</h3>
                      <p className="text-gray-600">Seamless email campaign management</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <MessageCircle className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">One-to-One Chat</h3>
                      <p className="text-gray-600">Personal conversations with individual contacts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black/5 p-2 rounded-lg mr-4">
                      <Globe className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Web Chat Functionality</h3>
                      <p className="text-gray-600">Real-time website visitor engagement</p>
                    </div>
                  </div>
                </div>
                <a href="https://stakd.co" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors font-medium">
                  Learn More About Stakd <ArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RecruitSuite Legacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Legacy Product
              </div>
              <div className="flex items-center justify-center mb-4">
                <RecruitSuiteLogo className="w-12 h-12" />
                <h2 className="text-3xl font-bold ml-4">RecruitSuite</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our groundbreaking recruiting communications platform, now part of Teamworks.com, revolutionized how D1 football programs engaged with top prospects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Success</h3>
                <p className="text-gray-600">
                  Trusted by over 70+ D1 football programs to streamline their recruiting communication process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Streamlined Communication</h3>
                <p className="text-gray-600">
                  Revolutionized how programs engaged with prospects through innovative messaging solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                <p className="text-gray-600">
                  Acquired by Teamworks.com and integrated into their comprehensive recruiting suite.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a 
                href="https://teamworks.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Now Part of Teamworks <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;