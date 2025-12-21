'use client';

import { useState, useEffect } from 'react';

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    // Initialize state based on window.matchMedia during first client-side render
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    // Default to false for server-side rendering
    return false;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener for changes
    mediaQueryList.addEventListener('change', listener);

    // Set initial value in effect (in case query or window state changed between initial render and effect)
    setMatches(mediaQueryList.matches);

    return () => {
      // Clean up event listener
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
