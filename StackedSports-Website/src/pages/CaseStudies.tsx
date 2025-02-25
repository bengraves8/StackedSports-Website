import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

interface CaseStudy {
  name: string;
  logo: string;
  visible?: boolean;
  category: string;
  description: string;
  results: {
    value: string;
    label: string;
  }[];
  imageUrl: string;
  link: string;
  id: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "Ohio State Lacrosse",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png",
    category: "Insider Inbox",
    description: "How Ohio State Men's Lacrosse transformed their 11th Man Club engagement and achieved record-breaking growth.",
    results: [
      { value: "22.8%", label: "Member growth" },
      { value: "66.7%", label: "Link open rate" },
      { value: "260%", label: "Peak video view rate" }
    ],
    imageUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/OSU-Lax-huddle.png",
    link: "/case-studies/ohio-state-lacrosse",
    id: "ohio-state-lacrosse",
    visible: true
  },
  {
    name: "UTEP Athletics",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png",
    category: "Stakd & Insider Inbox",
    description: "How UTEP Athletics achieved record-breaking fundraising success through a strategic dual-approach to donor and fan engagement.",
    results: [
      { value: "$10M", label: "Major gifts secured" },
      { value: "38K+", label: "Messages sent" },
      { value: "50.14%", label: "Top donor click rate" }
    ],
    imageUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/utep-football-helmet-pic-860x531-109621804.png",
    link: "/case-studies/utep",
    id: "utep",
    visible: true
  },
  {
    name: "Penn State Athletics",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png",
    category: "Insider Inbox",
    description: "How Penn State Athletics equipped each team with the necessary resources to independently help raise funds and engage their top donors.",
    results: [
      { value: "80%", label: "Platform adoption" },
      { value: "92%", label: "Donor satisfaction" }
    ],
    imageUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/alex-korolkoff-b_y4wUk6WhE-unsplash-3-scaled.jpg",
    link: "/case-studies/penn-state",
    id: "penn-state",
    visible: true
  },
  {
    name: "Pitt Athletics",
    logo: "https://insiderinbox.co/wp-content/uploads/2025/02/Pitt-Logo.png",
    category: "Insider Inbox",
    description: "How Pitt Athletics revolutionized donor engagement through the Script Society program.",
    results: [
      { value: "500+", label: "Active members" },
      { value: "85%", label: "Message open rate" },
      { value: "95%", label: "Member satisfaction" }
    ],
    imageUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/Pitt-Photo.jpg",
    link: "/case-studies/pitt",
    id: "pitt",
    visible: false
  },
  {
    name: "Northwestern Athletics",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/09/Northwestern-website-logo.png",
    category: "Insider Inbox",
    description: "How Northwestern Athletics transformed their donor engagement strategy through personalized communication.",
    results: [
      { value: "52%", label: "Response rate" },
      { value: "32%", label: "Click-through rate" },
      { value: "45%", label: "Video completion" }
    ],
    imageUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/Northwestern-Fencing.jpg",
    link: "/case-studies/northwestern",
    id: "northwestern",
    visible: false
  },
  {
    name: "LSU TAF",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/08/2nd.png",
    category: "Stakd",
    description: "How LSU's Tiger Athletic Foundation revolutionized their donor engagement strategy.",
    results: [
      { value: "65%", label: "Retention rate" },
      { value: "15,000+", label: "Active donors" },
      { value: "82%", label: "Message open rate" }
    ],
    imageUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/LSU-image-min-scaled.jpg",
    link: "/case-studies/lsu",
    id: "lsu",
    visible: false
  },
  {
    name: "Kent State Basketball",
    logo: "https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png",
    category: "Insider Inbox",
    description: "How Kent State Basketball and the Blue and Gold Collective partnered with Insider Inbox to provide collective members with an inside look at the program.",
    results: [
      { value: "25%", label: "Fundraising goal reached" },
      { value: "5,000", label: "Total engagements" },
      { value: "24.36%", label: "Video view rate" }
    ],
    imageUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/Kent-State-Basketball-stadium.jpg",
    link: "/case-studies/kent-state",
    id: "kent-state",
    visible: true
  }
];

const CaseStudies = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(caseStudies.map(study => study.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSearch = study.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || study.category === selectedCategory;
      const isVisible = study.visible !== false;
      return matchesSearch && matchesCategory && isVisible;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-20">
      {/* Header */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600">
            Discover how leading organizations are transforming their engagement strategies with Stacked Sports solutions.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredStudies.length} of {caseStudies.filter(study => study.visible !== false).length} case studies
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={study.imageUrl}
                    alt={study.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={study.logo}
                      alt={`${study.name} logo`}
                      className="h-8 mr-3"
                    />
                    <div>
                      <h3 className="font-bold text-xl">{study.name}</h3>
                      <span className="text-sm text-gray-600">{study.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {study.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-bold text-green-600">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(study.link)}
                    className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;