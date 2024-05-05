import { useState, useEffect } from 'react';

function useMountedState(condition: boolean) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (condition) {
      setIsMounted(true);
    }

    return () => {
      // Clean-up code if needed
    };
  }, [condition]);

  return { isMounted };
}

export default useMountedState;
