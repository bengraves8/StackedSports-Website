import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="py-32">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Stacked Sports LLC</h1>
          <p className="text-xl text-gray-600">
            Stacked Sports is a forward-thinking provider of innovative communication solutions, dedicated to helping organizations connect with their audiences in meaningful and impactful ways. With a focus on small businesses, athletic programs, non-profits, and professional teams, we deliver tools and strategies that elevate engagement, streamline operations, and drive measurable results.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Our journey began in 2016 under our parent company, Stacked Sports, founded by Ben Graves and Teddy Douglass. Together, they set out to innovate within the sports technology space. Their initial breakthrough was RecruitSuite, a mobile-first application that enabled coaches to build authentic relationships with recruits, their families, and high school coaches—all while saving significant time. RecruitSuite quickly became a trusted tool for over 70 of the top football programs in the country.
              </p>
              <p className="mb-6">
                In October 2022, we reached a pivotal milestone when RecruitSuite was acquired by Teamworks, the global leader in sports technology. This acquisition allowed Stacked Sports to pivot and focus on a new challenge: enhancing how athletic departments engage with their top supporters.
              </p>
              <p>
                Building on our experience and insights, Stacked Sports developed Insider Inbox—a platform designed to revolutionize supporter engagement by providing athletic programs with the tools, technical resources, and training needed to deliver exclusive, personalized content to their top supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To revolutionize communication strategies for small businesses, athletic programs, non-profits, and professional teams. We aim to empower organizations to connect more effectively with their audiences through innovative channels and techniques.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where every organization, regardless of size or sector, can harness the power of advanced communication tools to foster meaningful relationships, drive engagement, and achieve their goals. By continually innovating and adapting to the evolving digital landscape, we strive to be the leading provider of communication solutions that make a tangible difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Developing cutting-edge solutions to keep clients ahead.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Upholding honesty and transparency in all business dealings.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Consistently exceeding expectations in products and services.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">Embracing teamwork within our organization and with clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Squad</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                {member.imageUrl ? (
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                )}
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const team = [
  {
    name: "Ben Graves",
    position: "Founder & CEO",
    description: "Visionary leader with extensive experience in sports technology and athletic administration.",
    imageUrl: "https://ca.slack-edge.com/T036KLGJF-U036UG5RV-12f53388586c-72"
  },
  {
    name: "Gabriel Schneider",
    position: "Head of Product",
    description: "Leading product strategy and innovation to deliver exceptional user experiences."
  },
  {
    name: "Grant Varner",
    position: "Director of Business Development",
    description: "Driving strategic partnerships and business growth initiatives.",
    imageUrl: "https://ca.slack-edge.com/T036KLGJF-U05BN7QEXMX-6e9d9b9b41ee-512"
  },
  {
    name: "Rodrigo Sousa",
    position: "Lead Developer",
    description: "Architecting and implementing cutting-edge software solutions."
  }
];

export default About;