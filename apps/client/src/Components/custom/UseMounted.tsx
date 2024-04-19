import { useState, useEffect } from 'react';

// Custom hook to check if the component is mounted or not
function useMountedState() {
  const [isMounted, setIsMounted] = useState(false);
  const [effectRunCount, setEffectRunCount] = useState(0);

  useEffect(() => {
    setEffectRunCount(effectRunCount + 1);

    if (effectRunCount === 3) {
      setIsMounted(true);
    }

    return () => {
      // Clean-up code if needed
    };
  }, [effectRunCount]);

  return { isMounted };
}

export default useMountedState;
