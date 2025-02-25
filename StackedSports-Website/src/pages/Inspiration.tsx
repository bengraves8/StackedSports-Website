import React, { useState, useMemo } from 'react';
import { Search, Filter, X, Tag } from 'lucide-react';
import { videos } from '../data/videos';

type VideoTags = string[];

const Inspiration = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Extract all unique tags from videos
  const availableTags = useMemo(() => {
    const allTags = videos.flatMap(video => {
      const categories = typeof video.category === 'string' 
        ? video.category.split(',') 
        : Array.isArray(video.category) 
          ? video.category 
          : [video.category];
      return categories.map(tag => tag.trim());
    });
    return Array.from(new Set(allTags)).sort();
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesSearch = 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const videoTags = typeof video.category === 'string'
        ? video.category.split(',').map(tag => tag.trim())
        : Array.isArray(video.category)
          ? video.category
          : [video.category];
          
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => videoTags.includes(tag));
      return matchesSearch && matchesTags && video.visible;
    });
  }, [searchQuery, selectedTags]);

  return (
    <div className="py-20">
      {/* Header */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Inspiration Gallery</h1>
          <p className="text-xl text-gray-600">
            Explore our collection of top-performing videos from leading athletic programs.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col gap-6">
              {/* Search */}
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search videos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <div className="text-sm font-medium text-gray-600 mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter by Tags</span>
                  <span className="sm:hidden">Filters</span>
                  {selectedTags.length > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {selectedTags.length}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 max-h-[120px] sm:max-h-none overflow-y-auto sm:overflow-visible pb-2">
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                      } whitespace-nowrap`}
                    >
                      {tag}
                      {selectedTags.includes(tag) && (
                        <span className="ml-1 text-xs">×</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600 truncate">
              {selectedTags.length > 0 ? (
                <span>
                  Showing {filteredVideos.length} videos tagged with{' '}
                  {selectedTags.map((tag, index) => (
                    <span key={tag}>
                      <span className="font-medium">{tag}</span>
                      {index < selectedTags.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </span>
              ) : (
                <span>Showing {filteredVideos.length} of {videos.filter(v => v.visible).length} videos</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[9/16] bg-black relative">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex flex-wrap gap-2 justify-end">
                      {(typeof video.category === 'string' 
                        ? video.category.split(',').map(tag => tag.trim())
                        : Array.isArray(video.category)
                          ? video.category
                          : [video.category]
                      ).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-black/75 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <video
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => {
                      setSelectedVideo(video.videoUrl);
                      setIsVideoModalOpen(true);
                    }}
                    preload="metadata"
                    playsInline
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={video.teamLogo}
                      alt={`${video.team} logo`}
                      className="h-6 mr-3"
                    />
                    <div className="text-sm text-gray-600">{video.team}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {video.description}
                  </p>
                  <div className={`flex ${Object.keys(video.stats).length === 2 ? 'justify-around' : 'justify-between'} items-center pt-4 border-t border-gray-100`}>
                    <div>
                      <div className="text-xl font-bold text-green-600">
                        {video.stats.openRate}
                      </div>
                      <div className="text-sm text-gray-500">Open Rate</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">
                        {video.stats.viewRate}
                      </div>
                      <div className="text-sm text-gray-500">View Rate</div>
                    </div>
                    {video.stats.ctaClickRate && (
                      <div>
                        <div className="text-xl font-bold text-green-600">
                          {video.stats.ctaClickRate}
                        </div>
                        <div className="text-sm text-gray-500">CTA Click Rate</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[400px] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => {
                setIsVideoModalOpen(false);
                setSelectedVideo(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative pt-[177.78%]">
              <video
                className="absolute inset-0 w-full h-full object-contain bg-black"
                controls
                autoPlay
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inspiration;