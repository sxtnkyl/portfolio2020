import { useState, useEffect } from "react";
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

function useInView(ref, threshold) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.intersectionRatio >= threshold) setIntersecting(true);
      },
      {
        threshold,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  });

  return isIntersecting;
}

export default useInView;
