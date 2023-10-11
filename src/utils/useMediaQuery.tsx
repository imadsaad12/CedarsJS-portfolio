import { useEffect, useState } from "react";

function useBreakpoint(breakpoint: number) {
  const breakPointToMatch = `(max-width:${breakpoint}px)`;
  const [matches, setMatches] = useState(
    window.matchMedia(breakPointToMatch).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakPointToMatch);
    const updateMatches = (event: any) => setMatches(event.matches);

    mediaQuery.addEventListener("change", updateMatches);

    // Initial check
    setMatches(mediaQuery.matches);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [breakPointToMatch]);

  return matches;
}

export default useBreakpoint;
