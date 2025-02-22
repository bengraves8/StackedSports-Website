import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, Target, CheckCircle, ArrowRight, 
  Users, BarChart2, TrendingUp, BookOpen, ArrowLeft,
  MessageSquare, Mail, LineChart, Award, Trophy,
  Share2, Heart, MessageCircle, Play, X
} from 'lucide-react';
import { caseStudies } from '../data/case-studies';
import { schoolColors } from '../data/schoolColors';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const caseStudy = id ? caseStudies[id as keyof typeof caseStudies] : null;
  const colors = id ? schoolColors[id as keyof typeof schoolColors] : schoolColors.northwestern;

  useEffect(() => {
    if (!caseStudy) {
      navigate('/case-studies');
    }
  }, [caseStudy, navigate]);

  if (!caseStudy) {
    return null;
  }

  return (
    <div className="py-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/case-studies')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Case Studies
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`bg-gradient-to-b ${colors.gradientFrom} to-white`}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src={caseStudy.logo}
                    alt={`${caseStudy.name} logo`}
                    className="h-12 mr-4"
                  />
                  <div>
                    <span className={`text-sm font-medium ${colors.iconText} block mb-1`}>
                      Case Study
                    </span>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h1 className="text-4xl font-bold">{caseStudy.name}</h1>
                      {id === 'utep' ? (
                        <>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors.iconBg} ${colors.iconText} border border-current/10 shadow-sm`}>
                            Insider Inbox
                          </span>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors.iconBg} ${colors.iconText} border border-current/10 shadow-sm`}>
                            Stakd
                          </span>
                        </>
                      ) : (
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors.iconBg} ${colors.iconText} border border-current/10 shadow-sm`}>
                          {id?.includes('lsu') ? 'Stakd' : 'Insider Inbox'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-8">
                  {caseStudy.summary}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {caseStudy.keyMetrics.map((metric, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`text-3xl font-bold ${colors.iconText}`}>
                          {metric.value}
                        </div>
                        {'previousValue' in metric && (
                          <div className="flex items-center text-sm font-medium text-green-600">
                            <span className="text-gray-500 line-through mr-1">{metric.previousValue}</span>
                            <span>{metric.trend}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.name}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Goals & Progress</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudy.goals.map((goal, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Target</span>
                      <span className="font-medium">{goal.target}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Achieved</span>
                      <span className="font-medium">{goal.achieved}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Timeline</span>
                      <span className="font-medium">{goal.date}</span>
                    </div>
                  </div>
                  <div className={`
                    px-3 py-1 rounded-full text-sm font-medium inline-flex items-center
                    ${goal.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      goal.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                      'bg-gray-100 text-gray-800'}
                  `}>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {goal.status === 'completed' ? 'Completed' : 
                     goal.status === 'in-progress' ? 'In Progress' : 
                     'Upcoming'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Playbook */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Playbook</h2>
              <p className="text-xl text-gray-600">
                Strategic Communication Blueprint for Enhanced Member Engagement
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.strategies.map((strategy, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className={`${colors.iconBg} p-2 rounded-lg mr-4`}>
                      <strategy.icon.Icon className={`h-6 w-6 ${strategy.icon.className}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                      <p className="text-gray-600 mb-4">{strategy.description}</p>
                      {strategy.results && (
                        <ul className="space-y-2">
                          {strategy.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <ArrowRight className={`h-4 w-4 ${colors.iconText} mr-2`} />
                              {result}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Implementation Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
              
              {/* Timeline Events */}
              <div className="space-y-8 md:space-y-12">
                {caseStudy.timeline.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col md:flex-row items-center group
                      ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                      ${index % 2 === 0 ? 'items-start md:items-center' : 'items-start md:items-center'}
                    `}>
                    {/* Content */}
                    <div className={`w-full md:w-5/12 pl-8 md:pl-0 mb-4 md:mb-0
                      ${index % 2 === 0 ? 'md:pr-8 text-left md:text-right' : 'md:pl-8 text-left'}
                    `}>
                      <div className={`bg-white p-6 rounded-lg shadow-md ${
                        event.milestone ? `border-2 ${colors.milestoneBorder}` : ''
                      } transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}>
                        <div className={`text-sm ${colors.iconText} font-medium mb-2 ${
                          index % 2 === 0 ? 'md:text-right' : 'text-left'
                        }`}>
                          {event.date}
                        </div>
                        <h3 className={`text-lg font-bold mb-2 flex items-center ${
                          index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                        }`}>
                          {event.title}
                          {event.videoPreview && (
                            <button
                              onClick={() => setIsVideoModalOpen(true)}
                              className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <Play className="h-4 w-4" />
                            </button>
                          )}
                        </h3>
                        <p className={`text-gray-600 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                          {event.description}
                        </p>
                        {event.image && (
                          <div className="mt-4">
                            <img
                              src={event.image}
                              alt="Event highlights"
                              className="rounded-lg shadow-sm w-full hover:shadow-md transition-shadow"
                            />
                          </div>
                        )}
                        {event.milestone && (
                          <div className={`mt-4 pt-4 border-t border-gray-100 ${
                            index % 2 === 0 ? 'md:text-right' : 'text-left'
                          }`}>
                            <span className={`inline-flex items-center text-sm ${colors.iconText}`}>
                              <Trophy className="h-4 w-4 mr-2" />
                              Key Milestone
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Point */}
                    <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
                      <div className={`
                        w-4 h-4 rounded-full ${colors.timelineDot} 
                        transition-all duration-300 
                        group-hover:scale-150 group-hover:shadow-lg
                        relative
                      `}>
                        <div className={`
                          absolute w-8 h-8 rounded-full ${colors.iconBg}
                          -left-2 -top-2 opacity-0 group-hover:opacity-100
                          transition-all duration-300 scale-0 group-hover:scale-100
                        `} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performing Videos */}
      {caseStudy.topVideos && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">Top Performing Videos</h2>
              <p className="text-xl text-gray-600 text-center mb-16">
                Exclusive content that drove record-breaking engagement across both VIP and mass audience segments.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudy.topVideos.map((video, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-black relative">
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`bg-black/75 text-white px-3 py-1 rounded-full text-sm font-medium ${colors.iconText}`}>
                          {video.category || (index === 0 ? 'Featured' : index === 1 ? 'Highlights' : 'Behind the Scenes')}
                        </span>
                      </div>
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                      <p className="text-gray-600 text-sm mb-6">
                        {video.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className={`text-xl font-bold ${colors.iconText}`}>
                            {video.stats.openRate}
                          </div>
                          <div className="text-sm text-gray-500">Open Rate</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-xl font-bold ${colors.iconText}`}>
                            {video.stats.viewRate}
                          </div>
                          <div className="text-sm text-gray-500">View Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Program Use Cases */}
      {id === 'ohio-state-lacrosse' && (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Program Use Cases and Impact</h2>
              <p className="text-xl text-gray-600">
                How Ohio State Lacrosse leverages Insider Inbox's versatile features to create meaningful connections
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Game Day Communications */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className={`${colors.iconBg} p-3 rounded-lg inline-block mb-4`}>
                  <Trophy className={`h-6 w-6 ${colors.iconText}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">Game Day Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Victory celebrations and huddle messages</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Coach's pre-game strategy messages</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Post-game player insights</span>
                  </li>
                </ul>
              </div>

              {/* Program Updates */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className={`${colors.iconBg} p-3 rounded-lg inline-block mb-4`}>
                  <Calendar className={`h-6 w-6 ${colors.iconText}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">Program Updates</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Off-season workout highlights</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Season schedule announcements</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Team merchandise promotions</span>
                  </li>
                </ul>
              </div>

              {/* Community Engagement */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className={`${colors.iconBg} p-3 rounded-lg inline-block mb-4`}>
                  <Users className={`h-6 w-6 ${colors.iconText}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Player thank you messages</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Parent-specific communications</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Holiday greetings and updates</span>
                  </li>
                </ul>
              </div>

              {/* Event Management */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className={`${colors.iconBg} p-3 rounded-lg inline-block mb-4`}>
                  <MessageSquare className={`h-6 w-6 ${colors.iconText}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">Event Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Buckeye Lacrosse & Cocktails invites</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Golf outing coordination</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Live event messaging</span>
                  </li>
                </ul>
              </div>

              {/* Data Collection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className={`${colors.iconBg} p-3 rounded-lg inline-block mb-4`}>
                  <BarChart2 className={`h-6 w-6 ${colors.iconText}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Collection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>QR code contact creation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Event attendance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Engagement analytics</span>
                  </li>
                </ul>
              </div>

              {/* Multi-Channel Delivery */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className={`${colors.iconBg} p-3 rounded-lg inline-block mb-4`}>
                  <Mail className={`h-6 w-6 ${colors.iconText}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">Multi-Channel Delivery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>SMS and MMS messaging</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Video content delivery</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className={`h-5 w-5 ${colors.iconText} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>Interactive media sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Impact & Results Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Impact & Results</h2>
                <div className="space-y-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                      <div className={`${colors.iconBg} p-2 rounded-lg mr-4`}>
                        <result.icon.Icon className={`h-6 w-6 ${result.icon.className}`} />
                      </div>
                      <div>
                        <div className="font-bold text-xl">{result.value}</div>
                        <div className="text-gray-600">{result.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-6">
                    <BookOpen className={`h-8 w-8 ${colors.iconText}`} />
                  </div>
                  <blockquote className="text-xl text-gray-600 italic mb-6">
                    {caseStudy.testimonial.quote}
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={caseStudy.testimonial.avatar}
                      alt={caseStudy.testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold">{caseStudy.testimonial.author}</div>
                      <div className="text-gray-600">{caseStudy.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[400px] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative pt-[177.78%]">
              {id === 'pitt' ? (
                <video
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                >
                  <source src="https://insiderinbox.co/wp-content/uploads/2025/02/Pitt-Allen-Green-Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : id === 'utep' ? (
                <iframe 
                  width="560" 
                  height="315" 
                  className="absolute inset-0 w-full h-full"
                  src="https://insiderinbox.co/wp-content/uploads/2024/09/66e0795f67ceb70eef738989.mov" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              ) : id === 'kent-state' && (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  autoPlay
                >
                  <source src="https://insiderinbox.co/wp-content/uploads/2025/02/Kent-State-Top-Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CaseStudyDetail;