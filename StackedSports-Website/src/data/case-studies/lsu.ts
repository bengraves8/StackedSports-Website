import { icons } from './icons';

export const lsu = {
  name: "LSU TAF",
  logo: "https://insiderinbox.co/wp-content/uploads/2024/08/2nd.png",
  summary: "How LSU's Tiger Athletic Foundation revolutionized their donor engagement strategy and achieved unprecedented growth in support.",
  heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/LSU-image-min-scaled.jpg",
  keyMetrics: [
    { value: "65%", label: "Donor retention rate" },
    { value: "15,000+", label: "Active donors" },
    { value: "82%", label: "Message open rate" },
    { value: "18", label: "Months to full rollout" }
  ],
  topVideos: [
    {
      title: "Football Gameday Experience",
      description: "Behind-the-scenes look at Death Valley on gameday",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/lsu-gameday.mp4",
      category: "Football",
      stats: {
        openRate: "96%",
        viewRate: "205%"
      }
    },
    {
      title: "Basketball Victory",
      description: "Exclusive locker room celebration after major win",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/lsu-basketball.mp4",
      category: "Basketball",
      stats: {
        openRate: "93%",
        viewRate: "178%"
      }
    },
    {
      title: "Baseball Championship",
      description: "Special coverage of championship celebration",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/lsu-baseball.mp4",
      category: "Baseball",
      stats: {
        openRate: "91%",
        viewRate: "165%"
      }
    }
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
      icon: icons.trophy('yellow'),
      description: "Comprehensive content strategy covering all athletic programs",
      results: [
        "Sport-specific updates",
        "Cross-program highlights",
        "Championship coverage"
      ]
    },
    {
      title: "Donor Recognition",
      icon: icons.users('yellow'),
      description: "Enhanced donor recognition and appreciation program",
      results: [
        "Tiered recognition system",
        "Digital donor wall",
        "Impact storytelling"
      ]
    },
    {
      title: "Communication Strategy",
      icon: icons.messageSquare('yellow'),
      description: "Sophisticated donor communication framework",
      results: [
        "Personalized messaging",
        "Automated updates",
        "Event notifications"
      ]
    },
    {
      title: "Data Analytics",
      icon: icons.barChart('yellow'),
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
      icon: icons.trendingUp('yellow'),
      value: "65% Retention",
      label: "Donor retention rate"
    },
    {
      icon: icons.users('yellow'),
      value: "15,000+ Donors",
      label: "Active donor base"
    },
    {
      icon: icons.barChart('yellow'),
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
};