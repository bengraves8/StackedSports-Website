import React from 'react';
import { MessageSquare, Mail, LineChart, Award, TrendingUp, Users, BarChart2, BookOpen, Target, Calendar, Phone, MessageCircle, BarChart as ChartBar, Trophy } from 'lucide-react';

export const caseStudies = {
  'northwestern': {
    name: "Northwestern Fencing",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/09/Northwestern-website-logo.png",
    summary: "How Northwestern Fencing revolutionized their donor engagement strategy and achieved record-breaking support through personalized communication.",
    heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/Northwestern-Fencing.jpg",
    keyMetrics: [
      { value: "98%", label: "SMS delivery rate" },
      { value: "45%", label: "Video view rate" },
      { value: "85%", label: "Email open rate" },
      { value: "12 months", label: "Implementation period" }
    ],
    goals: [
      {
        title: "Message Response Rate",
        target: "40% response",
        achieved: "52% response",
        status: "completed",
        date: "Q4 2023"
      },
      {
        title: "Link Click Rate",
        target: "25%",
        achieved: "32%",
        status: "completed",
        date: "Q3 2023"
      },
      {
        title: "Content Engagement",
        target: "30% video completion",
        achieved: "45% completion",
        status: "completed",
        date: "Q4 2023"
      }
    ],
    strategies: [
      {
        title: "Personalized Communication",
        icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
        description: "Implemented tailored messaging strategies for different donor segments",
        results: [
          "Created donor personas for targeted communication",
          "Developed custom content calendars",
          "Established automated follow-up sequences"
        ]
      },
      {
        title: "Multi-Channel Engagement",
        icon: <Mail className="h-6 w-6 text-purple-600" />,
        description: "Coordinated communication across email, SMS, and direct mail",
        results: [
          "Synchronized messaging across channels",
          "Optimized timing for each channel",
          "Tracked cross-channel engagement"
        ]
      },
      {
        title: "Data-Driven Decisions",
        icon: <LineChart className="h-6 w-6 text-purple-600" />,
        description: "Leveraged analytics to optimize engagement strategies",
        results: [
          "Monitored key performance indicators",
          "Adjusted strategies based on data insights",
          "Created monthly performance reports"
        ]
      },
      {
        title: "VIP Experience Program",
        icon: <Award className="h-6 w-6 text-purple-600" />,
        description: "Developed exclusive content and experiences for top donors",
        results: [
          "Launched behind-the-scenes content series",
          "Created VIP event opportunities",
          "Established direct line to athletic staff"
        ]
      }
    ],
    timeline: [
      {
        date: "January 2023",
        title: "Project Kickoff",
        description: "Initial strategy meetings and goal setting with stakeholders",
        milestone: true
      },
      {
        date: "February 2023",
        title: "Platform Implementation",
        description: "Technical setup and team training on new communication tools"
      },
      {
        date: "March 2023",
        title: "Pilot Program Launch",
        description: "Started with select donor group to test and refine approach",
        milestone: true
      },
      {
        date: "May 2023",
        title: "Full Rollout",
        description: "Expanded program to all donor segments with optimized strategies"
      },
      {
        date: "August 2023",
        title: "VIP Program Launch",
        description: "Introduced exclusive content and experiences for top donors",
        milestone: true
      },
      {
        date: "December 2023",
        title: "Goal Achievement",
        description: "Surpassed all initial engagement and retention targets",
        milestone: true
      }
    ],
    results: [
      {
        icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
        value: "52% Response",
        label: "Average message response rate"
      },
      {
        icon: <Users className="h-6 w-6 text-purple-600" />,
        value: "32% CTR",
        label: "Link click-through rate"
      },
      {
        icon: <BarChart2 className="h-6 w-6 text-purple-600" />,
        value: "45% Completion",
        label: "Video content view completion"
      }
    ],
    testimonial: {
      quote: "The transformation in how we connect with our donors has been remarkable. We're not just sending messages; we're building lasting relationships that translate into tangible support for our athletic programs.",
      author: "Sarah Thompson",
      role: "Senior Director of Athletic Development",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  'utep': {
    name: "UTEP Athletics",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png",
    summary: "How UTEP Athletics achieved record-breaking fundraising success through a strategic dual-approach to donor and fan engagement.",
    heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/utep-football-helmet-pic-860x531-109621804.png",
    keyMetrics: [
      { value: "$5M", label: "Major gifts secured" },
      { value: "38K+", label: "Messages sent" },
      { value: "50.14%", label: "VIP click rate" },
      { value: "6 months", label: "Implementation period" }
    ],
    goals: [
      {
        title: "Top Donor Engagement",
        target: "Personalized strategy for top 20%",
        achieved: "50.14% click rate",
        status: "completed",
        date: "Feb 2025"
      },
      {
        title: "Fundraising Goal",
        target: "Record-breaking donations",
        achieved: "$5M in major gifts",
        status: "completed",
        date: "Feb 2025"
      },
      {
        title: "Mass Engagement",
        target: "Broad reach for bottom 80%",
        achieved: "38K+ messages sent",
        status: "completed",
        date: "Feb 2025"
      }
    ],
    strategies: [
      {
        title: "VIP Donor Strategy",
        icon: <Trophy className="h-6 w-6 text-orange-600" />,
        description: "Focused engagement strategy for top 20% of financial contributors",
        results: [
          "Exclusive content delivery",
          "Direct coach communications",
          "Personalized messaging approach"
        ]
      },
      {
        title: "Mass Communication",
        icon: <MessageSquare className="h-6 w-6 text-orange-600" />,
        description: "Large-scale engagement for broader fan base",
        results: [
          "Ticket sales campaigns",
          "Renewal communications",
          "Fan engagement initiatives"
        ]
      },
      {
        title: "Content Strategy",
        icon: <Target className="h-6 w-6 text-orange-600" />,
        description: "Multi-tiered content approach for different audience segments",
        results: [
          "Behind-the-scenes access",
          "Real-time updates",
          "Victory celebrations"
        ]
      },
      {
        title: "Performance Tracking",
        icon: <BarChart2 className="h-6 w-6 text-orange-600" />,
        description: "Comprehensive analytics for both VIP and mass communications",
        results: [
          "50.14% VIP click rate",
          "61.5% video share rate",
          "13.6% mass message click rate"
        ]
      }
    ],
    timeline: [
      {
        date: "July 2024",
        title: "Strategy Relaunch",
        description: "Repositioned Insider Inbox to focus on UTEP's top financial supporters with comprehensive staff training",
        milestone: true
      },
      {
        date: "August 2024",
        title: "Football Season Launch",
        description: "Exclusive content featuring new head football coach's inaugural season, including tarmac video before Nebraska game",
        milestone: true
      },
      {
        date: "October 2024",
        title: "First Win Celebration",
        description: "Exclusive victory message celebrating UTEP's first win of the season",
        milestone: true
      },
      {
        date: "December 2024",
        title: "NCAA Volleyball Success",
        description: "Real-time, behind-the-scenes content from UTEP's volleyball team during NCAA Tournament run",
        milestone: true
      },
      {
        date: "December 2023",
        title: "Record Gift Secured",
        description: "$2.5 million major gift secured - largest single donation in school history",
        milestone: true
      },
      {
        date: "February 2025",
        title: "Historic Achievement",
        description: "Additional $2.5 million donation secured, completing record-breaking $5M in major gifts",
        milestone: true
      }
    ],
    results: [
      {
        icon: <TrendingUp className="h-5 w-5 text-orange-600" />,
        value: "50.14%",
        label: "VIP click rate"
      },
      {
        icon: <Users className="h-5 w-5 text-orange-600" />,
        value: "61.5%",
        label: "Video share rate"
      },
      {
        icon: <BarChart2 className="h-5 w-5 text-orange-600" />,
        value: "13.6%",
        label: "Mass message click rate"
      }
    ],
    testimonial: {
      quote: "The dual-strategy approach through Insider Inbox and Stakd has transformed how we engage with our supporters. We've achieved unprecedented fundraising success while maintaining strong connections with our broader fan base.",
      author: "Michael Rodriguez",
      role: "Director of Ticket Operations",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  'kent-state': {
    name: "Kent State Basketball",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png",
    summary: "How Kent State Men's Basketball enhanced their donor engagement and built stronger connections with boosters and season ticket holders.",
    heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/Kent-State-Basketball-stadium.jpg",
    keyMetrics: [
      { value: "45%", label: "Donor retention increase" },
      { value: "800+", label: "Premium members" },
      { value: "92%", label: "Satisfaction score" },
      { value: "9 months", label: "Implementation period" }
    ],
    goals: [
      {
        title: "Donor Retention",
        target: "40% increase",
        achieved: "45% increase",
        status: "completed",
        date: "Q3 2023"
      },
      {
        title: "Premium Membership",
        target: "750 members",
        achieved: "800+ members",
        status: "completed",
        date: "Q4 2023"
      },
      {
        title: "Member Satisfaction",
        target: "90%",
        achieved: "92%",
        status: "completed",
        date: "Q4 2023"
      }
    ],
    strategies: [
      {
        title: "VIP Content Strategy",
        icon: <BookOpen className="h-6 w-6 text-blue-600" />,
        description: "Created exclusive behind-the-scenes content for premium members",
        results: [
          "Weekly practice insights",
          "Coach's strategy breakdowns",
          "Player spotlight features"
        ]
      },
      {
        title: "Event Access Program",
        icon: <Calendar className="h-6 w-6 text-blue-600" />,
        description: "Developed exclusive event access for premium members",
        results: [
          "Pre-game meet and greets",
          "Practice viewing sessions",
          "Special recognition events"
        ]
      },
      {
        title: "Engagement Analytics",
        icon: <LineChart className="h-6 w-6 text-blue-600" />,
        description: "Implemented comprehensive tracking of member engagement",
        results: [
          "Content interaction metrics",
          "Event attendance tracking",
          "Satisfaction surveys"
        ]
      },
      {
        title: "Personalized Outreach",
        icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
        description: "Tailored communication based on member preferences",
        results: [
          "Custom content delivery",
          "Preferred contact methods",
          "Targeted event invitations"
        ]
      }
    ],
    timeline: [
      {
        date: "March 2023",
        title: "Program Launch",
        description: "Initial rollout of premium membership program",
        milestone: true
      },
      {
        date: "April 2023",
        title: "Content Strategy",
        description: "Developed and implemented exclusive content plan"
      },
      {
        date: "June 2023",
        title: "Event Program",
        description: "Launched exclusive event access program",
        milestone: true
      },
      {
        date: "August 2023",
        title: "Analytics Integration",
        description: "Implemented engagement tracking system"
      },
      {
        date: "October 2023",
        title: "Program Optimization",
        description: "Refined program based on member feedback",
        milestone: true
      },
      {
        date: "December 2023",
        title: "Goals Achievement",
        description: "Exceeded all program targets",
        milestone: true
      }
    ],
    results: [
      {
        icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
        value: "45% Increase",
        label: "In donor retention"
      },
      {
        icon: <Users className="h-6 w-6 text-blue-600" />,
        value: "800+ Members",
        label: "Active premium members"
      },
      {
        icon: <Award className="h-6 w-6 text-blue-600" />,
        value: "92% Satisfaction",
        label: "Member satisfaction rate"
      }
    ],
    testimonial: {
      quote: "The premium membership program has transformed how we engage with our most dedicated supporters. The exclusive content and events have created a true VIP experience that our members love.",
      author: "David Chen",
      role: "Director of Basketball Operations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  'lsu': {
    name: "LSU TAF",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/2nd.png",
    summary: "How LSU's Tiger Athletic Foundation revolutionized their donor engagement strategy and achieved unprecedented growth in support.",
    heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/LSU-image-min-scaled.jpg",
    keyMetrics: [
      { value: "65%", label: "Donor retention rate" },
      { value: "15,000+", label: "Active donors" },
      { value: "82%", label: "Message open rate" },
      { value: "18 months", label: "Implementation period" }
    ],
    goals: [
      {
        title: "Donor Growth",
        target: "60% retention",
        achieved: "65% retention",
        status: "completed",
        date: "Q4 2023"
      },
      {
        title: "Active Donors",
        target: "12,000",
        achieved: "15,000+",
        status: "completed",
        date: "Q3 2023"
      },
      {
        title: "Engagement Rate",
        target: "75%",
        achieved: "82%",
        status: "completed",
        date: "Q4 2023"
      }
    ],
    strategies: [
      {
        title: "Multi-Sport Coverage",
        icon: <Trophy className="h-6 w-6 text-yellow-600" />,
        description: "Comprehensive content strategy covering all athletic programs",
        results: [
          "Sport-specific updates",
          "Cross-program highlights",
          "Championship coverage"
        ]
      },
      {
        title: "Donor Recognition",
        icon: <Award className="h-6 w-6 text-yellow-600" />,
        description: "Enhanced donor recognition and appreciation program",
        results: [
          "Tiered recognition system",
          "Digital donor wall",
          "Impact storytelling"
        ]
      },
      {
        title: "Communication Strategy",
        icon: <MessageSquare className="h-6 w-6 text-yellow-600" />,
        description: "Sophisticated donor communication framework",
        results: [
          "Personalized messaging",
          "Automated updates",
          "Event notifications"
        ]
      },
      {
        title: "Data Analytics",
        icon: <BarChart2 className="h-6 w-6 text-yellow-600" />,
        description: "Advanced donor behavior analysis",
        results: [
          "Engagement tracking",
          "Giving patterns",
          "ROI measurement"
        ]
      }
    ],
    timeline: [
      {
        date: "January 2023",
        title: "Strategy Development",
        description: "Comprehensive program planning",
        milestone: true
      },
      {
        date: "March 2023",
        title: "Platform Launch",
        description: "Initial rollout of new donor platform"
      },
      {
        date: "May 2023",
        title: "Recognition Program",
        description: "Implementation of new donor recognition system",
        milestone: true
      },
      {
        date: "July 2023",
        title: "Analytics Integration",
        description: "Deployment of advanced analytics tools"
      },
      {
        date: "September 2023",
        title: "Program Expansion",
        description: "Extended coverage to all sports programs",
        milestone: true
      },
      {
        date: "December 2023",
        title: "Full Implementation",
        description: "Achieved all program objectives",
        milestone: true
      }
    ],
    results: [
      {
        icon: <TrendingUp className="h-6 w-6 text-yellow-600" />,
        value: "65% Retention",
        label: "Donor retention rate"
      },
      {
        icon: <Users className="h-6 w-6 text-yellow-600" />,
        value: "15,000+ Donors",
        label: "Active donor base"
      },
      {
        icon: <BarChart2 className="h-6 w-6 text-yellow-600" />,
        value: "82% Engagement",
        label: "Message open rate"
      }
    ],
    testimonial: {
      quote: "The transformation in our donor engagement has been remarkable. We're now able to provide a level of personalization and recognition that has significantly strengthened our relationships with supporters.",
      author: "Jennifer Martinez",
      role: "Executive Director, Tiger Athletic Foundation",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  'penn-state': {
    name: "Penn State Athletics",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png",
    summary: "How Penn State Athletics revolutionized their donor engagement strategy and created meaningful connections with supporters through personalized communication.",
    heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/alex-korolkoff-b_y4wUk6WhE-unsplash-3-scaled.jpg",
    keyMetrics: [
      { value: "55%", label: "Response rate increase" },
      { value: "4,000+", label: "Engaged supporters" },
      { value: "92%", label: "Satisfaction rate" },
      { value: "15 months", label: "Implementation period" }
    ],
    goals: [
      {
        title: "Supporter Engagement",
        target: "50% increase",
        achieved: "55% increase",
        status: "completed",
        date: "Q4 2023"
      },
      {
        title: "Active Supporters",
        target: "3,500",
        achieved: "4,000+",
        status: "completed",
        date: "Q3 2023"
      },
      {
        title: "Member Satisfaction",
        target: "85%",
        achieved: "92%",
        status: "completed",
        date: "Q4 2023"
      }
    ],
    strategies: [
      {
        title: "Personalized Content Hub",
        icon: <BookOpen className="h-6 w-6 text-blue-600" />,
        description: "Created dedicated content portal for different supporter segments",
        results: [
          "Sport-specific updates",
          "Exclusive behind-the-scenes content",
          "Personalized donor impact stories"
        ]
      },
      {
        title: "Multi-Channel Communication",
        icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
        description: "Implemented coordinated messaging across multiple platforms",
        results: [
          "Email campaigns",
          "SMS updates",
          "Social media integration"
        ]
      },
      {
        title: "Data-Driven Engagement",
        icon: <LineChart className="h-6 w-6 text-blue-600" />,
        description: "Leveraged analytics for targeted supporter outreach",
        results: [
          "Behavior tracking",
          "Engagement scoring",
          "Automated segmentation"
        ]
      },
      {
        title: "VIP Experience Program",
        icon: <Trophy className="h-6 w-6 text-blue-600" />,
        description: "Exclusive access and recognition for top supporters",
        results: [
          "Priority event access",
          "Meet-and-greet opportunities",
          "Recognition ceremonies"
        ]
      }
    ],
    timeline: [
      {
        date: "January 2023",
        title: "Strategy Development",
        description: "Comprehensive program planning and goal setting",
        milestone: true
      },
      {
        date: "March 2023",
        title: "Platform Implementation",
        description: "Deployment of new engagement platform"
      },
      {
        date: "May 2023",
        title: "Content Hub Launch",
        description: "Release of personalized content portal",
        milestone: true
      },
      {
        date: "July 2023",
        title: "VIP Program",
        description: "Introduction of exclusive experiences",
        milestone: true
      },
      {
        date: "September 2023",
        title: "Analytics Integration",
        description: "Implementation of advanced tracking",
        milestone: true
      },
      {
        date: "December 2023",
        title: "Program Success",
        description: "Achievement of all major objectives",
        milestone: true
      }
    ],
    results: [
      {
        icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
        value: "55% Growth",
        label: "In supporter engagement"
      },
      {
        icon: <Users className="h-6 w-6 text-blue-600" />,
        value: "4,000+ Members",
        label: "Active supporter base"
      },
      {
        icon: <Award className="h-6 w-6 text-blue-600" />,
        value: "92% Satisfaction",
        label: "Member satisfaction rate"
      }
    ],
    testimonial: {
      quote: "The transformation in our supporter engagement has been incredible. We're now able to deliver personalized experiences that truly resonate with our community and strengthen their connection to Penn State Athletics.",
      author: "James Wilson",
      role: "Associate Athletic Director, Development",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  'ohio-state-lacrosse': {
    name: "Ohio State Lacrosse",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png",
    category: "Insider Inbox | 11th Man Club",
    description: "How Ohio State Men's Lacrosse transformed their 11th Man Club engagement and achieved record-breaking growth through personalized communication.",
    heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/OSU-Lax-huddle.png",
    keyMetrics: [
      { 
        value: "113", 
        label: "11th Man Club Members",
        previousValue: "92",
        trend: "+22.8%"
      },
      { value: "66.7%", label: "Avg. Link Open Rate" },
      { value: "3,783", label: "Messages Sent" },
      { value: "189%", label: "Video Engagement" }
    ],
    topVideos: [
      {
        title: "Final Off-Season Max Out",
        description: "Team hypes up a 500+ lb squat lift",
        videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/6740b0d236726949748381d4.mp4",
        stats: {
          openRate: "100%",
          viewRate: "260%"
        }
      },
      {
        title: "Post Game Fight Song",
        description: "Following a victory the team gathers for a post-game fight song celebration",
        videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/67a7d6cb1fa8c06abcaa1abb-1.mp4",
        stats: {
          openRate: "90%",
          viewRate: "149%"
        }
      },
      {
        title: "Coach's Corner",
        description: "Post-game evaluation with Coach Myers",
        videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/679540e61000917c2eef5f3e.mp4",
        stats: {
          openRate: "76%",
          viewRate: "126%"
        }
      }
    ],
    goals: [
      {
        title: "11th Man Club Growth",
        target: "100+ members",
        achieved: "113 members",
        status: "completed",
        date: "Feb 2025"
      },
      {
        title: "Monthly Engagement",
        target: "300 messages",
        achieved: "331 messages",
        status: "completed",
        date: "Jan 2025"
      },
      {
        title: "Video View Rate",
        target: "50%",
        achieved: "66.7%",
        status: "completed",
        date: "Jan 2025"
      }
    ],
    strategies: [
      {
        title: "Program Insider Access",
        icon: <BookOpen className="h-6 w-6 text-red-600" />,
        description: "Exclusive behind-the-scenes content from the lacrosse program",
        results: [
          "Practice highlights",
          "Player interviews",
          "Strategy breakdowns"
        ]
      },
      {
        title: "Gameday Experience",
        icon: <Trophy className="h-6 w-6 text-red-600" />,
        description: "Enhanced matchday engagement for supporters",
        results: [
          "Pre-game access",
          "VIP seating",
          "Post-game events"
        ]
      },
      {
        title: "Community Building",
        icon: <Users className="h-6 w-6 text-red-600" />,
        description: "Created strong supporter community through events and content",
        results: [
          "Alumni networking",
          "Youth clinics",
          "Supporter meetups"
        ]
      },
      {
        title: "Impact Reporting",
        icon: <BarChart2 className="h-6 w-6 text-red-600" />,
        description: "Regular updates on program development and achievements",
        results: [
          "Monthly newsletters",
          "Development reports",
          "Success stories"
        ]
      }
    ],
    timeline: [
      {
        date: "February 2024",
        title: "Program Launch",
        description: "Ohio State Men's Lacrosse launched Insider Inbox to enhance donor engagement with the 11th Man Club",
        milestone: true
      },
      {
        date: "March 2024",
        title: "The Playbook",
        description: "Created a unique engagement strategy specifically designed for Ohio State Lacrosse's goals and 11th Man Club culture",
        milestone: true
      },
      {
        date: "April 2024",
        title: "Season Engagement",
        description: "Implemented comprehensive game updates, behind-the-scenes content, and exclusive messaging strategy",
        milestone: true
      },
      {
        date: "June 2024",
        title: "Off-Season Progress",
        description: "Maintained momentum through training updates and continued engagement beyond the season",
        milestone: true
      },
      {
        date: "October 2024",
        title: "Fundraising Success",
        description: "First 'Buckeye Lacrosse & Cocktails' event and golf outing raised $75,000+, doubling past years' results. View the event highlights and impact.",
        image: "https://insiderinbox.co/wp-content/uploads/2025/02/OSU-Lax-image.png",
        milestone: true
      },
      {
        date: "February 2025",
        title: "Continued Growth",
        description: "Leveraging Insider Inbox's full potential to drive engagement and fundraising into the new season",
        milestone: true
      }
    ],
    results: [
      {
        icon: <TrendingUp className="h-6 w-6 text-red-600" />,
        value: "22.8%",
        label: "Member growth in 12 months"
      },
      {
        icon: <Users className="h-6 w-6 text-red-600" />,
        value: "66.7%",
        label: "Link open rate"
      },
      {
        icon: <MessageSquare className="h-6 w-6 text-red-600" />,
        value: "260%",
        label: "Peak video view rate"
      }
    ],
    testimonial: {
      quote: "The impact on our program has been transformative. We've built a passionate community of supporters who are more connected and engaged with Ohio State Lacrosse than ever before.",
      author: "Nick Myers",
      role: "Head Coach, Ohio State Lacrosse",
      avatar: "https://insiderinbox.co/wp-content/uploads/2025/02/Screenshot-2025-02-20-at-12.30.14-PM.png"
    }
  }
}