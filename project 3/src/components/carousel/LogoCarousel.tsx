import React, { useEffect, useRef } from 'react';

interface Logo {
  name: string;
  imageUrl: string;
  bgColor: string;
}

const logos: Logo[] = [
  {
    name: 'Northwestern',
    imageUrl: 'https://insiderinbox.co/wp-content/uploads/2024/09/Northwestern-website-logo.png',
    bgColor: 'bg-[#4E2A84]'
  },
  {
    name: 'Kent State',
    imageUrl: 'https://insiderinbox.co/wp-content/uploads/2024/11/KSU-logo1-2.png',
    bgColor: 'bg-[#002664]'
  },
  {
    name: 'LSU',
    imageUrl: 'https://insiderinbox.co/wp-content/uploads/2024/08/2nd.png',
    bgColor: 'bg-[#461D7C]'
  },
  {
    name: 'Illinois State',
    imageUrl: 'https://insiderinbox.co/wp-content/uploads/2024/08/3rd-kdkdk.png',
    bgColor: 'bg-[#CE1126]'
  },
  {
    name: 'Penn State',
    imageUrl: 'https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png',
    bgColor: 'bg-[#041E42]'
  },
  {
    name: 'UTEP',
    imageUrl: 'https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png',
    bgColor: 'bg-[#FF8200]'
  },
  {
    name: 'Ohio State',
    imageUrl: 'https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png',
    bgColor: 'bg-[#BB0000]'
  }
];

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the first set of items and append them to create the infinite effect
    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;

    const animate = () => {
      if (scrollContainer && !isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
    };

    const animation = setInterval(animate, 20);

    return () => clearInterval(animation);
  }, [isPaused]);

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Organizations</h2>
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="max-w-[1000px] mx-auto overflow-hidden"
          >
            <div 
              ref={scrollRef}
              className="flex items-center space-x-8 overflow-hidden whitespace-nowrap"
              style={{ scrollBehavior: 'auto' }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="inline-flex flex-col items-center flex-shrink-0"
                  style={{ width: '180px' }}
                >
                  <div className="w-28 h-28 rounded-full bg-white shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-shadow">
                    <img
                      src={logo.imageUrl}
                      alt={`${logo.name} logo`}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;