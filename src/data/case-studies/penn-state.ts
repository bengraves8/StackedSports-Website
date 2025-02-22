import { icons } from './icons';

export const pennState = {
  name: "Penn State Athletics",
  logo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png",
  summary: "The Nittany Lion Club, aimed to equip each team with the necessary resources to independently help raise funds and engage their top donors. While each team previously had its own Excellence Fund dedicated to supporting its program, they lacked the tools to effectively engage donors in innovative ways. The introduction of the Insider Inbox addresses this gap by providing the necessary tools and strategies to enhance donor engagement and fundraising efforts.",
  heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/alex-korolkoff-b_y4wUk6WhE-unsplash-3-scaled.jpg",
  keyMetrics: [
    { value: "80%", label: "Platform adoption rate" },
    { value: "28", label: "Team Adoption" },
    { value: "92%", label: "Donor satisfaction" },
    { value: "6x", label: "Repeat donor likelihood" }
  ],
  topVideos: [
    {
      title: "Baseball Season Preview",
      description: "A behind-the-scenes look at preparations for the season opener in Puerto Rico, building excitement for the upcoming games.",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/679eeaeb9ed5aa852c6b70c7-1.mp4",
      category: "Baseball",
      stats: {
        openRate: "43%",
        viewRate: "178%"
      }
    },
    {
      title: "Hockey Pre-Game Access",
      description: "An exclusive behind-the-scenes look as Coach Guy Gadowsky and his staff prepare the locker room and finalize pre-game strategies before the season opener.",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/671c0aad73dccd75b56333f8-1.mp4",
      category: "Ice Hockey",
      stats: {
        openRate: "22%",
        viewRate: "32%"
      }
    },
    {
      title: "Basketball Alumni Update",
      description: "Happy New Year message to alumni. Reconnect with former team members, foster a sense of community, and encourage participation in an alumni event.",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/677703c7c11a793988cfbb25-1.mp4",
      category: "Basketball",
      stats: {
        openRate: "27%",
        viewRate: "34%"
      }
    }
  ],
  goals: [
    {
      title: "Platform Adoption",
      target: "80% active usage",
      achieved: "80% adoption rate",
      status: "completed",
      date: "Q4 2023"
    },
    {
      title: "Excellence Funds",
      target: "All teams equipped",
      achieved: "31 active funds",
      status: "completed",
      date: "Q3 2023"
    },
    {
      title: "Donor Satisfaction",
      target: "85% satisfaction",
      achieved: "92% satisfaction",
      status: "completed",
      date: "Q4 2023"
    }
  ],
  strategies: [
    {
      title: "Team Empowerment",
      icon: icons.trophy('blue'),
      description: "Equipped each team with resources to manage their Excellence Fund",
      results: [
        "Dedicated fundraising tools",
        "Content creation resources",
        "Performance analytics"
      ]
    },
    {
      title: "High-Value Donor Focus",
      icon: icons.target('blue'),
      description: "Concentrated engagement strategy for top donors",
      results: [
        "Personalized communication",
        "Exclusive access",
        "Impact reporting"
      ]
    },
    {
      title: "Multi-Channel Engagement",
      icon: icons.messageSquare('blue'),
      description: "Comprehensive communication approach",
      results: [
        "Sport-specific updates",
        "Donor impact stories",
        "Event invitations"
      ]
    },
    {
      title: "Data-Driven Strategy",
      icon: icons.barChart('blue'),
      description: "Analytics-based decision making",
      results: [
        "Donor behavior tracking",
        "Response rate analysis",
        "ROI measurement"
      ]
    }
  ],
  timeline: [
    {
      date: "January 2023",
      title: "Initiative Launch",
      description: "Kickoff of the Excellence Fund program across all teams",
      milestone: true
    },
    {
      date: "March 2023",
      title: "Team Training",
      description: "Comprehensive training for all coaching staffs on platform usage",
      milestone: true
    },
    {
      date: "May 2023",
      title: "First Success Stories",
      description: "Initial Excellence Funds show significant donor engagement",
      milestone: false
    },
    {
      date: "July 2023",
      title: "Platform Enhancement",
      description: "Added sport-specific customization features",
      milestone: false
    },
    {
      date: "September 2023",
      title: "Full Adoption",
      description: "Achieved 80% platform utilization across all teams",
      milestone: true
    },
    {
      date: "December 2023",
      title: "Year-End Success",
      description: "Exceeded all program objectives with 92% donor satisfaction",
      milestone: true
    }
  ],
  results: [
    {
      icon: icons.trophy('blue'),
      value: "31 Funds",
      label: "Active Excellence Funds"
    },
    {
      icon: icons.users('blue'),
      value: "80% Usage",
      label: "Platform adoption"
    },
    {
      icon: icons.trendingUp('blue'),
      value: "6x Higher",
      label: "Repeat donor rate"
    }
  ],
  testimonial: {
    quote: "Insider Inbox allows our head coaches to foster deeper connections with our top 20% donors to generate the funds necessary to support their program’s needs.",
    author: "Alyssa Francona",
    role: "Senior Associate AD for Advancement",
    avatar: "https://insiderinbox.co/wp-content/uploads/2025/02/alyssa-francona-headshot-1.png"
  }
};