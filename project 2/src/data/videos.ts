interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
  team: string;
  teamLogo: string;
  stats: {
    openRate: string;
    viewRate: string;
    ctaClickRate?: string;
  };
  visible: boolean;
}

export const videos: Video[] = [
  // Ohio State Lacrosse Videos
  {
    id: 'osu-max-out',
    title: "Final Off-Season Max Out",
    description: "Team hypes up a 500+ lb squat lift",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/6740b0d236726949748381d4.mp4",
    category: "Strength & Conditioning, Team Culture",
    team: "Ohio State Lacrosse",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png",
    stats: {
      openRate: "100%",
      viewRate: "260%"
    },
    visible: true
  },
  {
    id: 'osu-fight-song',
    title: "Post Game Fight Song",
    description: "Following a victory the team gathers for a post-game fight song celebration",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/67a7d6cb1fa8c06abcaa1abb-1.mp4",
    category: "Team Culture, Celebration",
    team: "Ohio State Lacrosse",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png",
    stats: {
      openRate: "90%",
      viewRate: "149%"
    },
    visible: true
  },
  {
    id: 'osu-coach-corner',
    title: "Coach's Corner",
    description: "Post-game evaluation with Coach Myers",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/679540e61000917c2eef5f3e.mp4",
    category: "Strategy, Post-Game",
    team: "Ohio State Lacrosse",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png",
    stats: {
      openRate: "76%",
      viewRate: "126%"
    },
    visible: true
  },

  // UTEP Videos
  {
    id: 'utep-volleyball',
    title: "Volleyball Hype",
    description: "Exclusive behind-the-scenes UTEP Volleyball pre-game hype video before their NCAA Tournament matchup.",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/67523a7440f3101116cafc07.mp4",
    category: "Volleyball, Pre-Game, Hype Video",
    team: "UTEP Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png",
    stats: {
      openRate: "26%",
      viewRate: "37%"
    },
    visible: true
  },
  {
    id: 'utep-basketball',
    title: "Pack the house",
    description: "Coach Golding wants every seat filled and every fan loud! Let's pack the stadium and bring the energy for this huge matchup",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/677ec43e4d7fe7b4dccdfc71.mp4",
    category: "Basketball, Hype Video, Tickets",
    team: "UTEP Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png",
    stats: {
      openRate: "25%",
      viewRate: "31%"
    },
    visible: true
  },
  {
    id: 'utep-tarmac',
    title: "Tarmac Moment",
    description: "Special behind-the-scenes footage of the team arriving for a crucial away game",
    videoUrl: "https://inbx.vip/4hO2qNM",
    category: "Football, Prep-game",
    team: "UTEP Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png",
    stats: {
      openRate: "22%",
      viewRate: "34%"
    },
    visible: true
  },
   {
    id: 'utep-celebration',
    title: "Big Win Moment",
    description: "An inside look at the team as they celebrate a huge win. ",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2024/10/6712b7a9c9419f556b380734.mov",
    category: "Football, Post-game, Celebration",
    team: "UTEP Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png",
    stats: {
      openRate: "22%",
      viewRate: "34%"
    },
    visible: true
  },

  // Kent State Videos
  {
    id: 'kent-pregame',
    title: "Happy Thanksgiving",
    description: "The 'coldest place on the planet' but still checking in",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/Kent-State-Top-Video.mp4",
    category: "Holidays,Funny",
    team: "Kent State Basketball",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png",
    stats: {
      openRate: "35%",
      viewRate: "48%",
      ctaClickRate: "10%"
    },
    visible: true
  },
  {
    id: 'kent-coach',
    title: "Coach's Prep",
    description: "Head coach Rob Senderoff breaks down the keys when taking on #5 Auburn",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/6734b0bfd5e305a99122a0c8-1.mp4",
    category: "Strategy, Pre-game",
    team: "Kent State Basketball",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png",
    stats: {
      openRate: "32%",
      viewRate: "45%"
    },
    visible: true
  },
  {
    id: 'kent-senior',
    title: "Introducing Insider Inbox",
    description: "Behind-the-scenes look at practice as coach introduces Insider Inbox to his collective members",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2024/10/IMG_0546-1.mov",
    category: "Launch Message",
    team: "Kent State Basketball",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png",
    stats: {
      openRate: "34%",
      viewRate: "43%",
      ctaClickRate: "12%"
    },
    visible: true
  },
  {
    id: 'kent-bus',
    title: "In the moment celebration",
    description: "Player take over as the team celebrates a big win on the bus",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/67299ac061aced168f82bffa.mov",
    category: "Celebration, Post-game",
    team: "Kent State Basketball",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png",
    stats: {
      openRate: "31%",
      viewRate: "46%",
    },
    visible: true
  },

  // Penn State Videos
  {
    id: 'psu-baseball-preview',
    title: "Baseball Season Preview",
    description: "A behind-the-scenes look at preparations for the season opener in Puerto Rico, building excitement for the upcoming games.",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/679eeaeb9ed5aa852c6b70c7-1.mp4",
    category: "Baseball, Pre-Season",
    team: "Penn State Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png",
    stats: {
      openRate: "43%",
      viewRate: "178%"
    },
    visible: true
  },
  {
    id: 'psu-hockey-pregame',
    title: "Hockey Pre-Game Access",
    description: "An exclusive behind-the-scenes look as Coach Guy Gadowsky and his staff prepare the locker room and finalize pre-game strategies before the season opener.",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/671c0aad73dccd75b56333f8-1.mp4",
    category: "Ice Hockey, Pre-game",
    team: "Penn State Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png",
    stats: {
      openRate: "22%",
      viewRate: "32%"
    },
    visible: true
  },
  {
    id: 'psu-basketball-alumni',
    title: "Basketball Alumni Check-in",
    description: "Happy New Year message to alumni. Reconnect with former team members, foster a sense of community, and encourage participation in an alumni event.",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/677703c7c11a793988cfbb25-1.mp4",
    category: "Basketball, Alumni",
    team: "Penn State Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png",
    stats: {
      openRate: "27%",
      viewRate: "34%",
      ctaClickRate: "9%"
    },
    visible: true
  }
  ,
  // Pitt Athletics Videos
  {
    id: 'pitt-football-victory',
    title: "Football Victory Celebration",
    description: "Behind-the-scenes celebration after major rivalry win",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/pitt-football.mp4",
    category: "Football",
    team: "Pitt Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2025/02/Pitt-Logo.png",
    stats: {
      openRate: "97%",
      viewRate: "210%"
    },
    visible: false
  },
  {
    id: 'pitt-basketball-senior',
    title: "Basketball Senior Night",
    description: "Exclusive coverage of senior night ceremonies",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/pitt-basketball.mp4",
    category: "Basketball",
    team: "Pitt Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2025/02/Pitt-Logo.png",
    stats: {
      openRate: "94%",
      viewRate: "175%"
    },
    visible: false
  },
  {
    id: 'pitt-script-society',
    title: "Script Society Event",
    description: "Highlights from exclusive member appreciation event",
    videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/Pitt-Allen-Green-Video.mp4",
    category: "Give Thanks, Launch Message",
    team: "Pitt Athletics",
    teamLogo: "https://insiderinbox.co/wp-content/uploads/2025/02/Pitt-Logo.png",
    stats: {
      openRate: "92%",
      viewRate: "168%"
    },
    visible: true
  }
];