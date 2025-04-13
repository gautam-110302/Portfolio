import { useEffect, useRef, useState } from "react";

const useInViewCenter = () => {
  const ref = useRef(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if element center is near window center
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;

      const offset = Math.abs(elementCenter - windowCenter);
      const threshold = windowHeight * 0.2; // ~20% of screen height leeway

      setIsCentered(offset < threshold);
    };

    handleScroll(); // run once initially
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref, isCentered };
};

export default useInViewCenter;

