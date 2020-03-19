import { useState, useEffect, useRef } from "react";
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

// const useInView = ({ root = null, rootMargin, threshold = 0 }) => {
//   const [entry, updateEntry] = useState({});
//   const [node, setNode] = useState(null);

//   const observer = useRef(null);

//   useEffect(() => {
//     if (observer.current) observer.current.disconnect();

//     observer.current = new window.IntersectionObserver(
//       ([entry]) => updateEntry(entry),
//       {
//         root,
//         rootMargin,
//         threshold
//       }
//     );
//     const { current: currentObserver } = observer;

//     if (node) currentObserver.observe(node);

//     return () => currentObserver.disconnect();
//   }, [node, root, rootMargin, threshold]);

//   return [setNode, entry];
// };

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
        threshold
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

export default useInView;
