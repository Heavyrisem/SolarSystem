import React from "react";

// use effect once hook
export function useEffectOnce(effect: React.EffectCallback) {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      effect();
    }
  });
}
