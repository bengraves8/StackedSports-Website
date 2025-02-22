import { icons } from './icons';

export const ohioStateLacrosse = {
  name: "Ohio State Lacrosse",
  logo: "https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png",
  summary: "How Ohio State Men's Lacrosse transformed their 11th Man Club engagement and achieved record-breaking growth through personalized communication.",
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
      category: "Strength & Conditioning",
      stats: {
        openRate: "100%",
        viewRate: "260%"
      }
    },
    {
      title: "Post Game Fight Song",
      description: "Following a victory the team gathers for a post-game fight song celebration",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/67a7d6cb1fa8c06abcaa1abb-1.mp4",
      category: "Team Culture",
      stats: {
        openRate: "90%",
        viewRate: "149%"
      }
    },
    {
      title: "Coach's Corner",
      description: "Post-game evaluation with Coach Myers",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/679540e61000917c2eef5f3e.mp4",
      category: "Strategy",
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
      title: "Multi-Channel Content Strategy",
      icon: icons.bookOpen('red'),
      description: "Comprehensive content mix featuring players, coaches, and program updates",
      results: [
        "Player thank you videos",
        "Coach pre-game messages",
        "Victory celebrations and huddle moments"
      ]
    },
    {
      title: "Event Integration",
      icon: icons.trophy('red'),
      description: "Seamless integration of digital and in-person experiences",
      results: [
        "QR code signup at live events",
        "Fundraiser event promotions",
        "Game schedule announcements"
      ]
    },
    {
      title: "Personalized Engagement",
      icon: icons.users('red'),
      description: "Targeted communication for different stakeholder groups",
      results: [
        "Parent-specific messaging",
        "Player-led content",
        "Donor appreciation videos"
      ]
    },
    {
      title: "Campaign Performance",
      icon: icons.barChart('red'),
      description: "Exceptional engagement metrics across all campaigns",
      results: [
        "260% peak video view rate",
        "100% peak link open rate",
        "43 successful campaigns"
      ]
    }
  ],
  timeline: [
    {
      date: "February 2024",
      title: "Platform Launch",
      description: "Started with 92 11th Man Club members",
      milestone: true
    },
    {
      date: "February 2024",
      title: "The Playbook",
      description: "Created a unique engagement strategy specifically designed for Ohio State Lacrosse's goals and 11th Man Club culture",
      milestone: true
    },
    {
      date: "April 2024",
      title: "Content Optimization",
      description: "Achieved first 100% link open rate campaign"
    },
    {
      date: "June 2024",
      title: "Peak Engagement",
      description: "Reached 260% video view rate on player feature",
      milestone: false
    },
    {
      date: "September 2024",
      title: "Member Growth",
      description: "Surpassed 100 11th Man Club members",
      milestone: true
    },
    {
      date: "December 2024",
      title: "Campaign Success",
      description: "Completed 43 successful message campaigns",
      milestone: false
    },
    {
      date: "January 2025",
      title: "12-Month Milestone",
      description: "Reached 113 members with 3,783 total messages sent",
      milestone: true
    }
  ],
  results: [
    {
      icon: icons.trendingUp('red'),
      value: "331",
      label: "Messages per month"
    },
    {
      icon: icons.users('red'),
      value: "189%",
      label: "Avg. video rewatch rate"
    },
    {
      icon: icons.messageSquare('red'),
      value: "43",
      label: "Successful campaigns"
    }
  ],
  testimonial: {
    quote: "The engagement we've seen through Insider Inbox has been incredible. Our 11th Man Club members are more connected to our program than ever, watching our content multiple times and actively participating in our community.",
    author: "Nick Myers",
    role: "Head Coach, Ohio State Men's Lacrosse",
    avatar: "https://insiderinbox.co/wp-content/uploads/2025/02/Screenshot-2025-02-20-at-12.30.14-PM.png"
  }
};