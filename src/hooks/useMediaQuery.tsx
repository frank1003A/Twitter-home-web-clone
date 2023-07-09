import { useEffect, useState } from "react";

type Sizes = {
  [key: string]: string;
};

export const useMediaQuery = (screen: string) => {
  const [matches, setMatches] = useState(false);

  const sizes: Sizes = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  };

  useEffect(() => {
    const query = `(max-width: ${sizes[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches, screen]);

  return matches;
};
