import { icons } from './icons';

export const kentState = {
  name: "Kent State Basketball",
  logo: "https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png",
  summary: "How Kent State Basketball and the Blue and Gold Collective partnered with Insider Inbox to provide collective members with an inside look at the program through the eyes of Coach Rob Senderoff.",
  heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/Kent-State-Basketball-stadium.jpg",
  keyMetrics: [
    { value: "25%", label: "Fundraising goal reached in 2 months" },
    { value: "5,000", label: "Total engagements" },
    { value: "21.06%", label: "Link open rate" },
    { value: "24.36%", label: "Video view rate" }
  ],
  topVideos: [
    {
      title: "Happy Thanksgiving",
      description: "The 'coldest place on the planet' but still checking in",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/Kent-State-Top-Video.mp4",
      category: "Holidays,Funny",
      stats: {
        openRate: "35%",
        viewRate: "48%",
        ctaClickRate: "10%"
      }
    },
    {
      title: "Coach's Prep",
      description: "Head coach Rob Senderoff breaks down the keys when taking on #5 Auburn",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/6734b0bfd5e305a99122a0c8-1.mp4",
      category: "Strategy",
      stats: {
        openRate: "32%",
        viewRate: "45%",
      }
    },
    {
      title: "Introducing Insider Inbox",
      description: "Behind-the-scenes look at practice as coach introduces Insider Inbox to his collective members",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2024/10/IMG_0546-1.mov",
      category: "Launch Message",
      stats: {
        openRate: "34%",
        viewRate: "43%",
        ctaClickRate: "12%"
      }
    }
  ],
  goals: [
    {
      title: "Inside Access",
      target: "Exclusive content delivery",
      achieved: "Regular behind-the-scenes content",
      status: "completed",
      date: "Feb 2025"
    },
    {
      title: "Fundraising Goal",
      target: "$10,000",
      achieved: "$2,500+",
      status: "in-progress",
      date: "Feb 2025"
    },
    {
      title: "Donor Engagement",
      target: "Biweekly updates",
      achieved: "Regular engagement",
      status: "in-progress",
      date: "Feb 2025"
    }
  ],
  strategies: [
    {
      title: "Personalized Content",
      icon: icons.bookOpen('blue'),
      description: "Distributing behind-the-scenes content directly from Coach Senderoff in a personal way",
      results: [
        "Game breakdowns",
        "Pregame hype videos",
        "Post-game celebrations"
      ]
    },
    {
      title: "Staff Collaboration",
      icon: icons.trophy('blue'),
      description: "Working with staff members to create and distribute engaging content",
      results: [
        "Content creation support",
        "Distribution strategy",
        "Engagement tracking"
      ]
    },
    {
      title: "Website Integration",
      icon: icons.barChart('blue'),
      description: "Launched GoBlueAndGold.com for exclusive access and donations",
      results: [
        "One-time donations",
        "$20/month subscriptions",
        "Exclusive content access"
      ]
    },
    {
      title: "Donor Engagement",
      icon: icons.messageSquare('blue'),
      description: "Strategic donor outreach and engagement program",
      results: [
        "Direct donor communications",
        "Engagement tracking",
        "Fundraising progress"
      ]
    }
  ],
  timeline: [
    {
      date: "November 2024",
      title: "Program Launch",
      description: "Launched with the first introductory video message",
      milestone: true
    },
    {
      date: "November 2024",
      title: "First Success",
      description: "Received immediate $1,000+ donation without direct fundraising ask",
      milestone: true
    },
    {
      date: "Late November 2024",
      title: "Holiday Engagement",
      description: "Sent a Thanksgiving video, generating strong engagement",
      milestone: false
    },
    {
      date: "December 2024",
      title: "Season Progress",
      description: "Shared progress of the season and continued donor outreach",
      milestone: false
    },
    {
      date: "January 2025",
      title: "Fundraising Milestone",
      description: "Reached 25% of the annual fundraising goal within 60 days of launch",
      milestone: true
    },
    {
      date: "February 2025",
      title: "Continued Growth",
      description: "Continued to provide exclusive behind-the-scenes content to maintain engagement",
      milestone: false
    }
  ],
  results: [
    {
      icon: icons.trendingUp('blue'),
      value: "25% in 2mo",
      label: "Of annual goal reached"
    },
    {
      icon: icons.users('blue'),
      value: "5,000",
      label: "Total engagements"
    },
    {
      icon: icons.trophy('blue'),
      value: "15",
      label: "Opt-outs from 300+ contacts"
    }
  ],
  testimonial: {
    quote: "The engagement we've seen through Insider Inbox has been incredible. We've progresssed significantly in our fundraising goals while maintaining strong connections with our supporters.",
    author: "Rob Senderoff",
    role: "Head Coach, Kent State Basketball",
    avatar: "https://insiderinbox.co/wp-content/uploads/2025/02/Rob-Senderoff.png"
  }
};