import React from 'react';
import { Trophy, MessageSquare, Users, Target, Star, ArrowRight } from 'lucide-react';
import RecruitSuiteLogo from '../components/logos/RecruitSuiteLogo';

const RecruitSuite = () => {
  return (
    <div className="py-20">
      {/* Legacy Banner */}
      <div className="bg-blue-50 py-3 text-center mb-12">
        <p className="text-blue-800 font-medium">
          RecruitSuite is now part of Teamworks.com
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <RecruitSuiteLogo className="w-12 h-12" />
                <h1 className="text-4xl font-bold ml-4">RecruitSuite</h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                A groundbreaking mobile-first recruiting platform that revolutionized how D1 football programs built authentic relationships with prospects, their families, and high school coaches.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">70+ D1 Programs</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">Industry Leader</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://insiderinbox.co/wp-content/uploads/2024/08/mockup-of-an-iphone-12-pro-max-in-portrait-position-5128-el1.png"
                alt="RecruitSuite Mobile Interface"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Smart Communication</h3>
                <p className="text-gray-600">
                  Automated messaging workflows and templates to maintain consistent communication with prospects.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Relationship Building</h3>
                <p className="text-gray-600">
                  Tools to track and nurture relationships with prospects, families, and coaches throughout the recruiting process.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Prospect Tracking</h3>
                <p className="text-gray-600">
                  Comprehensive tracking system for managing prospect information, interactions, and recruitment status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Success Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              RecruitSuite's success in revolutionizing college football recruiting led to its acquisition by Teamworks, the leading provider of operations software to elite sports organizations.
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <p className="text-lg text-blue-900 italic mb-6">
                "RecruitSuite transformed how we managed our recruiting communications, saving our staff countless hours while helping us build stronger relationships with prospects."
              </p>
              <p className="font-medium text-blue-800">- Division 1 Football Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Now Part of Teamworks</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the evolution of RecruitSuite's innovative features, now integrated into Teamworks' comprehensive platform.
            </p>
            <a 
              href="https://teamworks.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Visit Teamworks <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecruitSuite;