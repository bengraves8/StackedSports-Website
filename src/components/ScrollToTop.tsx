import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Send pageview to GA4
    ReactGA.send("pageview", {
      page_path: pathname + window.location.search,
      page_title: document.title
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;